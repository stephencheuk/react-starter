import { Menu } from "../menu";

import React, { lazy, Suspense } from "react";
import { Buffer } from 'buffer';
import { Route, Navigate } from "react-router-dom";

import AuthService from "../services/auth.service";

const isPrivateArea = () => {

  let location = window.location;

  let matched = Menu.filter(o => o.link !== '/').filter(o => location.pathname.indexOf(o.link) === 0)[0];

  matched ||= Menu.filter(o => o.link === '/').filter(o => location.pathname.indexOf(o.link) === 0)[0];

  return matched.protect ? true : false;

}

//const NoComponents = () => <div>Components Not Defined Yet</div>

const isAuth = () => {
  const currentUser = AuthService.getCurrentUser();
  const exp = JSON.parse(Buffer.from(currentUser.accessToken.split('.')[1], 'base64').toString('binary')).exp;
  if (exp <= parseInt((new Date()).getTime() / 1000)) {
    return false;
  }
  return currentUser ? true : false;
}

function PrivateRoute({ children }) {
  //const auth = useAuth();
  //return auth.user ? children : <Navigate to="/login" />;
  return isAuth() ? children : <Navigate to="/Login" />;
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

  //componentWillMount(p1, p2, p3) { console.log('componentWillMount', p1, p2, p3); }
  //componentDidMount(p1, p2, p3) { console.log('componentDidMount', p1, p2, p3); }
  //componentWillReceiveProps(p1, p2, p3) { console.log('componentWillReceiveProps', p1, p2, p3); }
  //componentWillUpdate(p1, p2, p3) {
  //  if(this.state.error){
  //    this.setState({
  //      error: null,
  //      errorInfo: null
  //    });
  //  }
  //}
  //componentDidUpdate(p1, p2, p3) { console.log('componentDidUpdate', p1, p2, p3); }
  //componentWillUnmount(p1, p2, p3) { console.log('componentWillUnmount', p1, p2, p3); }

  //static getDerivedStateFromProps(props, state){
  //  //console.log('getDerivedStateFromProps', props, state, state.that.setState);
  //  if(state.error){
  //    state.that.setState({
  //      error: null,
  //      errorInfo: null
  //    });
  //  }
  //}

  //static getSnapshotBeforeUpdate(prevProps, prevState){
  //  console.log('getDerivedStateFromProps', prevProps, prevState);
  //}

  render() {
    if (this.state.errorInfo) {
      // Error path
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

const importRoute = route => {
  const Component = lazy(() => {
    return import(`../${route.path}`)
    //      .catch((e) => {
    //        return import(`../components/NoSuchComponents`);
    //      let s = import(`../components/NoSuchComponents`)
    //                .then(m=>{console.log(m.default.props={'err':e}); return m});
    //                .then((moment)=>{
    //                  //console.log(moment({'a':'b'}, {'c':'d'}));
    //                  let e = moment.default;
    //                  let f = new e;
    //                  console.log(f.go(123));
    //                  return moment
    //                });
    //      return s;
    //    });
  });

  let path = route.link === '/' ? '/' : `${route.link}/*`;

  //console.log(`build route for ${path}`);

  return <Route
    key={route.link}
    path={path}
    element={
      route.protect ?
        (
          <PrivateRoute>
            <Suspense fallback={<> Loading </>}>
              <ErrorBoundary key={route.link}>
                <Component />
              </ErrorBoundary>
            </Suspense>
          </PrivateRoute>
        )
        :
        (
          <Suspense fallback={<> Loading </>}>
            <Component />
          </Suspense>
        )
    }
  />
}

Object.defineProperty(Number.prototype, 'fileSize', {
  value: function (a, b, c, d) {
    return (a = a ? [1e3, 'k', 'B'] : [1024, 'K', 'iB'], b = Math, c = b.log,
      d = c(this) / c(a[0]) | 0, this / b.pow(a[0], d)).toFixed(2)
      + ' ' + (d ? (a[1] + 'MGTPEZY')[--d] + a[2] : 'Bytes');
  }, writable: false, enumerable: false
});

export { isPrivateArea, importRoute, ErrorBoundary };
