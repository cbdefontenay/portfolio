import React, { useState } from "react";
import LanguagePicker from "./LanguagePicker.tsx";

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
      <img
        src="../../public/france.svg"
        height="30"
        width="30"
        alt="Drapeau de la France"
        className="cursor-pointer"
        onClick={handleOpenPopup}
      />
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-1/3 bg-neutral-300 dark:bg-tertiary p-8 hover:shadow-md dark:shadow-slate-500 rounded-md">
            <button
              className="absolute top-2 right-2 dark:text-gray-300 text-secondary text-bold text-2xl"
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
