import { Dialog, DialogTitle } from '@material-ui/core';

const MyDialog = ({
  isOpen = false,
  onClose = () => { },
  title = 'My Dialog',
  children,
  ...props
}) => {

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
