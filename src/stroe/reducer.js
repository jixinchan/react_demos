import { combineReducers } from "redux";

//reducer 一个纯函数,返回一个new state
let counter= (previousState=0,action)=>{
    switch(action.type){
        case 'ADD':
            return previousState+1;
        case 'DEC':
            return previousState-1;
        case 'ADD_ODD':
            if(previousState%2!==0){
                return previousState+1;
            }return previousState;
        case 'ADD_ASYNC':
            return previousState+1;
        default:
            return previousState;
    }
}


let initValue={
    a:1,
    list:[1,2,3]
};
let todolist= (previousState=initValue,action)=>{
    let newState = JSON.parse(JSON.stringify(previousState));
    switch(action.type){
        case 'add_item':
            newState.list.push(action.value);
            return newState;
        case 'dec_item':
            newState.list.splice(action.value,1);
            return newState;
        default:
            return previousState;
    }
}

export default combineReducers({
    counter,
    todolist
})