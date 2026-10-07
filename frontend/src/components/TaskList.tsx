import type { Task } from "../types/Task";
import { Button } from "./Button";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onUpdate: (id:number) => void;
}

function TaskList({ tasks, onDelete, onUpdate}: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskItem task={task} />

                    <Button
                        type="button"
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </Button>
                    <Button
                        type="button"
                        onClick={() => onUpdate(task.id)}
                    >
                        Update
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;