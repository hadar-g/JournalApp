import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Header from '../components/Header'

Journaling = props => {

    const[text, setText] = useState()

    let spaces = /^\s*$/

    const buttonPressHandler=() => {
        if(text && !spaces.test(text)){
        props.journalText( text )
        props.journalEntered( true )
        }
    }
    const textChangeHandler = (enteredText) => {
        setText(enteredText)
    }
    console.log(text)
    return(
<TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}} >
    <View style = {styles.journal}>
        <Header currentJournal = {props.currentJournal}/>
            <TextInput 
            placeholder="Just Journal Your Thoughts Here..." 
            style = {styles.textInputStyle}
            multiline = {true}
            numberOfLines = {3}
            textAlignVertical = 'top'
            onChangeText={textChangeHandler}
            />
            <View style = {styles.button}>
                <Button  title="All Done!" onPress={buttonPressHandler} />
            </View>
    </View>
    </TouchableWithoutFeedback>
    
   
//TODO not randomize journal prompt on press
    )
    }

const styles = StyleSheet.create({
    journal :{
       // flex:1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        marginTop: '10%',
   //     backgroundColor :'blue'
    },
    textInputStyle : {
        marginTop: '5%',
        marginLeft: '2%',
        marginRight:'2%',
        borderColor: 'black',
        borderWidth: 4,
     //   borderBottomWidth: 1, 
        padding: 10, 
        width: '96%',
        height: '68%',
        fontSize: 17,
        borderRadius: 7,
     //   backgroundColor: 'red'
    } ,
    button : {
       marginLeft: '70%'
    },
    
})

export default Journaling