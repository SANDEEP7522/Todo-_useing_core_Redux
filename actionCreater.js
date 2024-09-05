import { ADD_TODO, ADD_USER, REMOVE_TODO, TOGGLE_TODO } from "./Constant.js";

// function that return an action object are called action creater.its return action bbj.
export function addTodoActionCreater(todo){
    return{
        type: ADD_TODO,
        payload: todo
    }
}
export function removeTodoActionCreater(todoId){
    return{
        type: REMOVE_TODO,
        payload: todoId
    }
}
export function toggleTodoActionCreater(todoId){
    
    return{
        type: TOGGLE_TODO,
        payload: todoId
    }
}

export function addUserActionCreation(user){
    return{
        type: ADD_USER,
        payload: user
    }    
}
