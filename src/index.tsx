import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./components/styles/Global.styled";
import App from "./App";
import UserProvider from "./hocs/UserContext";
import store from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <App />
      </UserProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </Provider>,
);
