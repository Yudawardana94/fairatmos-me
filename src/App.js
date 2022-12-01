import React, { useState, useEffect } from "react";
import "./App.css";

import { getDataAPI } from "./fetchData";

// email to : idos@fairatmos.com

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const apiData = await getDataAPI();
      setData(apiData);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  const Card = ({ data }) => {
    return (
      <div className="" key={data[0]}>
        <p>{data[0]}</p>
        {data[1].map((el) => {
          return <Content data={el} key={Math.random()} />;
        })}
      </div>
    );
  };

  const Content = ({ data }) => {
    return <p key={data.id}>name: {data.name}</p>;
  };

  return (
    <div className="App">
      {data.map((cat) => {
        return <Card data={cat} key={Math.random()} />;
      })}
    </div>
  );
}

export default App;
