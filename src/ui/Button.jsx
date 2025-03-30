import "./Button.css";
import { HiPencil, HiX } from "react-icons/hi";

function Button({ children, type, onClick }) {
  if (type === "list-form")
    return (
      <button className="button-form" onClick={onClick}>
        {children}
      </button>
    );

  if (type === "clear-form")
    return (
      <button className="button-form clear-form" onClick={onClick}>
        {children}
      </button>
    );

  if (type === "delete-item")
    return (
      <button className="delete-item" onClick={onClick}>
        <div>
          <HiX className="x-mark" />
        </div>
      </button>
    );

  if (type === "edit-item")
    return (
      <button className="edit-item" onClick={onClick}>
        <div>
          <HiPencil />
        </div>
      </button>
    );

  return <button onClick={onClick}>{children}</button>;
}

export default Button;
