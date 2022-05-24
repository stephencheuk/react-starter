//import { combineReducers } from 'redux';

import { store } from '~/store/configureStore';

const initState = {
  Name: 'Blog Demo',
};

const reducer = (state = initState, action) => {

  // if (action.type === 'setSidebarStatus') {
  //   return {
  //     ...state,
  //     SidebarStatus: action.payload,
  //   };
  // }

  // else if (action.type === 'Type2') {
  //   return {
  //     ...state,
  //   };
  // }

  return state;
};

const func = (STORE) => {

  STORE = STORE || store;

  STORE.injectReducer('DemoApp_RemoteCRUD', reducer);
}

export { reducer };
export default func;
