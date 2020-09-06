import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SearchDrink() {
  const params = useParams();
  const [item, set_item] = useState([]);
  useEffect(() => {
    fetchItem();
  });

  const fetchItem = async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s${params.check}`
    );
    set_item(data.data);
  };

  let filterItems;

  if (item.drinks) {
    filterItems = item.drinks.map((drink) => {
      return (
        <div key={drink.idDrink} className="checked-drinks">
          {drink.strDrink}
          <img alt="bars" src={drink.strDrinkThumb}></img>
        </div>
      );
    });
  } else {
    filterItems = "loading...";
  }

  return (
    <div>
      <h1>List Check</h1>
      {filterItems}
    </div>
  );
}
