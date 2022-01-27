import './AppBody.css'

const AppBody = ({children, className, ...props}) => {

  return (
    <main className={className}>
      { children }
    </main>
  );
}

export default AppBody;
