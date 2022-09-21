import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {

  const { user, startLogout } = useAuthStore();
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
<span className='navbar-brand'>
    <i className='fas fa-calendar-alt'></i>
    <span className="m-4"> {user?.name}</span>
   
</span>
<button className="btn btn-outline-danger mx-4" onClick={startLogout}>
    <i className="fas fa-sign-out-alt"></i>
    <span >Salir</span>
</button>
    </div>
  )
}
