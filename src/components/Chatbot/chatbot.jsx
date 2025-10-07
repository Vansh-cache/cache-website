import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.n8nchatui.com/v1/embed.js";
    script.type = "module";
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          n8nChatUrl:
            "https://koustubh-sonekar.n8n-wsk.com/webhook/ad5dff5f-0b31-46c9-a228-91bd696a2462/chat",
          theme: {
            button: {
              right: 30,
              left: "auto",
              bottom: 20,
              size: 50,
              iconColor: "white",
              zIndex: 1,
              backgroundColor: "red",
              border: "none",
              boxShadow: "none",
              outline: "none",
              hoverBackgroundColor: "transparent",
            },
            chatWindow: {
              title: "Zuno",
              welcomeMessage: "Hi! I'm your assistant. Ask me anything.",
              textColor: "#000",
              borderColor: "#dc2626",
              borderSize: "1px",
              errorMessage: "? Couldn't reach the bot. Try again later.",
              textInput: {
                placeholder: "Type here...",
                sendButtonColor: "#dc2626",
              },
              botMessage: { backgroundColor: "#dc2626", textColor: "#fff" },
              userMessage: { backgroundColor: "#eee", textColor: "#000" },
            },
          },
        });
      }
    };

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

 
}

export { Chatbot };
export default Chatbot;
