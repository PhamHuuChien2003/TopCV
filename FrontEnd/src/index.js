import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const queryClient =new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
