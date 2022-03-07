import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <Router>
            <div>
                <Navbar theme={theme} setTheme={setTheme} />

                <div
                    className={
                        theme === "light" ? "container light" : "container dark"
                    }
                >
                    <div className="app">
                        <Header />
                        <Routes>
                            <Route path="/" exact element={<NotesListPage />} />
                            <Route path="/note/:id" element={<NotePage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
