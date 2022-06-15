import Auth from "../../models/authmodel";
import ActionType from "./action-types";

interface GetAuthRequestAction{
    type: ActionType.GET_AUTH_REQUEST
}

interface GetAuthSuccessAction {
    type: ActionType.GET_AUTH_SUCCESS,
    payload: Auth[]
}

interface GetAuthFailAction {
    type: ActionType.GET_AUTH_FAIL,
    payload: string
}

export type Action = GetAuthRequestAction | GetAuthSuccessAction | GetAuthFailAction