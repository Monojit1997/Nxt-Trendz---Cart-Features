// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartValue = cartList.map(eachItem => eachItem.price)
      const total = cartValue.reduce((a, b) => a + b)
      return (
        <div className="cart-summary">
          <h1>Order Total: {total}/- </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
