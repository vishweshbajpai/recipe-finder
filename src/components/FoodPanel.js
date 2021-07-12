import React, { Component } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./FoodPanel.css";

class FoodPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeClicked: false,
      likeButtonClass: "like-icon",
    };
    this.likeCLickHandler = this.likeCLickHandler.bind(this);
  }

  likeCLickHandler() {
    if (this.state.likeClicked === false) {
      this.setState({ likeClicked: true, likeButtonClass: "like-icon red" });
    } else {
      this.setState({ likeClicked: false, likeButtonClass: "like-icon" });
    }
  }

  render() {
    console.log("Inside COmponent", this.props.mealsObj.strArea);
    return (
      <div className="outer-container">
        <div className="recipe-title">
          <p>{this.props.mealsObj.strMeal}</p>
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
                  Category of Meal -{" "}
                </span>
                {this.props.mealsObj.strCategory}
              </p>
              <p>
                <span className="categoryOfMeal-headings">Area of Meal - </span>
                {this.props.mealsObj.strArea}
              </p>
            </div>
            <p className="ingredients-title">Ingredients</p>
            <div className="ingredients-content"></div>
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
