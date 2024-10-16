import "./App.css";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";
import { WeatherProvider, LocationProvider, FavouriteProvider } from "./provider";

function App() {
  return (
    <LocationProvider>
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
    </LocationProvider>
  );
}

export default App;
