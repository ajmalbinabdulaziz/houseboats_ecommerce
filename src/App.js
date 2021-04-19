import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import BoatScreen from './screens/BoatScreen'

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomeScreen />
        <BoatScreen />
      </Container>
      <Footer />
    </>
  );
}

export default App;
