/* eslint-disable no-useless-catch */
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
import { useForm } from "@mantine/form";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { Signup } from "../../services/AuthService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ErrorType {
    response: {
        data: {
            msg: string;
        }
    }
}

export const SignupForm = () => {

    const showToastMessage = (message: string, success: boolean) => {
        if (!success) {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
            return
        }
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },

        validate: {
            name: (value) => (value.length < 1 ? "Name is required" : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) =>
                value.length < 6 ? "Password must be at least 6 characters long" : null,
            confirmPassword: (value) =>
                value.length < 6 ? "Password must be at least 6 characters long" : null,
        },
    });

    const handleSignup = async (data: { name: string; email: string; password: string; confirmPassword?: string; }) => {
        try {
            const response = await Signup(JSON.stringify(data));
            console.log(response);
            if (response && response.msg) {
                showToastMessage(response.msg, true)
            }
        } catch (error: unknown) {
            console.error(error);
            const err = error as ErrorType;
            const message = err?.response?.data?.msg || "An error occurred while sign up"
            showToastMessage(message, false)
        }
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Create a new account
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do you have an existing account?{" "}
                <Anchor size="sm" component="button">
                    <Link to="/login">Log In</Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit((values) => handleSignup(values))}>
                    <TextInput
                        styles={{
                            label: { display: "flex", justifyContent: "start" },
                        }}
                        label="Name"
                        placeholder="Your name"
                        required
                        {...form.getInputProps("name")}
                    />
                    <TextInput
                        styles={{
                            label: { display: "flex", justifyContent: "start" },
                        }}
                        label="Email"
                        placeholder="your@email.com"
                        required
                        mt="md"
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
                    <PasswordInput
                        styles={{
                            label: { display: "flex", justifyContent: "start" },
                        }}
                        label="Confirm Password"
                        placeholder="Your password"
                        required
                        {...form.getInputProps("confirmPassword")}
                        error={
                            form.values.password !== form.values.confirmPassword &&
                            "Passwords do not match"
                        }
                        mt="md"
                    />
                    <Button type="submit" fullWidth mt="xl">
                        Sign up
                    </Button>
                </form>
                <ToastContainer />
            </Paper>
        </Container>
    );
};
