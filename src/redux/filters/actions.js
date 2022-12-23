import {STATUSCHANGED, COLORCHANGED} from './actiontypes';

export const colorChanged = (color, changedType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changedType
        }
    }
}

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}