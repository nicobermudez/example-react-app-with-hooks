import React, { useState, useEffect } from 'react';

function App() {

	const [todos, setTodos] = useState([{ text: "Write blog post" }]);
	const [value, setValue] = useState("")

  useEffect(() => {
    document.title = `Don’t forget to ${todos[0].text}`
  });

	const handleSubmit = event => {
		event.preventDefault();
		if (!value) return;
		setTodos([...todos, { text: value }]);
		setValue("")
	}

	return (
		<div>

			<h3>Todos:</h3>

			<div className="todo-list">
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
			</div>

			<form onSubmit={handleSubmit}>

				<input
					type="text"
					className="input"
					value={value}
					onChange={event => setValue(event.target.value)}
				/>

      </form>
		</div>
	);
}

export default App;
