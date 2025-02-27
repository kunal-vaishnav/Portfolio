import FoodOrderImage from "./assets/FoodOrder.png";
import TicTacToeImage from "./assets/TicTacToe.png";
import ExpenseManagerImage from "./assets/ExpenseManager.png";
const Projects = () => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-16 py-10 w-full">
    <h1 className="text-5xl font-bold mb-12 text-center w-full">PROJECTS</h1>

    <div className="space-y-16 w-full max-w-[1600px]">
      {/* Food Order App */}
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold">Food Order App</h2>
          <p className="text-lg">
            Developed a full-stack food ordering application. Implemented the
            Meals API to fetch available items and Order API to process orders.
            Used React for the frontend and Node.js for the backend.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={FoodOrderImage}
            alt="Food Order App"
            className="rounded-lg shadow-lg w-full max-w-[700px]"
          />
        </div>
      </div>

      {/* Tic-Tac-Toe */}
      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold">Tic-Tac-Toe</h2>
          <p className="text-lg">
            Handles game logic for all win conditions, including real-time
            updates for player turns and game status. Features game-over
            notifications and activity logs.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={TicTacToeImage}
            alt="Tic-Tac-Toe"
            className="rounded-lg shadow-lg w-full max-w-[700px]"
          />
        </div>
      </div>

      {/* Expense Manager */}
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold">Expense Manager</h2>
          <p className="text-lg">
            A web app designed to track and manage daily expenses. Allows users
            to categorize expenses, view summaries, and gain financial insights.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ExpenseManagerImage}
            alt="Expense Manager"
            className="rounded-lg shadow-lg w-full max-w-[700px]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
