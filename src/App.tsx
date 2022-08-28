import { Routes, Route } from "react-router-dom";
import EntryLayout from "./components/EntryLayout";
import MainLayout from "./components/MainLayout";
import PageLoader from "./components/styles/PageLoader";
import useAuth from "./hooks/useAuth";
import EntryPage from "./pages/EntryPage";
import MainPage from "./pages/MainPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const { handyLoading } = useAuth();

  if (handyLoading) return <PageLoader />;

  return (
    <Routes>
      <Route path="/" element={<EntryLayout />}>
        <Route index element={<EntryPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="main" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":id" element={<ProfilePage />} />
        <Route path="404" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
