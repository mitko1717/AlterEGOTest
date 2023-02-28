import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Main from "./pages/Main";

function App() {
  return (
    <div className="w-full h-screen bg-slate-300">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
