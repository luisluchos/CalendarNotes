import calendarApi from "../api/calendarApi.ts";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const response = await calendarApi.post("/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: response.data.name, uid: response.data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      //limpiamos el error del mensaje
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    status,
    user,
    errorMessage,
    startLogin,
  };
};
