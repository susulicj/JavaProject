import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                
                <Route
                    path="/tasks/create"
                    element={<CreateTaskPage />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />

                
            </Routes>
        </BrowserRouter>
    );
}

export default App;