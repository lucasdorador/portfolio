import { GETALLDATA } from "./action";

const initialValues = {
  created_at: "",
  id: 0,
  name: "",
  subtitle1: "",
  subtitle2: "",
  technologies: "",
};

const reducerHome = (state = initialValues, action) => {
  switch (action.type) {
    case GETALLDATA:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducerHome;
