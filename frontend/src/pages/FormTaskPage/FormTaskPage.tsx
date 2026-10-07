import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { useCreateTask } from "../../hooks/useCreateTask";
import { useParams } from "react-router-dom";

function FormTaskPage() {
    const { id } = useParams();

    const {
        formData,
        handleChange,
        handleSubmit,
        isLoading,
        message,
    } = useCreateTask(id);

    const isEditMode = !!id;

    return (
        <div>
            <h1>
                {isEditMode ? "Edit Task" : "Create New Task"}
            </h1>

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
                    {isEditMode ? "Update Task" : "Create Task"}
                </Button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default FormTaskPage;