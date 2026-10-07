import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import FormTaskPage from "./pages/FormTaskPage/FormTaskPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                
                <Route
                    path="/tasks/create"
                    element={<FormTaskPage />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />

                <Route
                    path="/tasks/edit/:id"
                    element={<FormTaskPage />}
                />


                
            </Routes>
        </BrowserRouter>
    );
}

export default App;