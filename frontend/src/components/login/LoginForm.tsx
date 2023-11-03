/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from "@mantine/core";
import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import axios from "axios";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [login, setAccessToken, setUser] = useAuthStore((state: any) => [state.login, state.setAccessToken, state.setUser])
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) =>
                value.length < 6 ? "Password must be at least 6 characters long" : null,
        },
    });

    const handleLogin = async (data: { email: string; password: string; }) => {
        axios.post('http://localhost:5000/api/auth/login', data)
            .then(function (response) {
                console.log(response);
                console.log("🚀 ~ file: LoginForm.tsx:35 ~ response:", response)
                if (response.data) {
                    // Update the Zustand store with the access token and user data
                    setAccessToken(response.data.accessToken);
                    setUser(response.data.user);

                    // Mark the user as logged in
                    login();
                    navigate("/")
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log("🚀 ~ file: LoginForm.tsx:39 ~ handleLogin ~ error:", error)
            });
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor size="sm" component="button">
                    <Link to="/signup">Create account</Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
                    <TextInput
                        styles={{
                            label: { display: "flex", justifyContent: "start" },
                        }}
                        label="Email"
                        placeholder="you@mantine.dev"
                        required
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        styles={{
                            label: { display: "flex", justifyContent: "start" },
                        }}
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        {...form.getInputProps("password")}
                    />
                    <Button type="submit" fullWidth mt="xl">
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};
