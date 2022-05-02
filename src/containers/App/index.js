import { useLocation, Route, Routes, Outlet, Link } from "react-router-dom";

import React, { useState, useEffect, Suspense, lazy } from "react";

import NoMatchRoute from "~/containers/Layout/NoMatchRoute";
import MainPage from "~/containers/MainPage";
// import { ErrorBoundary } from "~/utils/helper";

import './app.css';

import { store } from '~/store/configureStore'

const AdminApp = lazy(() => import("~/containers/AdminApp"));
const DemoApp = lazy(() =>
  import("~/containers/DemoApp/reducers").then(module => {
    console.log("~/containers/DemoApp/reducers then", module.reducer);
    store.injectReducer('DemoApp', module.reducer);
    return import('~/containers/DemoApp');
  })
);

// import { Menu } from './menu';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      that: this
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <pre>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const App = (props) => {

  // const menu = Menu;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<MainPage />} />
          <Route path="AdminApp/*" element={
            <Suspense fallback={<>...</>}>
              <AdminApp />
            </Suspense> }>
          </Route>
          <Route path="DemoApp/*" element={
            <Suspense fallback={<>...</>}>
              <ErrorBoundary>
                <DemoApp />
              </ErrorBoundary>
            </Suspense> }>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )

}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";

// import MainPage from '~/containers/MainPage';

// import "./app.css";

// const NoMatchRoute = () => {

//   return (
//     <div>
//       <h1>404 not find</h1>
//       <h2>It looks like you're lost...</h2>
//     </div>
//   );
// }

// const App = () => {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<MainPage />}>
//           <Route path="*" element={<NoMatchRoute />} />
//         </Route>
//       </Routes>
//     </>
//   )

//   // return <MainPage />;

//   /*
//     return (
//       <>
//         {
//           <Routes>
//             <Route path="/" element={area ? <Private /> : <Public />}>
//               {
//                 menu && menu.map(R => {
//                   return importRoute(R);
//                 })
//               }
//               <Route
//                 path="*"
//                 element={<NoMatchRoute />}
//               />
  
//             </Route>
//           </Routes>
//         }
//       </>
//     );
//   */
// }

// export default App;
