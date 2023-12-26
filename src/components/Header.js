import { Link } from "react-router-dom"
import { BiLogoSpringBoot } from "react-icons/bi";

const Header = () => {

  return (
    <div className="header">
      {/* <h3>Crud App Using SpringBoot and React</h3> */}
      <BiLogoSpringBoot className="logo" />
      <div className="navigate-options">
        <Link to="/" className="link">View Students</Link>
        <Link to="/add" className="link">Add Student</Link>
      </div>
    </div>
  )
}
export default Header