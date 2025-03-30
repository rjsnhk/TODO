import "./ListTableRow.css";

import Button from "./Button.jsx";
import { useToDo } from "../contexts/TodoContext.jsx";
import toast from "react-hot-toast";

function ListTableRow({ item }) {
  const { deleteItem, handleToggleModal } = useToDo();

  function handleDeleteRow() {
    deleteItem(item.id);
    toast.success("Item deleted");
  }
  return (
    <tr>
      <th>
        <div className={`${item.isImportant && "important"}`}>{item.name}</div>
      </th>
      <td>{item.discription}</td>
      <td>{item.deadline}</td>
      <td>
        <div className="edit-delete-btn">
          <Button type="delete-item" onClick={handleDeleteRow}></Button>
          <Button
            type="edit-item"
            onClick={() => handleToggleModal(item.id)}
          ></Button>
        </div>
      </td>
    </tr>
  );
}

export default ListTableRow;
