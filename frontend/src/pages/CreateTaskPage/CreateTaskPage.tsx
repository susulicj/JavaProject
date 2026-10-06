import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { useCreateTask } from "../../hooks/useCreateTask";

function CreateTaskPage() {
    const {
        formData,
        handleChange,
        handleSubmit,
        isLoading,
        message,
    } = useCreateTask();

    return (
        <div>
            <h1>Create New Task</h1>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Title:"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    disabled={isLoading}
                />


                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="completed"
                            checked={formData.completed}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        Completed
                    </label>
                </div>

                <Button
                    type="submit"
                    isLoading={isLoading}
                >
                    Create Task
                </Button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default CreateTaskPage;