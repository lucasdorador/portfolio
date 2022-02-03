import { GETALLDATA } from "./action";

const initialValues = {
  createdAt: "",
  id: 0,
  biography: "",
  career: [
    { company: "", occupation: "", urlCompany: "", city: "", period: "" },
  ],
};

const reducerAbout = (state = initialValues, action) => {
  switch (action.type) {
    case GETALLDATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducerAbout;
