import React from "react";

class CartItem extends React.Component{
    
    
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('test',this.state);

        // setState form 1
        // this.setState({
        //     qty : this.state.qty+1
        // })

        // setState form 2
        this.setState((prevState) =>{
            return{
                qty : prevState.qty+1
            }
        })
    }
    decreseQuantity = () =>{
        const{qty} =this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty : prevState.qty-1
            }
        })
    
    }
    render(){
        console.log("this.props",this.props);
        const {price,title,qty} = this.props.eachProduct;
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
                         onClick={this.decreseQuantity}
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
    }


}
export default CartItem;
