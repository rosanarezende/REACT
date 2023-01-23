import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/introduction">
        <h2>Introduction</h2>
      </Link>

      <Link to="/list-rendering">
        <h2>List Rendering</h2>
      </Link>

      <Link to="/conditional-rendering">
        <h2>Conditional Rendering</h2>
      </Link>

      <Link to="/children">
        <h2>Children</h2>
      </Link>

      <Link to="/props">
        <h2>Props</h2>
      </Link>

      <Link to="/props-children" >
        <h2>Props and Children</h2>
      </Link>

      <Link to="/proptypes">
        <h2>PropTypes</h2>
      </Link>

      <Link to="/default-props">
        <h2>Default Props</h2>
      </Link>
    </div>
  )
}
