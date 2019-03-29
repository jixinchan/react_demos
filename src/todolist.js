import React, { Component } from 'react';
import store from './stroe/index';

class TodoList extends Component {
    constructor(){
        super();
        this.state={list:store.getState().todolist.list};
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todolist.list
            })
        })
    }
    handleAdd=(e)=>{                                               
        if(e.keyCode===13){
            store.dispatch({type:'add_item',value:e.target.value});
            e.target.value='';  
        } 
    }
    handleDec=(i)=>{
        store.dispatch({type:'dec_item',value:i});
    }
    render() {
        return (
            <div>
                <input style={{width:'260px',height:'30px',display:'inline'}} type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                        <li style={{width:'200px'}}>
                            {item}
                            <span onClick={()=>{this.handleDec(index)}} style={{color:'red',float:'right',cursor:'pointer'}}>×</span>
                        </li>))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
