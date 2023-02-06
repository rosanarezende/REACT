import { useUserContext, UserContext } from "../../contexts/user"


export function WelcomeMessage({ name }) {
  return <p>{ name }, fique à vontade!</p>
}

export function WelcomeMessage2() {
  const { name } = useUserContext()
  return <p>{ name }, fique à vontade!</p>
}

export function WelcomeMessage3() {
  return (
    <UserContext.Consumer>
      {(props) => 
        <p>{props.name}, fique à vontade!</p>
      }
    </UserContext.Consumer>
  )
}
