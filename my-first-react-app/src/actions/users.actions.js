import USERACTIONS from '../constants/users.constant';

export  const startRequest = (isLoading = false) => {
    return {
        type: USERACTIONS.REQUEST,
        isLoading
    }
} 

export const changeEmail = (email) => {
    return {
        type : USERACTIONS.CHANGE_EMAIL,
        email,
    }
} 

export const changePassword = (password) => {
    return {
        type : USERACTIONS.CHANGE_PASSWORD,
        password,
    }
} 

export const loginSucess = (message) => {
    return {
        type : USERACTIONS.LOGIN_SUCCESS,
        message,
    }
}

export const loginError = (error) => {
    return {
        type : USERACTIONS.LOGIN_ERROR,
        error,
    }
}

