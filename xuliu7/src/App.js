import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddLog from "./Components/FamilyLog/AddLog";
import EditLog from "./Components/FamilyLog/EditLog";
import FamilyLog from "./Components/FamilyLog/FamilyLog";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="family-log" element={<FamilyLog />} />
        <Route path="edit-log" element={<EditLog />} />
        <Route path="add-log" element={<AddLog />} />
      </Routes>
    </div>
  );
}

export default App;
