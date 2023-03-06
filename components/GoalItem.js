import { StyleSheet,View, Text,FlatList ,Pressable} from 'react-native';

function GoalItem ({goals,removeGoalsHandler}){
  return (
    <View style={styles.goalsContainer}>
      <FlatList data={goals} renderItem={(itemData)=>{
       
        return (
            <View style={styles.goalListItem}>
            <Pressable
              android_ripple={{ color: "#dddddd" }}
             onPress={removeGoalsHandler.bind(this, itemData.index)}
              style={({pressed})=> pressed && styles.pressedItem}
           >
              <Text style={styles.goalText}>{itemData.item}</Text>
            </Pressable>
          </View>
        )
      }}  alwaysBounceVertical keyExtractor={(item,index)=> index} />
       
      </View>
  )
}


const styles = StyleSheet.create({
    goalsContainer: {
      flex: 5,
    },
    goalListItem: {
      width: "100%",
      marginTop: 8,
      backgroundColor: "#311b6b",
      borderRadius: 6,
    },
    pressedItem:{
      opacity:0.5
    },
    goalText: {
      color: "white",
      padding: 8,
    },
  });

export default GoalItem