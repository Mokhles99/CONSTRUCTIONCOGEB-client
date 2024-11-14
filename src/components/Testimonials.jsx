/* eslint-disable react/no-unescaped-entities */
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20" id="temoi">
      <div className="lg:w-1/3 flex flex-col">
        <p
          className="text-[#0c4f37] uppercase md:text-xl text-lg"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.1em",
          }}
        >
          {t("Testimonials.testimonials_title")}
        </p>
        <h1
          className="lg:text-4xl text-3xl font-medium capitalize py-3"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {t("Testimonials.header")}
        </h1>
        <p
          className="text-[#a5a5a5] text-sm"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {t("Testimonials.description")}
        </p>
      </div>
      <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
        <FaQuoteLeft className="text-[#ffe999] text-3xl" />
        <p
          className="font-medium pt-2 pb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {t("Testimonials.quote")}
        </p>
        <div className="border-t border-[#d4d4d4] flex items-center py-4">
          <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p>{t("Testimonials.client_name")}</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="cursor-auto text-[#ffe999] last:text-[#d4d4d4]"
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
