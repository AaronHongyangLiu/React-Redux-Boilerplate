
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const clickAddSchedule = ()=>{
    return{
        type:"AddScheduleButton_Clicked"
    }
};

export const unclickAddSchedule = () =>{
    return{
        type:"AddScheduleButton_Unclicked"
    }
};

export const postEvent = (event)=>{
    return (dispatch) => {
        var axios = require('axios');
        var http = axios.create({baseURL:'http://127.0.0.1:5000'});
        console.log("look at me !!!!!!",event)
        http.post('/api/schedule/event',event)
            .then((res)=>{
                dispatch(getAllEvents());
                dispatch(clearTempSchedule());
            })
            .catch((err)=>{
                console.log("error posting an event", err);
                dispatch(clearTempSchedule());
            })
    }
};

export const changeScheduleName = (name) =>{
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
};

export const changeScheduleStartTime = (start_time) =>{
    return {
        type: 'CHANGE_START_TIME',
        payload: start_time
    }
};

export const changeScheduleEndTime = (end_time) =>{
    return {
        type: 'CHANGE_END_TIME',
        payload: end_time
    }
};

export const ChangeScheduleDay = (day,checked) =>{
    var result = checked?
        {type: 'ADD_DAY', payload: day} :
        {type: 'REMOVE_DAY', payload: day};
    return result
};

export const changeScheduleClassId = (class_id) =>{
    return {
        type: 'CHANGE_CLASS_ID',
        payload: class_id
    }
};

export const clearTempSchedule = ()=> {
    return {
        type: 'CLEAR'
    }
}

export const getAllEvents = ()=>{
    return (dispatch) => {
        var axios = require('axios');
        var http = axios.create({baseURL:'http://127.0.0.1:5000'});
        http.get('/api/schedule/events')
            .then((response)=>{
                dispatch(finishGetAllEvent(response.data))
            })
            .catch((err)=>{
                console.log("error getting all schedule events",err);
                dispatch(finishGetAllEvent([]))
            });
    }

};

export const finishGetAllEvent = (data)=>{
    return {
        type: 'GET_ALL_EVENTS',
        payload: data
    }
}