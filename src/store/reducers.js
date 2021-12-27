//import { combineReducers } from 'redux';

import { store } from './configureStore';

const initState = {
  Name : 'My todo app with Saga Redux',
  API : 'http://192.168.2.81:4001',
  width : window.innerWidth,
  height: window.innerHeight,
  Pref: {},
  loggedIn: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token'),
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  profileImg: localStorage.getItem('profileImg'),
  user: {
//    first_name: 'Shen',
//    last_name: 'Zhi',
//    email: 'demo@devias.io',
//    avatar: '/images/avatars/avatar_11.png',
//    bio: 'Brain Director',
    role: 'GUEST' // ['GUEST', 'USER', 'ADMIN']
  }
};

const Reducer = (state = initState, action) => {

  console.log('src/store/reducers.js', action);

  if (action.type === 'LOGIN') {
    localStorage.setItem('token', action.payload.Token);
    localStorage.setItem('name', action.payload.Name);
    localStorage.setItem('email', action.payload.Email);
    localStorage.setItem('profileImg', action.payload.ProfileImg);

    return {
      ...state,
       loggedIn: action.payload.Token ? true : false,
       token: action.payload.Token,
       user: action.payload.Name,
       email: action.payload.Email,
       profileImg: action.payload.ProfileImg,
    };
  }
  
  else if (action.type === 'LOGOUT') {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('profileImg');
    return {
      ...state,
       loggedIn: false,
       token: null,
       user: null,
       email: null,
       profileImg: null,
    };
  }

  return state;
};

const func = (STORE) => {

  STORE = STORE || store;

  STORE.injectReducer('App', Reducer);
}

export default func;
