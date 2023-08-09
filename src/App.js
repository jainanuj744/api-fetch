import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  let [prod, setProd] = useState([]);
  let [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((list) => {
      setProd(list.data);
    });
  }, []);

  return (
    <div>
      {prod.map((obj) => {
        return (
          <>
            <div className="parent">
              <div>{obj.id}</div>
              <div>{obj.category}</div>
              <div>{obj.price}</div>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default App;
