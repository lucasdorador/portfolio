import api from "../../services/api";

export const GETALLDATA = "[HOME]GETALL";

export const getAllDataHome = () => async (dispatch) => {
  try {
    const { data } = await api.get("/rest/v1/home?select=*");

    dispatch({
      type: GETALLDATA,
      payload: data[0],
    });
  } catch (error) {
    alert(error);
  }
};
