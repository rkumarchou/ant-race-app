import "./App.css";
import Header from "./components/header";
import { Button } from "@material-ui/core";
import { addAnts } from "./actions";
import AntList from "./components/antList";
import { useSelector, useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

const GET_ANTS = gql`
  query ants {
    name
    color
    weight
    length
  }
`;

function App() {
  const data = {
    ants: [
      {
        name: "Marie ‘Ant’oinette",
        color: "BLACK",
        weight: 2,
        length: 12,
      },
      {
        name: "Flamin’ Pincers",
        color: "RED",
        weight: 2,
        length: 11,
      },
      {
        name: "Big Susan",
        color: "BLACK",
        weight: 5,
        length: 20,
      },
      {
        name: "The Unbeareable Lightness of Being",
        color: "SILVER",
        weight: 1,
        length: 5,
      },
      {
        name: "‘The Duke’",
        color: "RED",
        weight: 3,
        length: 17,
      },
    ],
  };

  const isAnts = useSelector((state) => state.ants.ants);
  const dispatch = useDispatch();

  const getAnts = () => {
    // const { loading, error, data } = useQuery(GET_ANTS);

    // if (loading) return "Loading...";
    // if (error) return `Error! ${error.message}`;
  const result =  data.ants.map(obj=> ({ ...obj, status: 'not yet run' }))
    console.log("data", result)
    dispatch(addAnts(result));
  };
  return (
    <div className="App">
      {isAnts ? (
        <>
          {" "}
          <Header></Header> <AntList />
        </>
      ) : (
        <Button variant="outlined" onClick={getAnts}>
          Get Ants
        </Button>
      )}
    </div>
  );
}

export default App;
