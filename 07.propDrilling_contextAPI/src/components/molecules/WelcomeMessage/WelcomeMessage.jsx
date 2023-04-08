import { useUserContext, UserContext } from "../../../contexts/user"

export function WelcomeMessage({ name }) {
  return <p>{ name }, fique à vontade!</p>
}

// CONTEXT API - HOOKS
export function WelcomeMessage2() {
  const { user } = useUserContext()
  return <p>{ user.name }, fique à vontade!</p>
}

// CONTEXT API - CONSUMER
export function WelcomeMessage3() {
  return (
    <UserContext.Consumer>
      {(props) =>
        <p>{props.user.name}, fique à vontade!</p>
      }
    </UserContext.Consumer>
  )
}
