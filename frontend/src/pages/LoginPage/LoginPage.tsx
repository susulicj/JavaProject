
import { useLoginForm } from "../../hooks/useLoginForm";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField"; 

function LoginPage() {
    const { formData, message, isLoading, handleChange, handleSubmit } = useLoginForm();

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Username:"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={isLoading}
                />

                <InputField
                    label="Password:"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                />

                <Button type="submit" isLoading={isLoading}>
                    Login
                </Button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginPage;
