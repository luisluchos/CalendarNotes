import calendarApi from "../api/calendarApi.ts";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log("startLogin", email, password);

    try{
      const response = await calendarApi.post("/auth", { email, password });
      console.log("response", response);

    }catch(error){
      console.log("error", error);
    }
  };

  return {
    status,
    user,
    errorMessage,
    startLogin
  };
};
