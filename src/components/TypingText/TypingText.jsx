import { useEffect, useState } from "react";

const phrases = [
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
  "REST API DEVELOPMENT",
  "FULL-STACK APPLICATIONS",
  "WEB SYSTEMS",
];

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let timeout;

    if (!deleting && text === currentPhrase) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && text === "") {
      setDeleting(false);

      setPhraseIndex((currentIndex) => {
        return (currentIndex + 1) % phrases.length;
      });
    } else {
      const typingSpeed = deleting ? 32 : 65;

      timeout = setTimeout(() => {
        setText((currentText) => {
          if (deleting) {
            return currentPhrase.substring(
              0,
              currentText.length - 1
            );
          }

          return currentPhrase.substring(
            0,
            currentText.length + 1
          );
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="typing-text">
      {text}
      <span className="typing-text__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

export default TypingText;