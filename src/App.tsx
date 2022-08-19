import { Routes, Route } from "react-router-dom";
import Layoyt from "./components/Layoyt";
import MainPage from "./pages/MainPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layoyt />}>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<ProfilePage />} />
        <Route path="/404" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
