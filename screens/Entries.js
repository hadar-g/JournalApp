import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'

var journalTexts = []


const Entries = props => {

    let index = props.numEntries
    journalTexts.push({key : props.text})


return(
<View>
    <Text style = {styles.entries}>your latest journal: {props.text}</Text>
    <FlatList 
        keyExtractor = {(item) => item.key}
        data = {journalTexts}
        renderItem = { ( {item} )=> ( 
                 <Text style = {styles.listEntryStyle}>
                     {item.key}...
                </Text>)
        }
    />
    <Button title ="go back home" onPress={() => props.backHome(true)}/>
</View>
)
}

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
}

})

export default Entries