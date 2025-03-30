import "./ListForm.css";
import Button from "./Button";
import { useState } from "react";
import { useToDo } from "../contexts/TodoContext";
import toast from "react-hot-toast";

function ListForm({ initial_values = {}, isOpenFromModal }) {
  const [name, setName] = useState(initial_values.name || "");
  const [discription, setDiscription] = useState(
    initial_values.discription || ""
  );
  const [deadLine, setDeadLine] = useState(initial_values.deadLine || "");
  const [isImportant, setIsImportant] = useState(
    initial_values.isImportant || false
  );
  const { addItem, modalIsOpen, handleToggleModal, updateItem } = useToDo();
  const isOpenModal = isOpenFromModal && modalIsOpen;

  function handleAddItem() {
    if (name.length === 0) {
      toast.error("Form is empty");
      return;
    }
    if (!isOpenModal) {
      const listItem = {
        name: name.toUpperCase(),
        discription,
        deadLine,
        isImportant,
        id: Date.now(),
      };
      addItem(listItem);
      handleClearForm();
      toast.success("Item added to the list");
    }
    if (isOpenModal) {
      const listItem = {
        name: name.toUpperCase(),
        discription,
        deadLine,
        isImportant,
        id: initial_values.id,
      };
      updateItem(initial_values.id, listItem);
      handleToggleModal();
      toast.success("Item edited");
    }
  }

  function handleClearForm() {
    if (!isOpenModal) {
      if (name === "") {
        toast.error("Nothing to clear");
        return;
      }
      setName(() => "");
      setDiscription(() => "");
      setDeadLine(() => "");
      setIsImportant(() => false);
      toast.success("List Cleared");
    }
    if (isOpenModal) {
      handleToggleModal();
      toast.success("Changes Discarded");
    }
  }

  return (
    <section className="section-form">
      <div className="form-container">
        <form className="form-container--grid">
          <div className="text-input">
            <label htmlFor="name">Your Task Name</label>
            <input
              type="string"
              id="name"
              placeholder="Tasks Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="text-input">
            <label htmlFor="discription">Your Task discription</label>
            <input
              type="string"
              id="discription"
              placeholder="Tasks discription"
              required
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <div className="text-input">
            <label htmlFor="deadline">Your Task deadline</label>
            <input
              type="string"
              id="deadline"
              placeholder="Tasks deadline"
              required
              value={deadLine}
              onChange={(e) => setDeadLine(e.target.value)}
            />
          </div>
          <div className="is-important">
            <label htmlFor="important">Is Important :</label>
            <input
              type="checkbox"
              id="important"
              checked={isImportant}
              onChange={() => setIsImportant((isImportant) => !isImportant)}
            />
          </div>
        </form>
        <div className="form-btn">
          <Button type="list-form" onClick={handleAddItem}>
            {isOpenModal ? `Edit Task` : "Add Task"}
          </Button>
          <Button type="clear-form" onClick={handleClearForm}>
            {isOpenModal ? "Discard Changes" : "Clear List"}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ListForm;
