import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// export const RegisterForm = () => {
//     const dispatch = useDispatch();

//     const handleSubmit = e => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         dispatch(
//             register({
//                 name: form.elements.name.value,
//                 email: form.elements.email.value,
//                 password: form.elements.password.value,
//             })
//         );
//         form.reset();
//     };

//     return (
//         <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//             <label className={css.label}>
//                 Username
//                 <input type="text" name="name" />
//             </label>
//             <label className={css.label}>
//                 Email
//                 <input type="email" name="email" />
//             </label>
//             <label className={css.label}>
//                 Password
//                 <input type="password" name="password" />
//             </label>
//             <button type="submit">Register</button>
//         </form>
//     );
// };



const theme = createTheme();

export default function RegisterForm() {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} autoComplete="off">
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}