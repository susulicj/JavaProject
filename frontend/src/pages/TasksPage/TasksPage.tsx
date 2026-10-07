import { useTasks } from "../../hooks/useTasks";
import { Button } from "../../components/Button";
import TaskList from "../../components/TaskList";
import { useNavigate } from "react-router-dom";

function TasksPage() {
    const { tasks, isLoading, message, onDelete, onUpdate } = useTasks();
    const navigate = useNavigate();
    if (isLoading) {
        return <p>Loading tasks...</p>;
    }

    return (
        <div>
            <h1>My Tasks</h1>

            {message && <p>{message}</p>}

            {tasks.length === 0 ? (
                <p>You don't have any tasks yet.</p>
            ) : (
                <TaskList tasks={tasks} onDelete= {onDelete} onUpdate= {onUpdate}/>
            )}

            <Button type="button"
                    onClick={() => navigate("/tasks/create")}
            >
                
                Add new task
            </Button>
        </div>
    );
}

export default TasksPage;