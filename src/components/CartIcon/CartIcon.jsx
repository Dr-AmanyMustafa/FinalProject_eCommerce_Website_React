import { Link } from "react-router-dom";
import { useStore } from "../../store";
import "./CartIcon.css";

const CartIcon = () => {
    const { cartItems = [], removeFromCart, toggleCartDropdown, isCartOpen } = useStore((state) => ({
        cartItems: state.cartItems || [], 
        removeFromCart: state.removeFromCart,
        toggleCartDropdown: state.toggleCartDropdown, 
        isCartOpen: state.isCartOpen, 
    }));
  
    const handleRemove = (id) => {
    removeFromCart(id); 
  };

  return (
    <>
    {isCartOpen && <div className="overlay" onClick={toggleCartDropdown}></div>}
        <div className={`cart-items ${isCartOpen ? 'open' : ''}`}></div>
        
            <div className="cartIcon-innerContainer">
                <div className="cartIcon-innertitle">
                    <h3>Shopping Cart</h3>
                    <div className="cartIcon-bagImg-border">
                        <img className="cartIcon-bagImg" src="/Imgs/cartIcon.png" alt="cart icon" />
                    </div>
                </div>
                <div className="innerContainer-line"></div>
                {cartItems.length === 0 ? (
                <p className="empty-cartIcon">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cartIcon-productImg-container">
                                <img
                                    className="cartIcon-productImg"
                                    src={item.image}
                                    alt={item.title}
                                />
                                </div>
                                <div className="cart-item-info">
                                <h6 className="cartIcon-productTitle">{item.title}</h6>
                                <div className="cartIcon-productPriceGroup">
                                    <span className="cartIcon-productQuantity">
                                    {item.quantity}
                                    </span>
                                    <p className="cartIcon-productQuantity">{" x "}</p>
                                    <span className="cartIcon-productPrice">${item.price}</span>
                                </div>
                                </div>
                                <button
                                className="cartIcon-removeImg-border"
                                onClick={() => handleRemove(item.id)}
                                >
                                <img
                                    className="cartIcon-inner-removeImg"
                                    src="/Imgs/cartIcon-remove.png"
                                />
                                </button>
                            </div>
                            
                        ))}
                        </div>
                        <div className="cartIcon-totalPrice">
                            <span className="cartIcon-subtotal">Subtotal</span>            
                            <span className="cartIcon-subtotal-number">
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity,0)}
                            </span> 
                        </div> 
                    </>
                    )}         
                        <div className="innerContainer-line2"></div>
                        <button className="cartIcon-checkoutBtn">
                            <Link to="/cart" className="cartIcon-checkoutLink">
                            Cart
                            </Link>
                        </button>
                
                </div>
    </>
  );
};

export default CartIcon;
