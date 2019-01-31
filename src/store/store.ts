import {createStore, Reducer} from "redux";

const rootReducer:Reducer=(state,action)=>{
	return {...state}
}
const store=createStore(rootReducer)
export {store}