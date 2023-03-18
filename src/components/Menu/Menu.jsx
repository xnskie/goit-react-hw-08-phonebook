import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import css from './menu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.wrapper}>
            <span className={css.username}>Welcome, {user.name}</span>
            <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};