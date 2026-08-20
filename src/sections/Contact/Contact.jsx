import { useState } from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  GitFork,
  Mail,
  MapPin,
  Send,
  TriangleAlert,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (formStatus.message) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!accessKey) {
      setFormStatus({
        type: "error",
        message:
          "Contact form configuration is missing. Please contact me directly by email.",
      });

      return;
    }

    const contactForm = event.currentTarget;
    const submittedData = new FormData(contactForm);
    const payload = Object.fromEntries(submittedData.entries());

    payload.access_key = accessKey;
    payload.from_name = "Sajid Portfolio";
    payload.subject = `New portfolio message from ${formData.name.trim()}`;
    payload.replyto = formData.email.trim();
    payload.name = formData.name.trim();
    payload.email = formData.email.trim();
    payload.message = formData.message.trim();
    payload.botcheck = payload.botcheck || "";

    setIsSubmitting(true);

    setFormStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Your message could not be sent."
        );
      }

      setFormStatus({
        type: "success",
        message:
          "Message sent successfully. Thank you for reaching out — I'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      contactForm.reset();
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setFormStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong while sending your message. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__section-header">
          <div className="contact__section-label">
            <span className="contact__section-number">
              08
            </span>

            <span className="contact__section-line"></span>

            <span>Contact</span>
          </div>

          <span className="contact__section-meta">
            Opportunities / Projects / Collaboration
          </span>
        </div>

        <div className="contact__main">
          <div className="contact__intro">
            <span className="contact__micro-label">
              Start a conversation
            </span>

            <h2>
              Let&apos;s Build
              <br />

              Something
              <br />

              Useful

              <span>.</span>
            </h2>

            <div className="contact__availability">
              <span className="contact__availability-dot"></span>

              <span>
                Open to software engineering opportunities
              </span>
            </div>

            <p className="contact__description">
              Have a full-stack software engineering role,
              development project, collaboration, or an idea
              worth discussing? Send me a message.
            </p>

            <div className="contact__quick">
              <span className="contact__quick-label">
                Direct contact
              </span>

              <a
                href="mailto:sajidulislam2225@gmail.com"
                className="contact__email"
              >
                <Mail
                  size={19}
                  strokeWidth={1.5}
                />

                <span>
                  sajidulislam2225@gmail.com
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </a>

              <div className="contact__location">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                />

                <span>Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper">
            <div className="contact__form-top">
              <span>Message / 01</span>

              <span className="contact__form-live">
                <span></span>
                Email delivery active
              </span>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <input
                type="checkbox"
                name="botcheck"
                className="contact__botcheck"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="contact__field">
                <label htmlFor="contact-name">
                  <span>01</span>
                  Name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  <span>02</span>
                  Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact__field contact__field--message">
                <label htmlFor="contact-message">
                  <span>03</span>
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about the opportunity, project, or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={5000}
                  required
                />
              </div>

              <div className="contact__submit-area">
                <div
                  className={`contact__form-note ${
                    formStatus.type
                      ? `contact__form-note--${formStatus.type}`
                      : ""
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {formStatus.type === "success" && (
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.7}
                    />
                  )}

                  {formStatus.type === "error" && (
                    <TriangleAlert
                      size={18}
                      strokeWidth={1.7}
                    />
                  )}

                  <p>
                    {formStatus.message ||
                      "Your message will be delivered directly to my email."}
                  </p>
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting
                      ? "Sending..."
                      : "Send message"}
                  </span>

                  <Send
                    size={18}
                    strokeWidth={1.6}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact__links">
          <a
            href="https://github.com/Saj1d-prompt"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <div className="contact__link-top">
              <span>01</span>

              <GitFork
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span className="contact__link-label">
                Code / Projects
              </span>

              <strong>GitHub</strong>
            </div>

            <ArrowUpRight
              className="contact__link-arrow"
              size={21}
              strokeWidth={1.5}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sajid-ul-islam-682760389/"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <div className="contact__link-top">
              <span>02</span>

              <ArrowUpRight
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span className="contact__link-label">
                Professional Network
              </span>

              <strong>LinkedIn</strong>
            </div>

            <ArrowUpRight
              className="contact__link-arrow"
              size={21}
              strokeWidth={1.5}
            />
          </a>

          <a
            href="mailto:sajidulislam2225@gmail.com"
            className="contact__link"
          >
            <div className="contact__link-top">
              <span>03</span>

              <Mail
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span className="contact__link-label">
                Direct Message
              </span>

              <strong>Email</strong>
            </div>

            <ArrowUpRight
              className="contact__link-arrow"
              size={21}
              strokeWidth={1.5}
            />
          </a>

          <a
            href="/Sajid-Ul-Islam-CV.pdf"
            download="Sajid-Ul-Islam-CV.pdf"
            className="contact__link"
          >
            <div className="contact__link-top">
              <span>04</span>

              <Download
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span className="contact__link-label">
                Curriculum Vitae
              </span>

              <strong>Résumé</strong>
            </div>

            <Download
              className="contact__link-arrow"
              size={20}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;