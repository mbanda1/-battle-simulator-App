import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { deepOrange, green } from '@material-ui/core/colors';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(5, 6),
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  square2: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}));

export default function AutoGridNoWrap() {
  const navigate = useNavigate();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap='nowrap' spacing={2}>
          <Grid item>
            <Avatar variant='square' className={classes.square}>
              B
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => {
                  navigate('/dash/battle');
                }}
              >
                <h1>Manage Battles</h1>
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap='nowrap' spacing={2}>
          <Grid item>
            <Avatar>B</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => {
                  navigate('/dash/army');
                }}
              >
                <h1> Manage Armies </h1>
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap='nowrap' spacing={2}>
          <Grid item>
            <Avatar variant='circle' className={classes.square2}>
              GM
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => {
                  navigate('/dash/game');
                }}
              >
                <h1> Launch a Game </h1>
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
