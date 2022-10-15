import React from 'react';
class LifeCycle extends React.Component{
    constructor(){
        super();
        console.log('CONSTRUCTOR');
        this.state = {count:0} 
    }
    componentDidMount(){
        console.log('Component_DID_Mount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component_DID_Update')
        console.log('prevProps', prevProps);
       
        console.log('prevState',prevState);
        console.log('state',this.state);
        if(prevState.count === 0 && this.state.count === 1){
            this.setState({count:100});
        }

    }
    handleClick = ()=>{
        this.setState((prevState) =>{
            return{
                count:prevState.count + 1
            }
        })
    }
    render(){
        console.log("Render");
        return(
            <div className ="LifeCycle">
                {this.state.count}
                <button onClick = {this.handleClick}> INC count</button>
            </div>
        )

    }
}
export default LifeCycle;