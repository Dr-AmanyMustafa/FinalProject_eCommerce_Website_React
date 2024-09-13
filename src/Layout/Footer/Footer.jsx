
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <footer className='footer-container'>      
      <div className='white-part-footer'>
        <div className='grid-footer'>
          <div>
            <p className='title'>Furniro.</p>
            <p className='address grey-color'>400 University Drive Suite 200 Coral Gables,</p>
            <p className='grey-color'>FL 33134 USA</p>
          </div>          
          <div className='links'> 
            <p className='grey-color'>Links</p>
            <p><Link to="/" className='links-decorations'>Home</Link></p>                       
            <p><Link to="/shop"  className='links-decorations'>Shop</Link></p>
            <p><Link to="#" className='links-decorations'>About</Link></p>
            <p><Link to="/contact" className='links-decorations'>Contact</Link></p>
          </div>
          <div className='other-links'>
            <p className='grey-color'>Help</p>
            <p><Link to="#" className='links-decorations'>Payment Options</Link></p>
            <p><Link to="#" className='links-decorations'>Returns</Link></p>
            <p><Link to="#" className='links-decorations'>Privacy Policies</Link></p>
          </div>
          <div className='Newsletter'>
            <p className='grey-color'>Newsletter</p>
            <div className='Subscribe'>
              <input className='mail' type="text" placeholder='Enter Your Email Address'/>
              <a className='uppercase'>Subscribe</a>
            </div>
          </div>
        </div>
        <div className='footer-line2'></div>
        <div className='copyright'>
          <p>2023 furniro. All rights reserved</p>
        </div>      
      </div>
    </footer>
  )
}

export default Footer
