import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import AddTask from "./AddTask";
const ToDoList = () => {

    const [todos, updateTodo] = useState([])

    const removeTodo = (id) => {
        const filter = todos.filter((todo) => todo.id !== id)
        updateTodo(filter)
    }

    const addTodo = (title) => {
        if (title == "") {
            return
        }

        const todo = { id: uuidv4(), title: title }
        updateTodo([...todos, todo])

    }

    return (
        <View style={styles.todoListContainer}>
            <Text>Todo</Text>
            {todos.map((todo, index) => <View style={styles.todoItem} key={index}>
                <Text style={styles.todoItem} id={todo.id}> {todo.title} </Text>
                <Button title="Remove" onPress={() => removeTodo(todo.id)} />
            </View>)}

            <AddTask updateTodo={(title) => { addTodo(title) }} />

        </View>);
}

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});
export default ToDoList;