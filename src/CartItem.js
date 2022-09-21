import React from "react";
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Qty:1</div>
                    <div style={{color:'blue'}}>Rs 999</div>
                    <div className="cart-item-actions"></div>

                   
                </div>
            </div>
        )
    }
}
const styles = {
    image :{
        height: 120,
        width: 120,
        border:2 ,
       borderRadius:7,
       marginRight: 30
    },


}
export default CartItem;
