import { useEffect } from "react";

const TypingAnimation = ({ textId = "typingText", speed = 50 }) => {
  useEffect(() => {
    const typingElement = document.getElementById(textId);
    if (!typingElement) return;

    const fullText = typingElement.textContent;
    typingElement.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < fullText.length) {
        typingElement.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        typingElement.classList.remove("typing-animation");
      }
    }

    typeWriter();
  }, [textId, speed]);

  return null; // Faqat JS bajaradi
};

export default TypingAnimation;
