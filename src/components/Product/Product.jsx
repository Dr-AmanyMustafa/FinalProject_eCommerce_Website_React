import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../../store';
import './Product.css'

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useStore();
  const [productQuantity, setProductQuantity] = useState(1);
  const [similarProducts, setsimilarProducts] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));

    fetch('https://fakestoreapi.com/products?limit=4')
    .then((res) => res.json())
    .then((data) => setsimilarProducts(data));
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, productQuantity });
    }
  };
 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  return (
      <>
        <div className="product-red-nav">
          <div className='product-redNav-grid'>
            <Link to="/" className='page-nav-name'>Home</Link>
            <span className='mark'>{">"}</span>
            <Link to="/shop" className='page-nav-name2'>Shop</Link>
            <span className='mark2'>{">"}</span>
            <span className='vertical-line'></span>
            {product ? ( <span className="page-nav-title">{product.title}</span> ) : (<span className="page-nav-title">Loading Product Name</span>)}
          </div>
        </div>
        <div className="single-product-page">
          {product ? (
            <>
            <div className='product-imgs-group'>
              <div className='similar-products-container'>
                {similarProducts.map((similarProducts)=> (
                  <Link
                    className='similar-product-background' 
                    key={similarProducts.id} to={`/product/${similarProducts.id}`}>
                    <img className='similar-product-img' src={similarProducts.image} alt={similarProducts.title} /> 
                  </Link>
                ))}
              </div>
              <div className="productPage-img-container">
                <img className='productPage-img' src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="product-details">
              <h1>{product.title}</h1>
              <p className='productPage-price'>${product.price}</p>
              <div className="product-rating">
                  {renderStars(product.rating?.rate)}{/* Render the star rating */}
                  <span className="rating-number">({product.rating?.rate})</span>
                  <div>
                    <span className='vertical-line2'></span>
                  </div>                  
                  <span className='review-count'>
                    {product.rating.count}{' Customer Review '}
                  </span>
              </div>              
              <p className='productPage-description'>{product.description}</p>
              <div className="counter-cart">
                <button className='counter'>
                  <button className='count' onClick={() => setProductQuantity((q) => Math.max(1, q - 1))}><img className='minus' src="/Imgs/icon-minus.svg" /></button>
                  <span>{productQuantity}</span>
                  <button className='count' onClick={() => setProductQuantity((q) => q + 1)}><img className='plus' src="/Imgs/icon-plus.svg" /></button>
                </button>
                <button className='productPage-addToCart-Btn' onClick={handleAddToCart}>Add to Cart</button>
              </div>
              <div className='line'></div> 
              <div>
                <p className='info-under-line'>
                  <span>{"Category"}</span>
                  <span>{":"}</span>
                  <span>{product.category}</span>
                </p>
                <p className='info-under-line'>
                  <span className='share'>{"Share"}</span>
                  <span>{":"}</span>
                  <span className='social-links'>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target='_blank'><img className='facebook' src="/Imgs/akar-icons_facebook-fill.png" /></a>
                    <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`} target='_blank'><img className='linkedin' src="/Imgs/akar-icons_linkedin-box-fill.png" /></a>
                    <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target='_blank'><img className='twitter' src="/Imgs/ant-design_twitter-circle-filled.png" /></a>
                  </span>
                </p>
              </div>  
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
      <div className='footer-line'></div>
      <div className='footer-description'>
        <h1 className='footer-desc-title'>Description</h1>
        <p className='footer-text'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>        
        <p className='footer-text'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>        
      </div>    
    </>      
  )
}

export default Product
