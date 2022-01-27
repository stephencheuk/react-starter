import { Dialog, DialogTitle } from '@material-ui/core';

const MyDialog = props => {
  const { 
    isOpen = false, 
    onClose = () => {}, 
    title = 'My Dialog', 
    children, 
    ...rest 
  } = props;

  console.log(rest);

  const handleClose = event => {
    onClose(event);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

export default MyDialog;
