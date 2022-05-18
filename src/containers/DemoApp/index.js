import React, { lazy, Suspense, useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import clsx from "clsx"

import Sidebar from "./Sidebar"
import Header from "./Header"
import AppBody from "./AppBody"
import LoadingSpinner, { Loading } from './LoadingSpinner'
import NoMatchRoute from "./NoMatchRoute";

import "./index.css"

import { store } from '~/store/configureStore'
// import injectReducers from './reducers'

// const Bookshelf = lazy(() => import("~/containers/Bookshelf"));

const Bookshelf = lazy(() => {
  return Promise.all([
    import("~/containers/Bookshelf"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Message = lazy(() => {
  return Promise.all([
    import("./Message"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports)
    .catch(error => error.message);
});

const RemoteCRUD = lazy(() => {
  return Promise.all([
    import("./RemoteCRUD/reducers").then(module => {
      store.injectReducer('DemoApp_RemoteCRUD', module.reducer);
      return import('./RemoteCRUD');
    }),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports)
    .catch(error => error.message);
});

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

const DemoApp = () => {

  const DemoAppRedux = useSelector((state) => state.DemoApp);
  const [sidebarStatus, setSidebarStatus] = useState('f');

  return (
    <Routes>
      <Route path="/" element={
        <div className={clsx("demoApp", DemoAppRedux?.SidebarStatus)}>
          <LoadingSpinner />
          <Sidebar />
          <div className="apps">
            <Header />
            <AppBody>
              <Outlet />
            </AppBody>
          </div>
        </div>
      }>
        <Route index element={<></>} />
        <Route path="Bookshelf" element={
          <Suspense fallback={<Loading />}>
            <Bookshelf />
          </Suspense>
        } />
        <Route path="Message" element={
          <Suspense fallback={<Loading />}>
            <ErrorBoundary>
              <Message />
            </ErrorBoundary>
          </Suspense>
        } />
        <Route path="RemoteCRUD/*" element={
          <Suspense fallback={<Loading />}>
            <ErrorBoundary>
              <RemoteCRUD />
            </ErrorBoundary>
          </Suspense>
        } />
        <Route path="*" element={<NoMatchRoute />} />
      </Route>
      <Route path="*" element={<NoMatchRoute />} />
    </Routes>
  )
}

export default DemoApp