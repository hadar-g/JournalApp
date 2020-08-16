import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal} from 'react-native'

var journalTexts = []


const Entries = props => {

    const [visibility, setVisibility] = useState(false)

    let index = props.numEntries
    journalTexts.push({key : props.text})

    const showEntryHandler = (key) => {
        console.log(key)
        setVisibility(true)
    }


return(
<View>
    <Text style = {styles.entries}>your latest journal: {props.text}</Text>
    <FlatList 
        keyExtractor = {(item) => item.key}
        data = {journalTexts}
        renderItem = { ( {item} )=> ( 
            <TouchableOpacity /*onPressOut = {showEntryHandler(item.key)} */>
                 <Text style = {styles.listEntryStyle}>
                     {item.key}
                </Text>
            </TouchableOpacity>)
        }
    />

    <Button title ="go back home" onPress={() => props.backHome(true)}/>
</View>
)
}

/* 

TODO: make a modal screen when entry is clicked to show prompt and entry 

    <Modal visible = {visibility} animationType="slide"> 
    <View style = {styles.container}>
    <Button title="close entry" onPress={() => {setVisibility(false)}}/>
    </View>
    </Modal>
*/

const styles = StyleSheet.create({
entries:{
    marginTop: '10%',
    marginLeft: '10%'
},
listEntryStyle:{
    borderColor: 'black',
    marginLeft: '5%',
    marginRight: '5%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
},
listStyle:{
    flex: 1,
    flexDirection: 'row',
    margin: 1
},
container:{
    flex: 1
}
})

export default Entries