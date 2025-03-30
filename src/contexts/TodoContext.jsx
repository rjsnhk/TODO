import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditId, setModalEditId] = useState(null);

  function addItem(listItem) {
    const newList = [...list, listItem];
    localStorage.setItem("todoList", JSON.stringify(newList));
    setList(() => newList);
  }

  function clearTable() {
    localStorage.removeItem("todoList");
    setList([]);
  }

  function deleteItem(id) {
    const newList = [...list].filter((item) => item.id !== id);
    setList(newList);
    localStorage.removeItem("todoList");
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  function updateItem(id, editedItem) {
    const newList = [...list].filter((item) => item.id !== id);
    newList.push(editedItem);
    localStorage.removeItem("todoList");
    localStorage.setItem("todoList", JSON.stringify(newList));
    setList(newList);
  }

  function handleToggleModal(id = null) {
    if (modalIsOpen) {
      setModalIsOpen(() => false);
      setModalEditId(() => null);
    }
    if (!modalIsOpen) {
      setModalIsOpen(() => true);
      setModalEditId(() => id);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        list,
        addItem,
        clearTable,
        deleteItem,
        modalIsOpen,
        handleToggleModal,
        modalEditId,
        updateItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useToDo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error(
      "useUser has been used outside of the TodoProvider component"
    );
  return context;
}

export { TodoProvider, useToDo };
