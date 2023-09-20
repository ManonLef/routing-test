import { Link } from "react-router-dom"

const App = () => {
  return (
    <div>
      <h1>Hello from the main page</h1>
      <p>some example links</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App