import React, { createContext, useReducer } from "react";
import mediaReducer, { IAction, IState } from "./mediaReducer";

interface IContextProps {
  state: IState;
  dispatch: ({ type, payload }: IAction) => void;
}
export const MediaContext = createContext({} as IContextProps);

const MediaProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mediaReducer, {
    isEmpty: false,
    picture: "",
    video: "",
    social: {
      facebook: "",
      instagram: "",
    },
  });
  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
