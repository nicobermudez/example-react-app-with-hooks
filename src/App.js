import React, { useCallback, useState } from 'react';

export const useUpdateTodos = todo => {

  const [ value, setValue ] = useState(todo);

  return {
    value,
    setValue,
    add: useCallback(a => setValue(v => [...v, a])),
    clear: useCallback(() => setValue(() => [])),
  };
};

function App() {

	const [currentValue, setCurrentValue] = useState("")

	const todos = useUpdateTodos([
		"Write blog post",
		"Study Aglorithms",
		"Apply to dream job"
	]);

	return (
		<div>

			<h3>Todos:</h3>

			<form>
				<input
					type="text"
					className="input"
					value= {currentValue}
					onChange={event => setCurrentValue(event.target.value)}
				/>
			</form>

			<button onClick={() => todos.add(currentValue)}>Add</button>

			<div className="todo-list">
				{todos.value.map((todo, i) => (
					<li key={i}>
						{todo}
					</li>
				))}
			</div>
			<button onClick={todos.clear}>Clear Todos</button>
		</div>
	)
};

export default App;
