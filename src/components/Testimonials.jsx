/* eslint-disable react/no-unescaped-entities */
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Testimonials = () => {
  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20"  id="temoi">
      <div className="lg:w-1/3 flex flex-col">
        <p className="text-[#0c4f37] uppercase md:text-xl text-lg" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.1em",
            }}>
        Témoignages


        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize py-3" style={{
              fontFamily: "'Playfair Display', serif",
             
            }}>
          Regardez ce que nos clients disent !
        </h1>
        <p className="text-[#a5a5a5] text-sm" style={{
              fontFamily: "'Playfair Display', serif",
             
            }}>
Nos clients apprécient la qualité exceptionnelle de nos produits et services.
        </p>

        {/* <div className="lg:flex hidden gap-x-12 mt-16">
          <button className="w-12 h-12 rounded-full border border-[#576D80] flex justify-center items-center text-2xl text-[#576D80] focus:bg-[#576D80] focus:text-white hover:bg-[#576D80] hover:text-white">
            <IoArrowBack />
          </button>
          <button className="w-12 h-12 rounded-full border border-[#576D80] flex justify-center items-center text-2xl text-[#576D80] focus:bg-[#576D80] focus:text-white hover:bg-[#576D80] hover:text-white">
            <IoArrowForward />
          </button>
        </div> */}
      </div>
      <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
        <FaQuoteLeft className="text-[#ffe999] text-3xl" />
        <p className="font-medium pt-2 pb-8" style={{
              fontFamily: "'Playfair Display', serif",
             
            }}>
         Extrêmement satisfaits des services de COGEB Groupe, dont l'expertise et le professionnalisme ont dépassé toutes nos attentes
        </p>
        <div className="border-t border-[#d4d4d4] flex items-center py-4">
          {/* <img
            src="/assets/image_6.jpg"
            alt=""
            className="rounded-full h-12 w-12 object-cover"
          /> */}
          <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p>Client Cogeb</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="cursor-auto text-[#ffe999] last:text-[#d4d4d4]"
                >
                  {/* <FaStar className="" /> */}
                </button>
              ))}
            </div>
          </span>
        </div>
        {/* <button className="bg-gradient-to-r from-[#C0A26C] to-[#eff9f9] rounded-full h-16 w-16 cursor-auto absolute -top-6 -left-6"></button> */}
      </div>
    </main>
  );
};

export default Testimonials;
