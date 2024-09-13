
import './Shop.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../../store';

function Shop() {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const productsPerPage = 16;
  const {  addToCart } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      const data = await res.json();
      setAllProducts(data);
      setAllPages(Math.ceil(data.length / productsPerPage));
      setCurrentPage(1);
    };

    fetchProducts();
  }, [category, setAllProducts]);

  const handlePagePagination = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pagePagination = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
    <img className='background_picture' src="/Imgs/background_picture2.png" alt="background_picture" />
    <div className='page-title'>
      <img className='page-logo' src="/Imgs/furniro-logo.webp" alt="logo-img" />
      <h1 className='page-name'>Shop</h1>
      <p>
        <span className='pageName-nav'>Home</span>  
        <span className='mark'>{">"}</span>
        <span className='pageName2-nav'>Shop</span> 
      </p>
    </div>  
    {allProducts ? (
      <>
      <container className="all-products">
        <div className="product-grid">
        {pagePagination.map((product) => (
          <>
          <div key={product.id} className="product-card">
            <div className="product-img-container">
              <img src={product.image} alt={product.title} className="product-img" />
              <button
                className="addToCart-Btn"
                onClick={() => addToCart({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
            <div>
              <p className="product-category">{product.category}</p>
            </div>
            <Link className='product-info' to={`/product/${product.id}`}>
              <p className='product-title'>              
                  {product.title}              
              </p>
              <p className='product-description'>
                {product.description}
              </p>                           
              <p className='product-price'>${product.price}</p>
            </Link>          
          </div>
          </>
        ))}
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button className="pagination-Prev-Btn" onClick={handlePrevPage}>
              Prev
            </button>
          )}
          {Array.from({ length: allPages }, (_, index) => (
            <>
              <button
                key={index + 1}
                onClick={() => handlePagePagination(index + 1)}
                disabled={currentPage === index + 1}
                className={`pagination-Btn ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
              >
                {index + 1}
              </button>            
            </>
          ))}
          {currentPage < allPages && (
              <button className="pagination-Next-Btn" onClick={handleNextPage}>
                Next
              </button>
            )}        
        </div>        
      </container>      
    </>
    ) : (
      <div className='server-wait-msg'>
        <h1 className='Loading'>Loading...Please Wait...</h1>
        <div className='loader'></div>
        <h1 className='Loading'>If products did not load, please check the api server </h1>
        <a href={'https://fakestoreapi.com/docs'} className='api-server'>https://fakestoreapi.com/docs</a>
        <h1 className='warning'>The api server might not be working, or down, please click the link to test it...</h1>
      </div>
    )}
    <div className='red-part-footer'>
        <div className='footer-group'>
          <div>
            <img className='footer-img' src="/Imgs/trophy-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>High Quality</span>
          <p className='dark-grey-words'>crafted from top materials</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/tick-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
            <span>Warranty Protection</span>
            <p className='dark-grey-words'>Over 2 years</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/shipping-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>Free Shipping</span>
          <p className='dark-grey-words'>Order over 150 $</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/customerSupport-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>24 / 7 Support</span>
          <p className='dark-grey-words'>Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
