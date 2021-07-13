import React, { Component } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./FoodPanel.css";

//FoodPanel component
class FoodPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeClicked: false,
      likeButtonClass: "like-icon",
    };
    this.likeCLickHandler = this.likeCLickHandler.bind(this);
  }

  //Function to handle state of like button
  likeCLickHandler() {
    if (this.state.likeClicked === false) {
      this.setState({ likeClicked: true, likeButtonClass: "like-icon red" });
    } else {
      this.setState({ likeClicked: false, likeButtonClass: "like-icon" });
    }
  }

  //Function to render the ingredients from response
  ingredientsDisplayHandler() {
    var arr = [];
    for (let i = 1; i <= 20; i++) {
      let x1 = "strIngredient" + i;
      let x2 = "strMeasure" + i;
      if (
        this.props.mealsObj[x1] !== "" &&
        this.props.mealsObj[x1] !== null &&
        this.props.mealsObj[x2] !== "" &&
        this.props.mealsObj[x2] !== null
      ) {
        let t = this.props.mealsObj[x1] + " ---- " + this.props.mealsObj[x2];
        arr.push(t);
      }
    }
    return arr.map((val, pos) => {
      return <p key={pos}>{val}</p>;
    });
  }

  render() {
    return (
      <div className="outer-container">
        <div className="recipe-title">
          <a
            href={this.props.mealsObj.strSource}
            rel="noreferrer"
            target="_blank"
          >
            <p>{this.props.mealsObj.strMeal}</p>
          </a>
          <span
            className={this.state.likeButtonClass}
            onClick={() => {
              this.likeCLickHandler();
            }}
          >
            <FavoriteBorderIcon />
          </span>
        </div>
        <div className="recipe-content">
          <div className="recipe-img-container">
            <img
              src={this.props.mealsObj.strMealThumb}
              className="recipe-img"
              alt="FoodImage"
            ></img>
          </div>
          <div className="recipe-details-container">
            <div className="categoryOfMeal">
              <p>
                <span className="categoryOfMeal-headings">
                  Category of Meal -
                </span>
                {" " + this.props.mealsObj.strCategory}
              </p>
              <p>
                <span className="categoryOfMeal-headings">Area of Meal -</span>
                {" " + this.props.mealsObj.strArea}
              </p>
            </div>
            <p className="ingredients-title">Ingredients</p>
            <div className="ingredients-content">
              {this.ingredientsDisplayHandler()}
            </div>
            <p className="recipes-title">Recipes</p>
            <div className="recipes-content">
              {this.props.mealsObj.strInstructions}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodPanel;
