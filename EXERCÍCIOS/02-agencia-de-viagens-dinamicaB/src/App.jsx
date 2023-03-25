import Routes from './routes'
import { TripProvider } from './contexts/trip'

export default function App() {

  return (
    <TripProvider>
      <Routes />
    </TripProvider>
  )
}
