import "./App.css";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
