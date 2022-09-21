import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
           price:999,
           title:'SAMSUNG Phone',
           qty:1,
           img:''
         
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    
    increaseQuantity = () => {
        console.log('test',this.state);
    }
    render(){
        const {price,title,qty} =this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div style={{color:'blue'}}>Rs{price}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt ="increase" 
                        className ="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/4265/4265533.png"
                        onClick={this.increaseQuantity}
                        />

                        <img
                         alt ="decrease"
                         className ="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />

                        <img
                         alt ="delete"
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                        />
                    </div>

                   
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
       marginRight: 30,
       background:'cyan'
    },


}
export default CartItem;
