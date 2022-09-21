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

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const response = await calendarApi.post("/auth/new", { name, email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      console.log(response);
      dispatch(onLogin({ name: response.data.name, uid: response.data.uid }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "Error inesperado"));
      //limpiamos el error del mensaje
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };


  //verificamos si hay un token en el localstorage y si está activo, 
  //deberiamos llamarlo en el appRouter, que es donde tomamos la decisión si usamos rutas públicas o pivadas
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(onLogout());
    }

    try {
      const response = await calendarApi.get("/auth/renew");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: response.data.name, uid: response.data.uid }));
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  }

  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  };
};
