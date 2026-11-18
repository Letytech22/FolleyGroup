import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/send-contact")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          success: true,
          message: "Folley Group contact API is running",
        });
      },

      POST: async ({ request }) => {
        try {
          const {
            name,
            email,
            phone,
            service,
            message,
          } = await request.json();

          if (!name || !email || !service || !message) {
            return Response.json(
              {
                error: "Missing required fields",
              },
              {
                status: 400,
              }
            );
          }

          const apiKey = process.env["BREVO_API_KEY"];
          const senderEmail =
            process.env ["BREVO_SENDER_EMAIL"];
          const recipientEmail =
            process.env ["CONTACT_TO_EMAIL"];

          if (
            !apiKey ||
            !senderEmail ||
            !recipientEmail
          ) {
            console.error(
              "Missing email environment variables"
            );

            return Response.json(
              {
                error:
                  "Email service is not configured",
              },
              {
                status: 500,
              }
            );
          }

          const brevoResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
              method: "POST",

              headers: {
                accept: "application/json",
                "content-type": "application/json",
                "api-key": apiKey,
              },

              body: JSON.stringify({
                sender: {
                  name: "Folley Group Website",
                  email: senderEmail,
                },

                to: [
                  {
                    email: recipientEmail,
                    name: "Folley Group",
                  },
                ],

                replyTo: {
                  email,
                  name,
                },

                subject: `Website enquiry: ${service}`,

                textContent: [
                  "New enquiry from the Folley Group website",
                  "",
                  `Name: ${name}`,
                  `Email: ${email}`,
                  `Phone: ${
                    phone || "Not provided"
                  }`,
                  `Service: ${service}`,
                  "",
                  "Message:",
                  message,
                ].join("\n"),
              }),
            }
          );

          if (!brevoResponse.ok) {
            const brevoError =
              await brevoResponse.text();

            console.error(
              "Brevo error:",
              brevoError
            );

            return Response.json(
              {
                error:
                  "Unable to send message",
                details: brevoError,
              },
              {
                status: 500,
              }
            );
          }

          const result =
            await brevoResponse.json();

          return Response.json({
            success: true,
            messageId: result.messageId,
          });
        } catch (error) {
          console.error(
            "Contact form error:",
            error
          );

          return Response.json(
            {
              error: "Something went wrong",
            },
            {
              status: 500,
            }
          );
        }
      },
    },
  },
});