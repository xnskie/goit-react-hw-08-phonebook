import { NavLink } from "react-router-dom";
import css from './navlink.module.css'
import { useAuth } from "components/hooks/useAuth";


const AuthNav = () => {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return (
            <div className={css.div}>
                <NavLink className={css.link} to={'/register'}>Register</NavLink> |
                <NavLink className={css.link} to={'/login'}> Login</NavLink>
            </div>
        )
    }
    return;
}

export default AuthNav;