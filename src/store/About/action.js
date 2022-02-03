import api from "../../services/api";
export const GETALLDATA = "[ABOUT]GETALL";

export const getAllDataAbout = () => async (dispatch) => {
  try {
    const { data } = await api.get("/rest/v1/about?select=*");
    dispatch({
      type: GETALLDATA,
      payload: data[0],
    });
  } catch (error) {
    alert(error);
  }
};
