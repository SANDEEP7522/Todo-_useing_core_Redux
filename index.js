import { addTodoActionCreater, removeTodoActionCreater } from "./actionCreater.js";
import store from "./Store.js";

console.log(store.getState());
store.dispatch(addTodoActionCreater('buy milk'));
 console.log(store.getState().todoState);
store.dispatch(addTodoActionCreater('buy egg'));
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreater('buy phone'));
console.log(store.getState().todoState);
 store.dispatch(addTodoActionCreater('buy picture'));
console.log(store.getState().todoState);

