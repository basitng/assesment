import {
  ADD_FACEBOOK,
  ADD_INSTAGRAM,
  ADD_PICTURE,
  ADD_SOCIAL,
  ADD_VIDEO,
  EMPTY_STATE,
} from "./actionTypes";

export interface IState {
  isEmpty: boolean;
  picture: string;
  video: string;
  social: {
    instagram: string;
    facebook: string;
  };
}

export interface IAction {
  type: "ADD_PICTURE" | "ADD_VIDEO" | "ADD_SOCIAL" | "EMPTY_STATE";
  payload?: String;
  sociaPayload?: {
    type: "ADD_INSTAGRAM" | "ADD_FACEBOOK";
    payload?: String;
  };
}
const mediaReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ADD_PICTURE:
      return { picture: action.payload, isEmpty: false };
    case ADD_SOCIAL:
      return {
        isEmpty: false,
        social: {
          facebook:
            action.sociaPayload.type === ADD_FACEBOOK &&
            action.sociaPayload.payload,
          instagram:
            action.sociaPayload.type === ADD_INSTAGRAM &&
            action.sociaPayload.payload,
        },
      };
    case ADD_VIDEO:
      return { video: action.payload, isEmpty: false };
    case EMPTY_STATE:
      return {
        video: "",
        social: {
          facebook: "",
          instagram: "",
        },
        picture: "",
        isEmpty: true,
      };
    default:
      return state;
  }
};

export default mediaReducer;
