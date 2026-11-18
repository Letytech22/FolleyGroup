import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";

export function Preloader() {
  const router = useRouter();

  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const fadeTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);

  function clearTimers() {
    if (fadeTimer.current !== null) {
      window.clearTimeout(fadeTimer.current);
    }

    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
    }
  }

  function showLoader() {
    clearTimers();
    setLeaving(false);
    setVisible(true);
  }

  function hideLoader(delay = 300) {
    clearTimers();

    fadeTimer.current = window.setTimeout(() => {
      setLeaving(true);
    }, delay);

    hideTimer.current = window.setTimeout(() => {
      setVisible(false);
    }, delay + 500);
  }

  useEffect(() => {
    // Initial website load
    showLoader();
    hideLoader(3000);

    // Show before moving to another page
    const unsubscribeBefore = router.subscribe(
      "onBeforeNavigate",
      (event) => {
        if (event.pathChanged) {
          showLoader();
        }
      }
    );

    // Hide once the new page has resolved
    const unsubscribeResolved = router.subscribe(
      "onResolved",
      (event) => {
        if (event.pathChanged) {
          hideLoader(2500);
        }
      }
    );

    return () => {
      clearTimers();
      unsubscribeBefore();
      unsubscribeResolved();
    };
  }, [router]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`folley-preloader ${
        leaving ? "folley-preloader--leaving" : ""
      }`}
      aria-hidden="true"
    >
      <div className="folley-preloader__content">
        <div className="folley-preloader__mark">
          <span className="folley-preloader__folley">
            FOLLEY
          </span>

          <span className="folley-preloader__group">
            GROUP
          </span>
        </div>

        <div className="folley-preloader__track">
          <span className="folley-preloader__line" />
        </div>
      </div>
    </div>
  );
}