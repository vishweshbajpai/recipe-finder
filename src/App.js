import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FoodPanel from "./components/FoodPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealsObj: [], //Stores the response data
    };
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  //Function to handler AJAX call when 'Get Recipes' button is clicked
  searchClickHandler() {
    var val = document.getElementById("search-input").value;
    if (val !== "") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + val)
        .then((res) => {
          if (res.data.meals === null) {
            document.getElementsByClassName("sub-heading")[0].innerHTML =
              "No Data has been received.";
            this.setState({ mealsObj: [] });
          } else {
            document.getElementsByClassName("sub-heading")[0].innerHTML = "";
            this.setState({ mealsObj: res.data.meals });
            console.log(res.data.meals);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      document.getElementsByClassName("sub-heading")[0].style.display = "block";
    }
  }

  render() {
    console.log("Render called");
    return (
      <div className="background">
        <header>
          <h2>Recipe Finder</h2>
          <div>
            <input
              id="search-input"
              type="text"
              className="search"
              placeholder="Enter the Name of the Dish"
            ></input>
            <button className="search-button" onClick={this.searchClickHandler}>
              Get Recipes
            </button>
          </div>
        </header>

        <h3 className="sub-heading">
          Type a Dish Name to Search for it's ingredients
        </h3>
        {this.state.mealsObj.map((obj) => {
          return <FoodPanel key={obj.idMeal} mealsObj={obj} />;
        })}
      </div>
    );
  }
}
export default App;
