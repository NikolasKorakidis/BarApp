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
    console.log(data);
    setitem(data.data);
  };

  console.log(item);

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

  return (
    <div>
      <h1>drink</h1>
      {result}
    </div>
  );

  //   const params = useParams();
  //   const [item, set_item] = useState([]);
  //   useEffect(() => {
  //     fetchItem();
  //   });
  //   const fetchItem = async () => {
  //     const data = await axios.get(
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s${params.drink}`
  //     );
  //     set_item(data.data);
  //   };
  //   let filterItems;
  //   if (item.drinks) {
  //     console.log(item);
  //     filterItems = item.drinks.map((drink) => {
  //       return (
  //         <div key={drink.idDrink} className="checked-drinks">
  //           {drink.strDrink}
  //           <img alt="bars" src={drink.strDrinkThumb}></img>
  //         </div>
  //       );
  //     });
  //   } else {
  //     filterItems = "loading...";
  //   }
  //   return (
  //     <div>
  //       <h1>List Check</h1>
  //       {filterItems}
  //     </div>
  //   );
}
