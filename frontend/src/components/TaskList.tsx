import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}

export default TaskList;