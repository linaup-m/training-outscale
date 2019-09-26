import USERACTIONS from '../constants/users.constant';

const userReducer = (state = {}, action) => {
    
    switch(action.type) {
        case USERACTIONS.REQUEST:
            return Object.assign({}, state, {isLoading: action.isLoading});

        case USERACTIONS.CHANGE_EMAIL:
                return Object.assign({}, state, {email: action.email});

        case USERACTIONS.CHANGE_PASSWORD:
                return Object.assign({}, state, {password: action.password});

        case USERACTIONS.LOGIN_SUCCESS:
                return Object.assign({}, state, {message: action.message});

        case USERACTIONS.LOGIN_FAILURE:
                return Object.assign({}, state, {error: action.error});

        default:
            return state;

    }

};

export default userReducer;