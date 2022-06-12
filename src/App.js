import "./App.css";
import Container from "./components/Container";
import { WeatherProvider } from "./contexts/WeatherContext";
import { GeoProvider } from "./contexts/GeoContext";

function App() {
  return (
    <GeoProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </GeoProvider>
  );
}

export default App;
