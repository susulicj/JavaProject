import type { Task } from "../types/Task";

interface TaskItemProps {
    task: Task;
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <li>
            <h3>{task.title}</h3>

            <p>
                Status: {task.completed ? "Completed" : "Pending"}
            </p>
        </li>
    );
}

export default TaskItem;