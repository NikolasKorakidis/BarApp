import React, { useState } from "react";
import "../App.css";
import axios from "axios";

export default function SearchCocktail() {
  const [searchCocktail, set_searchCocktail] = useState("");
  const [settingStatus, set_settingStatus] = useState({ status: "idle" });

  const search = async () => {
    try {
      const queryParams = encodeURIComponent(searchCocktail);
      set_settingStatus({ status: "searching" });
      const data = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParams}`
      );
      set_settingStatus({ status: "Done!", data: data.data.drinks });
    } catch (error) {
      console.log(error);
    }
  };

  let result;
  if (settingStatus.status === "searching") {
    result = "Loading...";
  } else if (settingStatus.status === "Done!") {
    if (!settingStatus.data) {
      result = "No Cocktail with that name...";
    }
    result = settingStatus.data.map((drink) => (
      <div key={drink.idDrink}>
        <h2>{drink.strDrink}</h2>
        <img alt="bars" className="imageResult" src={drink.strDrinkThumb}></img>
        <p>{drink.strInstructions}</p>
      </div>
    ));
  }

  return (
    <div>
      <h1>Ask our Shaker for your Cocktail</h1>
      <img
        alt="bars"
        className="image"
        src="https://images.ctfassets.net/3s5io6mnxfqz/7shyQ3PAoNJCfiSCZTF4Ui/58d3cfce61ccdbb80cc001338f77194d/AdobeStock_280380799.jpeg"
      ></img>
      <p>
        <input
          value={searchCocktail}
          onChange={(e) => set_searchCocktail(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {result}
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "../App.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Search() {
//   const [inputValue, setinputValue] = useState("");
//   const [settingStatus, set_settingStatus] = useState({ status: "idle" });

//   const input = (event) => {
//     event.preventDefault();
//     setinputValue(event.target.value);
//   };

//   const click = async () => {
//     const encodedValue = encodeURIComponent(inputValue);
//     set_settingStatus({ status: "searching" });
//     const data = await axios.get(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedValue}`
//     );
//     set_settingStatus({ status: "done", data: data });
//     console.log(data);
//     set_settingStatus(data);
//   };

//   return (
//     <div className="Search">
//       <form onSubmit={click}>
//         <label for="inputValue">Search</label>
//         <input
//           type="text"
//           id="inputValue"
//           name="inputValue"
//           onChange={input}
//         ></input>
//         <button type="submit">Enter</button>
//       </form>
//     </div>
//   );
// }

// export default Search;
