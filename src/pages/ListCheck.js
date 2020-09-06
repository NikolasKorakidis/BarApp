import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ListCheck() {
  const params = useParams();
  const [item, set_item] = useState([]);
  useEffect(() => {
    fetchItem();
  });

  const fetchItem = async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.check}`
    );
    set_item(data.data);
  };

  let filterItems;

  if (item.drinks) {
    filterItems = item.drinks.map((drink) => {
      return (
        <div key={drink.idDrink} className="checked-drinks">
          <Link to={`/search/${drink.strDrink}`}>{drink.strDrink}</Link>
          <img alt="bars" src={drink.strDrinkThumb}></img>
        </div>
      );
    });
  } else {
    filterItems =
      "Loading... If this is taking too long refresh your page, category might not exist anymore!";
  }

  return (
    <div>
      <h1>List Check</h1>
      {filterItems}
    </div>
  );
}

export default ListCheck;
