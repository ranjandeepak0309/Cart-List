import React from "react";
 
const  Navbar = (props) => {
    
        return (
            <div style ={styles.nav}>
                <div style ={styles.cartIconContainer} >
                    <img style ={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/649/649931.png" alt="cartIcon"/>
                    <span style ={styles.CartCount}>{props.count}</span>
                </div>
                
            </div>
        );
    }

const styles ={
    cartIcon:{
        height:32,
        // marginRight :20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        
        justifyContent:'flex-end',
        alignItem:'center',
      
        paddingRight:5

    },cartIconContainer:{
        height:'50%',
        width:40,
        display:'flex',
        // borderRadius:7,
        // background:'white',
        marginTop:18,
        position:'relative',

    },
    CartCount:{
        background:'yellow',
        borderRadius:'50%',
        // padding :'4px,4px',
        position:'absolute',
        right:0,
        top:-5,
        // left:-1
    }


};
export default Navbar;