
    import { combineReducers } from 'redux';
    import battles from './battles/battle.reducer';
    import army from './armies/army.reducer';
    import games from './game/game.reducer';
    
    const rootReducer = combineReducers({
         battles,
         army,
         games,
    });

    export default rootReducer;