import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/pay'
                    element={<Pay />}
                />
                <Route exact path='/success'
                    element={<Success />}
                />
            </Routes>
        </Router>
    )
}

export default App;
