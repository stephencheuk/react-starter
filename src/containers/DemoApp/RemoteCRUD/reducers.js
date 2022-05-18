//import { combineReducers } from 'redux';

import { store } from '~/store/configureStore';

const initState = {
  Name: 'Remote CRUD App Demo',
};

const reducer = (state = initState, action) => {

  console.log('~/container/DemoApp/RemoteCRUD/reducers.js', state, action);

  if (action.type === 'setSidebarStatus') {
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

  STORE.injectReducer('DemoApp/RemoteCRUD', reducer);
}

export { reducer };
export default func;
