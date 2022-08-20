import { Routes, Route } from "react-router-dom";
import EntryLayout from "./components/EntryLayout";
import MainLayout from "./components/MainLayout";
import EntryPage from "./pages/EntryPage";
import MainPage from "./pages/MainPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryLayout />}>
        <Route index element={<EntryPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="main" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="main/:id" element={<ProfilePage />} />
        <Route path="main/404" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
