import React,{Component}from'react';
class counter extends Component{
    constructor(props){
        super(props)
        this.sate={
            count:0,
        };
    }
handleIncrement=()=>{
    this.setstate(oprevstate) => ({
             count:prevstate.count+1
        });
    };
    render(){
        return(
            <div style={{ textAlign:'center',marginTop:'50px'}}>
                <h2>React Class Component Counter</h2>
                <p>Count:{this.state.counT}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}
export default counter;