import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from 'components/Login/Login';

export default function Login() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <LoginForm />
            </div>
        </HelmetProvider>
    );
}