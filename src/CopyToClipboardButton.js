import { useContext } from "react";
import { ContextDog } from "./Navigation";

export default function CopyToClipboardButton() {
    const { dogNameOfDetailPage, setDogNameOfDetailPage } = useContext(ContextDog)


  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        console.log("pasted link to your clipboard");
      })
      .catch((error) => {
        console.error("Couldn't paste the link to your clipboard ", error);
      });
  };

  return (
    <button 
    className="copyButton"
    style={{display: dogNameOfDetailPage === '' ? 'none' : 'inline'}}
    onClick={copyToClipboard}
    >copy link 🔗</button>
  );
}


