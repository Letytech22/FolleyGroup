import {
    type ReactNode,
    useEffect,
    useRef,
    useState,
  } from "react";
  
  type RevealDirection = "up" | "left" | "right";
  
  export function ScrollReveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
  }: {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: RevealDirection;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const element = ref.current;
  
      if (!element) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
  
          if (!entry) return;
  
          setVisible(entry.isIntersecting);
        },
        {
          threshold: 0.12,
        }
      );
  
      observer.observe(element);
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <div
        ref={ref}
        style={{
          transitionDelay: `${delay}ms`,
        }}
        className={`folley-reveal folley-reveal--${direction} ${
          visible ? "folley-reveal--visible" : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  }