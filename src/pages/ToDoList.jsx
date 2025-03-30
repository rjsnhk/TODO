import EditModal from "../ui/EditModal";
import ListForm from "../ui/ListForm";
import ListTable from "../ui/ListTable";
import Navbar from "../ui/Navbar";

function ToDoList() {
  return (
    <>
      <Navbar />
      <ListForm />
      <ListTable />
      <EditModal />
    </>
  );
}

export default ToDoList;
