import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
  addSegments();
  const inputDirection = getInputDirection();
  const { x: inputedX, y: inputedY } = inputDirection;
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputedX;
  snakeBody[0].y += inputedY;
};

export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
};

export const growSnake = (amount) => {
  console.log("grow snake");
  newSegments += amount;
};

export const isOnSnake = (food) => {
  return snakeBody.some((segment) => {
    return equalPositions(segment, food);
  });
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    console.log("Add segments");
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
};
