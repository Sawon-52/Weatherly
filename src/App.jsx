import "./App.css";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
