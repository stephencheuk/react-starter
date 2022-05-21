const LoadingSpinner = () => {
  
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

export default LoadingSpinner