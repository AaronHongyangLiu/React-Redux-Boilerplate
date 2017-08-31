export default function (state = {}, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return Object.assign({},state, {name:action.payload});
            break;

        case 'CHANGE_START_TIME':
            return Object.assign({},state, {start_time:parseFloat(action.payload)});
            break;

        case 'CHANGE_END_TIME':
            return Object.assign({},state, {end_time: parseFloat(action.payload)});
            break;

        case 'ADD_DAY':
            var newDays = state.days;
            if(!newDays){newDays = [];}
            newDays.push(parseInt(action.payload));
            return Object.assign({},state, {days: newDays});
            break;

        case 'REMOVE_DAY':
            var newDays = state.days;
            newDays = newDays.filter((x)=>x!==parseInt(action.payload));
            return Object.assign({},state, {days: newDays});
            break;
        case 'CHANGE_CLASS_ID':
            return Object.assign({},state, {class_id:parseInt(action.payload)});
            break;

        case 'CLEAR':
            return {};
            break;
    }
    return state;
}