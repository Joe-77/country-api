import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StoreData } from "./context/context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StoreData>
      <Router>
        <App />
      </Router>
    </StoreData>
  </QueryClientProvider>
);
