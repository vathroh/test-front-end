import Auth from "../../models/authmodel";
import { Action } from "../actions";
import ActionType from "../actions/action-types";

interface AuthState {
    loading: boolean;
    error: string | null;
    data: Auth[] | null
}

const initialState = { loading: false, error: null, data: null }

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch (action.type) {
        case ActionType.GET_AUTH_REQUEST:
            return { loading: true, data: null, error: null }
        case ActionType.GET_AUTH_SUCCESS:
            return { loading: false, data: action.payload, error: null }
        case ActionType.GET_AUTH_FAIL:
            return { loading: false, data: null, error: action.payload }
        default:
            return state
    }
}