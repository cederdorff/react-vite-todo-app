import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./pages/Todos";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Todos />} />
            </Routes>
        </main>
    );
}

export default App;
