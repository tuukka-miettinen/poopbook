import { Link } from "react-router-dom"
import PoopForm from "./PoopForm"
import PoopList from "./PoopList"

const Dashboard = () => {
  return (
    <>
      <Link to="/Logout">Sign out</Link>
      <h1>Dashboard</h1>
      <PoopForm />
      <PoopList />
    </>
  )
}

export default Dashboard;