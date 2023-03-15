import { NavLink } from "react-router-dom";
import css from './navlink.module.css'


const AuthNav = () => {
    return (
        <div className={css.div}>
            <NavLink className={css.link} to={'/register'}>Register</NavLink> | 
            <NavLink className={css.link} to={'/login'}> Login</NavLink>
        </div>
    )
}

export default AuthNav;