
import './Home.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categoriesImgs = {
  electronics: '/Imgs/Electronics.jpg', 
  jewelery: '/Imgs/Jewelery.jpg', 
  "men's clothing": '/Imgs/Men-cloth.jpg',
  "women's clothing": '/Imgs/Women-cloth.jpg',
};

function Home() {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setMainCategories(json));
  }, []);

  return (
    <>
      <div>
      <img className='background_picture' src="/Imgs/background_picture.png" alt="background_picture" />
      <div className='Categories'>
        <h1 className='Categories'>Categories</h1>
        {mainCategories ? (
        <>
          <div className="categories-container" >
            {mainCategories.map((category, index) => (
            <div className="category" key={index}>         
                <Link to={`/shop/${category}`} className='links'>
                  <div>
                    <img
                        className="category-img"
                        src={categoriesImgs[category]}
                        alt={category}
                    />
                  </div>
                  <div>
                    <span className="category-title">{category}</span>
                  </div>
                </Link>            
            </div>        
            ))}
          </div>          
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
      </div>
    </div>
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

export default Home
