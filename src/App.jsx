import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import "./App.css";
import BasicCard from "./Card";
import Card from "./Card";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostCode] = useState("");

  const handlePostcode = async () => {
    try {
      const areaData = await getAreaData(postcode);
      areas.concat(areaData);
      setAreas((currArr) => {
        return areaData;
      });
    } catch (error) {
      window.alert("todo: fix app");
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      <input
        type="text"
        placeholder="Please enter the postcode"
        onChange={(event) => {
          setPostCode(event.target.value);
        }}
      ></input>

      <button
        onClick={(event) => {
          handlePostcode();
        }}
      >
        Find Areas
      </button>
      {areas.map((area, index) => {
        return <BasicCard areas={areas[index]} />;
      })}
    </div>
  );
}

export default App;
