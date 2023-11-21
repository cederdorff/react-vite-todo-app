import { addDoc, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { todosCollection } from "../config/firebase";

export default function Todos() {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(todosCollection, snapshot => {
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(docs);
            setTodos(docs);
        });

        return unsubscribe;
    }, []);

    async function addTodo(event) {
        event.preventDefault();
        console.log(todoText);

        if (todoText) {
            await addDoc(todosCollection, {
                text: todoText
            });
            setTodoText("");
        } else {
            alert("Please enter a todo");
        }
    }

    async function deleteTodo(id) {
        await deleteDoc(doc(todosCollection, id));
    }
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">Todo-App</h1>

                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            value={todoText}
                            onChange={e => setTodoText(e.target.value)}
                        />
                        <div className="btn-container">
                            <button className="btn" onClick={addTodo}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="todo-content">
                    {todos?.map(todo => (
                        <p key={todo.id}>
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>x</button>
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
