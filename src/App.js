import "./App.css";
import Header from "./components/header/header";
import GetAnts from "./components/getAnts";
import StartAntRace from "./components/startAntRace";
import RaceStats from "./components/raceStats/raceStats";
import AntList from "./components/AntsComponent/antList";
import { useSelector } from "react-redux";

const App = () => {
  const { ants } = useSelector((state) => state.ants);

  return (
    <>
      <Header />
      <div className="main">
        {ants ? (
          <>
            <StartAntRace />
            <RaceStats />
            <AntList />
          </>
        ) : (
          <GetAnts />
        )}
      </div>
    </>
  );
};

export default App;
