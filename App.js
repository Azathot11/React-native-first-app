import {useState} from 'react'
import { StyleSheet,View,Button,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
 

  const [goals,setGoals] = useState([]);
  const [addGoal,setAddGoal] = useState(false);

  const  callGoalModal = () => {
    setAddGoal(true);
  }
  const closeGoalModal = () => {
    setAddGoal(false);
  }
 
  function addGoalHandler(goalInputValue){
    if(goalInputValue === ''){
      return
    }
    setGoals((goals)=>{
      return [...goals,goalInputValue]
    })
  }

  const removeGoalsHandler=(index)=>{
    const newGoals = goals.filter((goal,i)=> i !== index);
    setGoals(newGoals)
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={callGoalModal} />
        <GoalInput
          addGoalFunc={addGoalHandler}
          addGoal={addGoal}
          closeGoalModal={closeGoalModal}
        />
        <GoalItem goals={goals} removeGoalsHandler={removeGoalsHandler} />
      </View>
    </>
  );
}



const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  paddingTop:50,
  paddingHorizontal:16,
  backgroundColor: "#1e085a",
 },
 
});
