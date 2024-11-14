import React, { useState } from 'react';
import FormDialog from './FormDialog'; // Assurez-vous que le chemin vers FormDialog est correct
import { useTranslation } from 'react-i18next';

const Become_an_agent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="container mx-auto mt-32 mb-24 px-3">
      <div className="bg-[#576D80] rounded-3xl flex items-center justify-center flex-col lg:pl-16 lg:h-60 relative z-20">
        <div className="flex flex-col items-center w-full lg:pt-0 pt-12 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4">
            <span className="lg:text-left text-center">
              <h1
                className="lg:text-4xl text-3xl font-medium py-3 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.1em",
                }}
              >
                {t("Become_an_agent.client_title")}
              </h1>
              <p
                className="text-white text-sm lg:w-11/12"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {t("Become_an_agent.description")}
              </p>
            </span>
            <button
              onClick={handleOpen}
              className="bg-white text-[#576D80] px-8 py-3 rounded-full lg:mt-0 mt-8 lg:ml-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("Become_an_agent.signup_button")}
            </button>
          </div>
        </div>
      </div>

      {/* Modal d'inscription */}
      <FormDialog open={open} onClose={handleClose} />
    </main>
  );
};

export default Become_an_agent;
