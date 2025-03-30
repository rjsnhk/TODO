import { BrowserRouter } from "react-router-dom";

import ToDoList from "./pages/ToDoList";

import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#eee",
            color: "#444",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
