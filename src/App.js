import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FoodPanel from "./components/FoodPanel";
// import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealsObj: [],
    };
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  searchClickHandler() {
    var val = document.getElementById("search-input").value;
    if (val !== "") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + val)
        .then((res) => {
          if (res.data.meals === null) {
            document.getElementsByClassName("sub-heading")[0].innerHTML =
              "No Data has been recieved.";
            this.setState({ mealsObj: [] });
            // document.getElementById("outer-container").innerHTML = "";
          } else {
            document.getElementsByClassName("sub-heading")[0].innerHTML = "";
            this.setState({ mealsObj: res.data.meals });
            console.log(res.data);
            console.log(res.data.meals);
            // this.temp();
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      document.getElementsByClassName("sub-heading")[0].style.display = "block";
    }
  }

  // temp() {
  //   document.getElementById("cards").innerHTML = this.state.mealsObj.map(
  //     (obj) => {
  //       return <FoodPanel mealsObj={obj} />;
  //     }
  //   );
  // }

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
            {/* <Button
              variant="contained"
              className="search-button"
              onClick={this.searchClickHandler}
            >
              Get Recipes
            </Button> */}
          </div>
        </header>

        <h3 className="sub-heading">
          Type a Dish Name to Search for it's ingredients
        </h3>
        {/* <div id="cards"></div> */}

        {this.state.mealsObj.map((obj) => {
          return <FoodPanel mealsObj={obj} />;
        })}
      </div>
    );
  }
}
export default App;
