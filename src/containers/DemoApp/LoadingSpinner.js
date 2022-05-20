import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Loading = () => {
  return (
    <div>Loading ...</div>
  )
}

const LoadingSpinner = () => {

  const DemoAppRedux = useSelector((state) => state.DemoApp);

  useEffect(() => {
    console.log("LoadingSpinner Loaded")
    return function cleanup() {
      console.log("LoadingSpinner unloaded")
    };
  });
  
  return (
    <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff80",
        backdropFilter: "blur(3px)",
      }}>
      <div>Loading Spinner</div>
    </div>
  )
}

export { Loading }

export default LoadingSpinner