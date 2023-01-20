// vendors
import { BrowserRouter } from "react-router-dom";

// components
import Router from "./routes/Routes";

// styles
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
