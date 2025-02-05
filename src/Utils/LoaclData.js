export const userData = [
    {
        id: 1,
        name: 'John Doe',
        workouts: [
            {type: 'Running', minutes: 30},
            {type: 'Cycling', minutes: 40},            
        ]
    },
    {
        id: 2,
        name: 'Alan Walker',
        workouts: [
            {type: 'Swimming', minutes: 10},
            {type: 'Yoga', minutes: 40},            
        ]
    },
    {
        id: 3,
        name: 'Palak Desai',
        workouts: [
            {type: 'Cycling', minutes: 30},
            {type: 'Yoga', minutes: 40},  
            {type: 'Cycling', minutes: 10},                      
        ]
    },
    {
        id: 4,
        name: 'Sachin Reddu',
        workouts: [
            {type: 'Cycling', minutes: 40}, 
            {type: 'Cycling', minutes: 40}                                       
        ]
    },
    {
        id: 5,
        name: 'Pratham Singh',
        workouts: [
            {type: 'Running', minutes: 20}, 
            {type: 'Yoga', minutes: 30}                                       
        ]
    },
]


export const setLocalstorage = ()=>{
    localStorage.setItem("userData", JSON.stringify(userData))
}

export const getLocalstorage = ()=>{
    const userData = JSON.parse(localStorage.getItem("userData"))
    return {userData};
}

