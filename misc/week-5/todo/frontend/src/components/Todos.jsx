export function Todos({todos}) {

    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => {
                        setCompleted(true);
                    }}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>    
                </div>
            })
        }
    </div>
}