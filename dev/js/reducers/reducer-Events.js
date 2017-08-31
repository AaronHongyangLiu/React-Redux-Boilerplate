/*
* for each classId, need to find a color
* */

export default function (state = [], action) {
    switch (action.type) {
        case 'GET_ALL_EVENTS':
            return action.payload;
            break;
    }
    return state;
    // return [
    //     {
    //         id:1,
    //         name:"Math 322 LEC A1 CAB 265",
    //         start_time:9.5,
    //         end_time:11,
    //         days:[2,4],
    //         classId:1
    //     },
    //     {
    //         id:2,
    //         name:"CMPUT 307 LEC A1 ETLC E1-018",
    //         start_time:14,
    //         end_time:15,
    //         days:[1,3,5],
    //         classId:2
    //     },
    //     {
    //         id:3,
    //         name:"CMPUT 307 LAB D01 CSC 167",
    //         start_time:17,
    //         end_time:20,
    //         days:[2],
    //         classId:2
    //     },
    //     {
    //         id:4,
    //         name:"CMPUT 350 LEC A1 SAB 331",
    //         start_time:11,
    //         end_time:12.5,
    //         days:[2,4],
    //         classId:3
    //     },
    //     {
    //         id:5,
    //         name:"CMPUT 350 LAB D03 CSC 159",
    //         start_time:14,
    //         end_time:17,
    //         days:[2],
    //         classId:3,
    //     },
    //     {
    //         id:6,
    //         name:"CMPUT 466 LEC A1 SAB 336",
    //         start_time:12.5,
    //         end_time:14,
    //         days:[2,4],
    //         classId:4,
    //     },
    //     {
    //         id:7,
    //         name: "CMPUT 466 LAB D01 CSC 219",
    //         start_time:17,
    //         end_time:20,
    //         days:[3],
    //         classId:4,
    //     },
    //     {
    //         id:8,
    //         name: "CMPUT 495 SAB 336",
    //         start_time:15,
    //         end_time:16,
    //         days:[1],
    //         classId:5
    //     },
    //     {
    //         id:9,
    //         name: "PHIL 101 LEC TL B 2",
    //         start_time: 11,
    //         end_time:12,
    //         days:[1,3],
    //         classId:6
    //     },
    //     {
    //         id:10,
    //         name: "MATH 228 LEC A1 SAB 436",
    //         start_time: 12,
    //         end_time:13,
    //         days:[1,3,5],
    //         classId:7
    //     }
    // ]
}