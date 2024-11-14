import { FaCartPlus } from "react-icons/fa"; // Vente
import { MdSupportAgent } from "react-icons/md"; // Conseil Client
import { FaTruckMoving } from "react-icons/fa"; // Transport
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20" id="service">
      <div className="container mx-auto px-3 text-center">
        <p
          className="uppercase text-3xl py-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.3em",
          }}
        >
          {t("Services.main_title")}
        </p>
        <h1
          className="lg:text-2xl text-2xl font-medium"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {t("Services.description")}
        </h1>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#001F75] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <FaCartPlus className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">{t("Services.sale.title")}</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t("Services.sale.description")}
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#001F75] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <MdSupportAgent className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">{t("Services.customer_advice.title")}</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t("Services.customer_advice.description")}
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#001F75] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <FaTruckMoving className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">{t("Services.transport.title")}</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t("Services.transport.description")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
