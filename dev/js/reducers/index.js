import {combineReducers} from 'redux';
import PageReducer from './reducer-pages';
import AddScheduleButton from './reducer-AddSchedule'
import Events from './reducer-Events'
import Colors from './reducer-ClassColor'
import TempEvent from './reducer-TempEvent'
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    pages: PageReducer,
    addSchedule: AddScheduleButton,
    allEvents:Events,
    allColors:Colors,
    tempEvent:TempEvent
});

export default allReducers
