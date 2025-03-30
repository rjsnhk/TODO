import { useToDo } from "../contexts/TodoContext";

import "./EditModal.css";
import ListForm from "./ListForm";

function EditModal() {
  const { modalIsOpen, modalEditId, list } = useToDo();

  if (!modalIsOpen) return null;

  const init_item = list.filter((job) => job.id === modalEditId)[0];

  return (
    <div className={`modal`}>
      <div className="modal-content">
        <ListForm initial_values={init_item} isOpenFromModal={true} />
      </div>
    </div>
  );
}

export default EditModal;
