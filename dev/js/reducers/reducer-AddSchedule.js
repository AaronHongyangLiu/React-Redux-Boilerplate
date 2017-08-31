/**
 *  these are the reducers for the schedule page
 * */

export default function (state = {clicked:false}, action) {
    switch (action.type) {
        case 'AddScheduleButton_Clicked':
            return {clicked:true};
            break;
        case 'AddScheduleButton_Unclicked':
            return {clicked:false};
            break
    }
    return state;
}