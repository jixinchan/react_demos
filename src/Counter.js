import React, { Component } from 'react';
import store from './stroe/index';
// store 是连接action 和 reducer的一个对象
// action 是一个对象，描述state的变化
// reducer 定义了如和响应action描述的state的变化。并发送新的state
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action = {type:'ADD'};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action = {type:'DEC'};
        store.dispatch(action);
    }
    handleOdd=()=>{
        let action = {type:'ADD_ODD'};
        store.dispatch(action);
    } 
    handleAsync=()=>{
        let action = {type:'ADD_ASYNC'};
        setTimeout(()=>{
            store.dispatch(action);
        },1000);   
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br/>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
