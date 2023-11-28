import React, { useState } from "react";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import LanguagePicker from "./LanguagePicker.tsx";

const currentURL = new URL(window.location.href);
const lang = getLangFromUrl(currentURL);

const t = useTranslations(lang);

interface PopupProps {}

const Popup: React.FC<PopupProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenPopup}>{t("lang.choice")}</button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-2/3 bg-tertiary p-8 shadow-md rounded">
            <button
              className="absolute top-2 right-2 text-gray-300"
              onClick={handleClosePopup}
            >
              X
            </button>
            <p>
              <LanguagePicker />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
