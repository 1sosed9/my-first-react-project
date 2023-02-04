import Currencies from "./components/Currencies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container className="bg-white p-2">
        <Currencies />
      </Container>
    </div>
  );
}

export default App;
