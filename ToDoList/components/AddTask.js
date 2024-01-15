import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";


const AddTask = (props) => {

    const {updateTodo} = props

    const [task, updateTask] = useState("")
    return (
        <View style={styles.addTodoForm}>
            <Text>Add Tasks</Text>
            <TextInput  placeholder="Add Task" style={styles.input} value={task} onChangeText={(text) => updateTask(text)}/>
            <Button title="Submit" onPress={() => {updateTodo(task); updateTask("")}} />
        </View>
    );
}

export default AddTask;

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});
