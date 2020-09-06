import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SearchDrink() {
  const param = useParams();
  const [item, setitem] = useState([]);

  useEffect(() => {
    fetchItem();
  });

  const fetchItem = async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${param.drink}`
    );
    setitem(data.data);
  };

  let result;

  if (item.drinks) {
    result = item.drinks.map((drink) => {
      return (
        <div key={drink.idDrink} className="checked-drinks">
          <h2>{drink.strDrink}</h2>
          <h4>{drink.strGlass}</h4>
          <p>{drink.strInstructions}</p>
          <img alt="bars" src={drink.strDrinkThumb}></img>
        </div>
      );
    });
  } else {
    result = "loading...";
  }

  return <div>{result}</div>;
}
