import './index.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App
