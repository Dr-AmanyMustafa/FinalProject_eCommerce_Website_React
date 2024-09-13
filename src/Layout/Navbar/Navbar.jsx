
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import CartIcon from "../../components/CartIcon/CartIcon"

function Navbar() {
  const { cartItems = [], toggleCartDropdown, isCartOpen } = useStore((state)=> ({
    cartItems: state.cartItems || [],
    isCartOpen: state.isCartOpen,
    toggleCartDropdown: state.toggleCartDropdown,
  })
);

  
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
      <img className='logo-img' src="/Imgs/furniro-logo.webp" alt="logo-picture" />
      <span className='logo-name'>Furniro</span>
      </div>
      <div className='middle-titles'>
      <Link to="/" className='links-decorations'>Home</Link>
      <Link to="/shop" className='links-decorations'>Shop</Link>
      </div>
      <Link to="/contact" className='links-decorations'>Contact</Link>
      <div className="cart-icon" onClick={toggleCartDropdown}>
        <img src='/Imgs/icon-cart.svg' />
        {cartItems.length > 0 && <span className='cartIcon-productCount'>{cartItems.length}</span>}
        {isCartOpen && <CartIcon />}
      </div>         
    </nav>
    </>
  )
}

export default Navbar
