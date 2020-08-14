import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'


const Blurbs = props => {
    
    //store the value of what array index we're on
    const [arrayIndex, setArrayIndex] = useState(0)

    //blurb array for what we print to screen
    //TODO: change to JSON editable out of project
    const blurbArray = [
        "Hey", 
        "Whats up", 
        "Inspirational shit", 
        "let's get journaling"]

        //when the screen is pressed go to the next blurb in the array
        //if arrayIndex > 2 go to the next view for some reason
        //TODO: not hardcode 
        const onPressHandler = () => {
            if(arrayIndex > 2){
                props.blurbViewOver( true )
                setArrayIndex(0)
            }else{
                setArrayIndex(arrayIndex + 1)
            }
          }

        return(
     <TouchableWithoutFeedback onPress = {onPressHandler} >
          <View style = {styles.container}> 
            <Text style = {styles.text} >{blurbArray[arrayIndex]}</Text>
        </View>
    </TouchableWithoutFeedback>
        )
}
const styles = StyleSheet.create({
    text: {
        marginTop: '85%',
        marginLeft: '23%',
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'grey',
        textShadowColor: 'grey',
        textShadowRadius: 0,
        borderColor: 'black',
      //  borderWidth: 1
    },
    container: {
      //  padding: 10,
        height: '100%',
        width: '100%',
       // marginTop: '50%',
        borderColor: 'black',
      //  borderWidth: 2

    }
})

export default Blurbs