import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal ,Image} from "react-native";

function GoalInput({ addGoalFunc, addGoal, closeGoalModal }) {
  const [goalInputValue, setGoalInput] = useState("");

  function goalInputHandler(enteredText) {
    setGoalInput(enteredText);
  }

  function addGoalHandler() {
    if (goalInputValue === "") {
      return;
    }
    addGoalFunc(goalInputValue);
    setGoalInput("");
    closeGoalModal()
  }

  return (
    <Modal visible={addGoal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')}/>
        <TextInput
          placeholder="your course gaols"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalInputValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}> 
            <Button title="Cancel" onPress={closeGoalModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:"#311b6b",

  },
  image:{
    width: 100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    color:'white',
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color:'#120438',
    borderRadius:6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button:{
    width:100,
    marginHorizontal:8
  },
});
