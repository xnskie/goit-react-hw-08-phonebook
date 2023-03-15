import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/Menu/Menu';
import AuthNav from 'components/AuthNav/auth-nav';
import { useAuth } from '../hooks/useAuth';
import css from './NavBar.module.css';

export const NavBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};