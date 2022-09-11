import { useAuthStore } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPasswordConfirm: "",
};

export const LoginPage = () => {
  const { startLogin } = useAuthStore();

  const { formState, onInputChange: onLoginInputChange } =
    useForm(loginFormFields); //onInputChange change name to onlogininputchange para que no haya conflictos con el onInputChange de useForm
  const { formState: formStateRegister, onInputChange: onRegisterInputChange } =
    useForm(registerFormFields);

  const loginSubmit = (e) => {
    console.log(formState);

    e.preventDefault();
    startLogin({
      email: formState.loginEmail,
      password: formState.loginPassword,
    });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(
      "register submit",
      formStateRegister.registerName,
      formStateRegister.registerEmail,
      formStateRegister.registerPassword,
      formStateRegister.registerPasswordConfirm
    );
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={formState.loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={formState.loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={formStateRegister.registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={formStateRegister.registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={formStateRegister.registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPasswordConfirm"
                value={formStateRegister.registerPasswordConfirm}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
