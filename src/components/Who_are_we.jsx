import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { getAllAbouts } from "../actions/about.actions";

const Who_are_we = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    dispatch(getAllAbouts());
  }, [dispatch]);

  const abouts = useSelector((state) => state.about.abouts);
  const firstImageUrl = abouts.length > 0 && abouts[0].files.length > 0 ? abouts[0].files[0].url : '';
  const secondImageUrl = abouts.length > 1 && abouts[1].files.length > 0 ? abouts[1].files[0].url : '';
  const thirdImageUrl = abouts.length > 2 && abouts[2].files.length > 0 ? abouts[2].files[0].url : '';

  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8" id="propos">
      <div className="lg:w-2/5">
        <p className="text-[#0c4f37] md:text-3xl text-lg font-medium" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.3em" }}>
          {t("Who_are_we.title")}
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          {t("Who_are_we.heading")}
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5] text-justify" style={{ fontFamily: "'Playfair Display', serif " }}>
          {t("Who_are_we.description")}
        </p>

        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <p className="text-[#a5a5a5] w-5/5 text-justify">{t("Who_are_we.card1")}</p>
          </div>
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <p className="text-[#a5a5a5] w-5/5 text-justify">{t("Who_are_we.card2")}</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[40rem]">
        <img src={firstImageUrl || "/assets/proposconst11.png"} alt="" className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover" />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img src={secondImageUrl || "/assets/proposconst21.png"} alt="" className="w-full h-3/5 rounded-3xl shadow-md object-cover" />
          <img src={thirdImageUrl || "/assets/briqueboispropos 1.png"} alt="" className="w-full h-2/5 rounded-3xl shadow-md object-cover" />
        </div>
      </div>
    </main>
  );
};

export default Who_are_we;
