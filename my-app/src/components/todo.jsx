import React, { useState } from "react";

const Todo = ({onAdd}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
    };
    return (
        <div className="App flex bg-gray-200 h-10 w-12 justify-center items-center rounded-lg m-7 flex-col" >
            <input 
            className="bg-gray-200 rounded p-2 -mr-36" 
            type="text" 
            placeholder="Enter a task" value={text} 
            onChange={(e) => setText(e.target.value)} />
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             onClick={handleSubmit}>
                Submit
                </button>
        </div>
    );
}

export default Todo