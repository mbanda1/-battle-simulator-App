import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BattleTable from './BattleTableView';
import { Button } from '@material-ui/core';
import AddNewPage from './addBattle';
import { connect } from 'react-redux';
import { addNewBattle, getBattles } from '../redux/battles/battle.action';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  outlinedPrimary: {
    color: 'white',
    backgroundColor: theme.palette.submitButton.backgroundColor,
    '&:hover': { backgroundColor: '#1b5e20' },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  media: {
    height: 180,
    marginTop: 5,
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  imageBtn: {
    marginTop: 5,
  },
}));
const Battle = (props) => {
  const classes = useStyles();
  const [addnew, setaddnew] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBattles());
  }, [dispatch]);

  const submit = (data) => {
    dispatch(addNewBattle(data));
  };

  const loading = props.battles.isAddBattleLoading;
  const error = props.battles.error;

  return (
    <div className={classes.root}>
      <Button
        variant='contained'
        color='primary'
        disableElevation
        onClick={() => {
          setaddnew(!addnew);
        }}
      >
        {addnew ? 'Go Back' : 'Add new Battle'}
      </Button>

      <Typography variant='h3' color='secondary'>
        {addnew ? (
          <AddNewPage submit={submit} loading={loading} error={error} />
        ) : (
          <BattleTable data={(props.battles || {}).data || []} />
        )}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state = {}) => {
  return {
    battles: state.reducer.battles,
  };
};

export default connect(mapStateToProps)(Battle);
