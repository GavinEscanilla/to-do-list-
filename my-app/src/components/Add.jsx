import React from "react";
import Todo from "./todo";
const Add = ({onshow, onAdd, showinput}) => {
    return (
        <div className="App flex  bg-gray-200 h-10 w-12 flex-col justify-center items-center">
            {!showinput &&(
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onshow 
            }>
                Add
            </button>
            )}
            {showinput && <Todo onAdd={onAdd} />}
        </div>
    );
};

export default Add;