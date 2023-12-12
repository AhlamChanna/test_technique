import { Component } from "react";



class Count extends Component{
    constructor(props){
        super(props);
        this.state = {number : 0};
    }
    decrement = () =>{
        this.setState({number: this.state.number-1})
    }
    increment = () =>{
        this.setState({number: this.state.number+1})
    }
    render(){
        const container = {
            textAlign: 'center',
            margin: '20px',
          };
        const number = {
            fontSize: '24px',
            fontWeight: 'bold',
            color: this.state.number > 0 ? 'blue' : this.state.number < 0 ? 'red' : 'black'
        
          };
        
        const Button = {
            fontSize: '18px',
            margin: '0 10px',
            padding: '5px 10px',
            cursor: 'pointer',
            color: 'white',
            border: 'none',
            borderRadius: '10%',
            width: '60px',
          };

          const decButton = {
            ...Button,
            backgroundColor: 'red',  
          };
        const incButton = {
            ...Button,
            backgroundColor: 'blue',
            
          };
        
        return(
            <div style={container}>
                <p style={number}>{this.state.number}</p>
                <button style={decButton} onClick={this.decrement}>-</button>
                <button style={incButton} onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Count;