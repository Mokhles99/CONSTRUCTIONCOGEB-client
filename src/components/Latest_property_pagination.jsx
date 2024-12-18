import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/product.actions';
import { addToCarttwo } from '../actions/carttwo.actions';
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '600px',
  bgcolor: '#122023',
  color: 'rgb(201, 150, 26)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const confirmationModalStyle = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  bgcolor: 'white',
  color: 'black',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontSize: '1rem',
};

const LatestPropertyWithPagination = ({ products = [], activeTypes = [] }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const itemsPerPage = 8;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFilteredProducts(products); // Initialize with all products
  }, [products]);

  const handleFilterByType = (type) => {
    setFilteredProducts(type === 'Tous' ? products : products.filter(product => product.type === type));
    setCurrentPage(0); // Reset to the first page
  };

  const handleAddToCart = (productId) => {
    const cartIdFromStorage = localStorage.getItem('cartId');
    if (!cartIdFromStorage) {
      console.error("Cart ID is not found in localStorage");
      return;
    }
    dispatch(addToCarttwo(cartIdFromStorage, productId, 1));
    setShowConfirmationModal(true);

    setTimeout(() => {
      setShowConfirmationModal(false);
    }, 2000);
  };

  const handleProductClick = (productId) => {
    dispatch(getProductById(productId));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.floor(filteredProducts.length / itemsPerPage)));
  const handlePrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));

  const startIndex = currentPage * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  
  return (
    <div className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-3xl uppercase" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.3em", marginTop:"10rem" }}>
            {t("products.ourProducts")}
          </h1>
          <h1 className="lg:text-4xl text-xl font-medium capitalize py-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("products.productSelection")}
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("products.description")}
          </p>
        </div>
        {activeTypes.length > 0 && (
          <div className="grid grid-cols-3 gap-1 lg:w-2/5 lg:pt-0 pt-6">
            <button
              className="text-[#001F75] rounded-full border border-[#001F75] px-1 py-2 hover:bg-[#001F75] hover:text-white focus:bg-[#001F75] focus:text-white"
              onClick={() => handleFilterByType('Tous')}
            >
              {t("products.all")}
            </button>
            {activeTypes.map((type, index) => (
              <button
                key={index}
                style={{ minWidth: '90px' }}
                className="text-[#001F75] rounded-full border border-[#001F75] px-1 py-2 text-base font-bold hover:bg-[#001F75] hover:text-white focus:bg-[#001F75] focus:text-white"
                onClick={() => handleFilterByType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Section for Products */}
      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {selectedProducts.map((product, index) => (
            <div key={index} className="shadow-lg rounded-3xl" onClick={() => handleProductClick(product._id)}>
              <div className="bg-gray-190 p-2 rounded-2xl">
                <span className="flex flex-col gap-y-1 py-2">
                  <p className="text-xl font-medium text-gray-700">{product.name}</p>
                  <p className="text-base font-medium text-gray-700">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product._id)} 
                    className="mt-1 py-1 bg-[#664532] text-white rounded-full hover:bg-blue-700"
                    style={{ display: 'flex', fontSize: '70%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto', width: '30%' }}
                  >
                    {t("products.addToCart")} <MdOutlineShoppingCart style={{ marginLeft: '1px' }} />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center pt-12">
          <button
            onClick={handlePrevPage}
            className="text-[#001F75] rounded-full border border-[#001F75] px-4 py-2 focus:bg-[#001F75] focus:text-white mr-2"
            disabled={currentPage === 0}
          >
            {t("pagination.previous")}
          </button>
          <span className="mx-2">{t("pagination.page")} {currentPage + 1} {t("pagination.of")} {totalPages}</span>
          <button
            onClick={handleNextPage}
            className="text-[#001F75] rounded-full border border-[#001F75] px-6 py-2 focus:bg-[#001F75] focus:text-white"
            disabled={startIndex + itemsPerPage >= filteredProducts.length}
          >
            {t("pagination.next")}
          </button>
        </div>
      </section>

      {/* Modals */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          {selectedProduct && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <h2 id="modal-modal-title">
                  <span style={{ color: 'gold', fontWeight: 'bold' }}>{t("productDetails.product")}:</span>
                  <span style={{ color: 'silver' }}>{selectedProduct.name}</span>
                </h2>
                <p id="modal-modal-description" style={{ color: 'silver', textAlign: 'justify' }}>
                  <span style={{ color: 'gold', fontWeight: 'bold' }}>{t("productDetails.details")}:</span>
                  <span>{selectedProduct.description}</span>
                </p>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      
      <Modal open={showConfirmationModal} onClose={() => setShowConfirmationModal(false)} aria-labelledby="confirmation-modal-title">
        <Box sx={confirmationModalStyle}>
          <AiOutlineCheckCircle color="green" size={30} />
          <span>{t("confirmation.productAdded")}</span>
        </Box>
      </Modal>
    </div>
  );
};

export default LatestPropertyWithPagination;
