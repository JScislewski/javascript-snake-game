import { isOnSnake, growSnake } from "./snake.js";

let food = { x: 2, y: 2 };
const GROWTH_RATE = 1;

export const update = () => {
  if (isOnSnake(food)) {
    console.log(`isSnakeOnFood: ${isOnSnake(food)}`);
    growSnake(GROWTH_RATE);
    food = { x: 20, y: 10 };
  }
};

export const draw = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};

const generateRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null) {}
};
