//import { combineReducers } from 'redux';

import { store } from '~/store/configureStore';

const initState = {
  Name: 'Apps for Demo',
  SidebarStatus: localStorage.getItem('DemoApp__SidebarStatus') || 'f',
};

const reducer = (state = initState, action) => {

  console.log('~/container/DemoApp/reducers.js', state, action);

  if (action.type === 'setSidebarStatus') {
    localStorage.setItem('DemoApp__SidebarStatus', action.payload);
    return {
      ...state,
      SidebarStatus: action.payload,
    };
  }

  else if (action.type === 'Type2') {
    return {
      ...state,
    };
  }

  return state;
};

const func = (STORE) => {

  STORE = STORE || store;

  STORE.injectReducer('DemoApp', reducer);
}

export { reducer };
export default func;
