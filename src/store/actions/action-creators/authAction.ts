import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "..";
import Auth from "../../../models/authmodel";
import ActionType from "../action-types";

export const getAuth = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.GET_AUTH_REQUEST
            })

            const { data } = await axios.post<Auth[]>("https://api.warung.io/admin/tenant/auth/login-with-email")

            dispatch({
                type: ActionType.GET_AUTH_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.GET_AUTH_FAIL,
                payload: error.message
            })
        }
    }
}