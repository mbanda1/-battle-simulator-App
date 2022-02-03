import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getBattles } from '../redux/battles/battle.action';
import { addNewArmy } from '../redux/armies/army.action';
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
const Army = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [alert, setalert] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.battleId === 'name' || data.attackStrategyId === 'name') {
      setalert('Select Both Battle and strategy');
    } else {
      dispatch(addNewArmy(data));
    }
  };
  useEffect(() => {
    dispatch(getBattles());
  }, [dispatch]);

  const battles = (props.battles || {}).data || [];
  const attack = [{ name: 'random' }, { name: 'weakest' }, { name: 'strongest' }];

  const loading = props.army.isAddBattleLoading;
  const error = props.army.error;

  return (
    <div className={classes.root}>
      <Typography variant='h3' color='secondary'>
        <h6 color='red'>{alert}</h6>
        <h6>{error}</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <li>
              {' '}
              <label>Name</label>{' '}
              <input {...register('name', { required: true, maxLength: 30 })} />{' '}
            </li>
            <li>
              {' '}
              <label>Units</label>{' '}
              <input
                type='units'
                {...register('units', { required: true, min: 80, max: 100 })}
              />{' '}
            </li>
            <li>
              {' '}
              <Select
                label='Battles'
                data={battles}
                {...register('battleId', { required: true })}
              />{' '}
            </li>
            <li>
              {' '}
              <Select
                label='Attack Strategy'
                data={attack}
                {...register('attackStrategyId', { required: true })}
              />{' '}
            </li>
          </ul>
          <input type='submit' disabled={loading} />
        </form>
      </Typography>
    </div>
  );
};

const Select = React.forwardRef(({ onChange, onBlur, name, label, data = [] }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      {data.map((d) => (
        <option value={d._id} key={d._id}>
          {d.name}
        </option>
      ))}
    </select>
  </>
));

const mapStateToProps = (state = {}) => {
  return {
    battles: state.reducer.battles,
    army: state.reducer.army,
  };
};

export default connect(mapStateToProps)(Army);
