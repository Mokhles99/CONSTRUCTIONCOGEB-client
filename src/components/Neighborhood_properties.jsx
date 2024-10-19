import React, { useState, useRef, useEffect } from 'react';
import LatestPropertyWithPagination from './Latest_property_pagination';

const productTypeMapping = {
  'Fer': ['Beton', 'Marchant'],
  'Ciment': ['Colle', 'Normal'],
  'Brique': []
};

const Neighborhood_properties = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFamille, setActiveFamille] = useState('Tous');
  const [activeTypes, setActiveTypes] = useState([]);
  const productsRef = useRef(null);

  useEffect(() => {
    // handleFilter('Tous'); // Sélectionne 'Tous' par défaut au chargement
  }, [products]);

  const handleFilter = (famille) => {
    setActiveFamille(famille);
    if (famille === 'Tous') {
      setFilteredProducts(products);
      setActiveTypes([]);
    } else {
      setFilteredProducts(products.filter(product => product.famille === famille));
      setActiveTypes(productTypeMapping[famille] || []);
    }
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  const getActiveClass = (famille) => {
    return activeFamille === famille ? 'shadow-blue-500 shadow-lg cursor-pointer' : 'cursor-pointer';
  };

  return (
    <main className="container mx-auto px-3 lg:pt-24" id="produits">
      <p className="text-[#0c4f37] uppercase md:text-3xl text-lg" style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "0.2em",
        marginTop: "2rem"
      }}>
        NOS CATALOGUES
      </p>
      <h1 className="lg:text-4xl text-xl font-medium capitalize pt-3 pb-12" style={{
        fontFamily: "'Playfair Display', serif",
      }}>
        Choisir vos désirs 
      </h1>

      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
        <div className={`relative md:col-span-4 rounded-3xl ${getActiveClass('Fer')}`} onClick={() => handleFilter('Fer')}>
          <img
            src="/assets/fer.png"
            alt="Fer"
            className="rounded-3xl object-cover md:h-80 h-full w-full"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-3xl"></span>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
              FER
            </p>
          </span>
        </div>

        <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Ciment')}`} onClick={() => handleFilter('Ciment')}>
          <img
            src="/assets/ciment.png"
            alt="Ciment"
            className="rounded-3xl object-cover md:h-80 h-full w-full"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-3xl"></span>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
              CIMENT
            </p>
          </span>
        </div>

        <div className={`relative md:col-span-3 rounded-3xl ${getActiveClass('Brique')}`} onClick={() => handleFilter('Brique')}>
          <img
            src="/assets/briquenew.jpg"
            alt="Brique"
            className="rounded-3xl object-cover md:h-80 h-full w-full"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-3xl"></span>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
              BRIQUE
            </p>
          </span>
        </div>

        <div className={`relative md:col-span-4 rounded-3xl ${getActiveClass('Tous')}`} onClick={() => handleFilter('Tous')}>
          <img
            src="/assets/newnew.png"
            alt="Tous les produits"
            className="rounded-3xl object-cover md:h-80 h-60 w-full"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-3xl"></span>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white lg:text-3xl md:text-base text-sm" style={{
              fontFamily: "'CinzelDecorative', serif",
              fontWeight: "bold",
              letterSpacing: "0.2em",
            }}>
              TOUS LES PRODUITS
            </p>
          </span>
        </div>
      </section>

      <div ref={productsRef}>
        <LatestPropertyWithPagination products={filteredProducts} activeTypes={activeTypes} />
      </div>
    </main>
  );
};

export default Neighborhood_properties;
