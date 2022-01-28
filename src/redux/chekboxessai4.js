import { createStore, combineReducers } from "redux";
//declaration reducers
const checkReducer = (state = false, action) => {
  console.log("checkbox a1 is selected", action, state);
  if (action.type == "is selected a1") {
    console.log("checkbox a11 is selected");
    
    return state= action.step;
    
  } 
  return state;
};

const userReducer = (state = "", action) => {
  console.log("Reducer 1", action, state);
  if (action.type == "set_username") {
    return action.username;
    // console.log(state);
  }
  return state;
};
let reducers = combineReducers({
  //utilisateur: userReducer,
  checka1: checkReducer,
}); //cree stor
let store = createStore(reducers);
export { store };
