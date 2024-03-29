import "./cart-item.styles.scss";
import Image from "next/image";

const  CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className="cart-item-container">
            <div className="img-container">
                <Image fill sizes="100vw" src={imageUrl} alt={`${name}`}/>
            </div>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;