import { BiAlarm } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        
        <p className="logo-text" style={{paddingRight:"10px"}}>
          TODO
          </p>
        
        <BiAlarm
          className="logo-icon"
        />
        <p className="logo-text">
          APP
        </p>
      </div>
      </div>
  );
}

export default Navbar;
