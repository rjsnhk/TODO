import { useState } from "react";
import { HiTrash } from "react-icons/hi";
import Button from "./Button";
import "./ListTable.css";
import ListTableRow from "./ListTableRow";
import { useToDo } from "../contexts/TodoContext";
import toast from "react-hot-toast";

function ListTable() {
  const { list, clearTable } = useToDo();
  const [searchQuery, setSearchQuery] = useState("");

  function handleClearTable() {
    function handleToastDismiss(t) {
      toast.dismiss(t.id);
    }

    function handleClearTable(t) {
      toast.dismiss(t.id);
      clearTable();
      toast.success("Table Deleted");
    }

    toast(
      () => (
        <div className="toast-container">
          <div className="toast-text-container">
            <p>Are you sure you want to delete this table?</p>
            <p>
              This action cannot be <strong>UNDONE</strong>!
            </p>
          </div>
          <div className="toast-btn-container">
            <button className="toast-btn-confirm" onClick={handleClearTable}>
              Confirm
            </button>
            <button className="toast-btn-cancel" onClick={handleToastDismiss}>
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 10000 }
    );
  }

  // Filter function (only by name)
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="table-section">
      <div className="table-container">
        {/* Search Input */}
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Remove/Edit</th>
            </tr>
          </thead>

          <tbody>
            {filteredList.map((listItem) => (
              <ListTableRow
                item={{
                  name: listItem.name,
                  discription: listItem.discription || "-",
                  deadline: listItem.deadLine || "-",
                  isImportant: listItem.isImportant,
                  id: listItem.id,
                }}
                key={listItem.id}
              />
            ))}
          </tbody>
        </table>
        <div className="table-btns">
          <Button type="clear-form" onClick={handleClearTable}>
            <HiTrash /> Clear Table
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ListTable;
