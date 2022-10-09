import React from "react";

const CartItem = (props) => {

    const { price, title, qty, id } = props.item;
    const { item, onIncreaseQuantity, onDeleteProduct, onDecreaseQuantity } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={item.img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Qty:{qty}</div>
                <div style={{ color: 'blue' }}>Rs:{price}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/4265/4265533.png"
                        onClick={() => onIncreaseQuantity(item)}
                    />

                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => onDecreaseQuantity(item)}
                    />

                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                        onClick={() => onDeleteProduct(id)}
                    />
                </div>


            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 120,
        width: 120,
        border: 2,
        borderRadius: 7,
        marginRight: 30,
        background: 'cyan'
    }


}
export default CartItem;
