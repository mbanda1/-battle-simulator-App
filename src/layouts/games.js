import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableView from './GamesTableView';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/game/game.actions';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';
 const ENDPOINT = process.env.REACT_APP_API_URL;

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
const Dashboard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [socket, setSocket] = useState(null);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    dispatch(getGames());

    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    newSocket.on("message", data => {
      console.log(data)
        setResponse([...response, data]);
    });
    
    return () => newSocket.close();
  }, [dispatch]);


//  console.log(response)
  return (
    <div className={classes.root}>
      <h4>
        QULIFIED BATTLES - <i> with atleat 3 armies</i>
      </h4>
      <Typography variant='h3' color='secondary'>
        <TableView data={props.games.data || {}} />
      </Typography>
      <br />
      <br />
      <Button variant='contained' color='secondary' disableElevation 
      onClick={() => socket.emit('message', 'game')}
      >
        Fire Up the GAME !
      </Button>

    </div>
  );
};

const mapStateToProps = (state = {}) => {
  return {
    games: state.reducer.games,
  };
};

export default connect(mapStateToProps)(Dashboard);
