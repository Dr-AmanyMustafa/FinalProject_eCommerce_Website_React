import './Cart.css'
import { useStore } from '../../store'
import { Link } from 'react-router-dom'

function Cart() {
  const { cartItems = [], removeFromCart } = useStore((state) => ({
    cartItems: state.cartItems || [],
    removeFromCart: state.removeFromCart,
  }));

  const subtotal = cartItems.reduce((total, product) => total + (Number(product.price) || 0) * product.quantity, 0);
  const total = subtotal;

  return (
    <>
      <img className='background_picture' src="/Imgs/background_picture2.png" alt="background_picture" />
      <div className='page-title'>
        <img className='page-logo' src="/Imgs/furniro-logo.webp" alt="logo-img" />
        <h1 className='page-name'>Cart</h1>
        <p>
          <span className='pageName-nav'>Home</span>  
          <span className='mark'>{">"}</span>
          <span className='pageName2-nav'>Cart</span> 
        </p>      
      </div>
      <div className='cart-page'>         
        <div className='cartPage-details-header'>          
          {cartItems.length === 0 ? (
          <>
            <h1 className='empty-cart'>Your cart is empty</h1>
            <Link to="/shop" className='continue-shopping'>Continue Shopping</Link>
          </>
          ) : (
            <>
              <div className='text'>
                <span className='headertitle-product'>Product</span>
                <span className='headertitle-price'>Price</span>
                <span className='headertitle-quantity'>Quantity</span>
                <span className='headertitle-subtotal'>Subtotal</span>
              </div>
              <div className='product'>
                {cartItems.map((product) => (
                  <>
                    <div className='cartPage-productImg-container'>
                      <img className='cartPage-productImg' src={product.image} alt={product.title} />
                    </div>
                    <span className='cartPage-product-name'><span className='text-disabled-product'>Product</span> {product.title}</span>
                    <span className='cartPage-product-price'><span className='text-disabled-price'>Price</span> ${Number(product.price).toFixed(2) || '0.00'}</span>
                    <span className='cartPage-product-quantity'><span className='text-disabled-quantity'>Quantity</span>{product.quantity}</span>
                    <span className='cartPage-product-subtotal'><span className='text-disabled-subtotal'>Subtotal</span>${((Number(product.price || 0)) * product.quantity).toFixed(2)}</span>
                    <button className='cartPage-product-remove' onClick={() => removeFromCart(product.id)}><img src="/Imgs/ant-design_delete-filled.png"/></button>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
        <div className='cart-totals'>
          <h1>Cart Totals</h1>
          <div className='subtotal'>
            <span>Subtotal</span>
            <span className='subtotal-number'>${subtotal.toFixed(2)}</span>
          </div>
          <div className='total'>
            <span>Total</span>
            <span className='total-number'>${total.toFixed(2)}</span>
          </div>
          {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
          ) : (
            <button href="#" className='checkout-Btn'>
              {"Check Out"}
            </button>
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

export default Cart
