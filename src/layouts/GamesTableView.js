import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function GameTable({ data }) {
  const [open, setOpen] = React.useState(false);
  const [armies, setarmies] = React.useState([]);

  const handleClickOpen = (value) => {
    setarmies(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setarmies([]);
  };

  const renderBattles = () => {
    const indents = [];

    for (const [key, value] of Object.entries(data)) {
      indents.push(
        <Button
          color='primary'
          variant='contained'
          key={key}
          onClick={() => handleClickOpen(value)}
        >
          {' '}
          {key}{' '}
        </Button>
      );
    }

    return indents;
  };

  return (
    <>
      {renderBattles()}

      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>My Super Armies</DialogTitle>
        <DialogContent>
          {armies.map((d) => {
            return (
              <li key={d._id}>
                {d.army} --- Attack strategy : <b>{d.attack}</b>{' '}
              </li>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
