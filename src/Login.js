import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import { signin } from "./service/ApiService";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        // ApiService의 signin() 메소드를 이용해 로그인
        signin({ email:email, password:password })
    }

    return (
        <Container component="main" maxWidth="xs" style={{marginTop : "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                {/* submit 버튼을 클릭하면 handleSubmit 호출 */}
                <Grid container spacing="2">
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete='current-password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;