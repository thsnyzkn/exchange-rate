const initialState = {
    name:'Tahsin Yazkan',
    loggedIn:false
}

export const usersReducer = (state=initialState,action)=> {
            return state;
}

//selectors
export const getName = state => {
    return state.users.name.split(" ")[0]
}