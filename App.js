import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import Blurbs from './components/Blurbs'
import Journaling from './screens/Journaling'
import Entries from './screens/Entries'


//var journalTexts = []

export default function App() {

  /*mode is used to control which screen we see
    mode 0 = blurbs
    mode 1 = journal 
    mode 2 = entries 

  TODO: change to enum or so 
  */
  const [mode, setMode] = useState(0)
  const [userText, setUserText] = useState('')
  const [amountOfJournalEntries, setAmountOfJournalEntries] = useState(0)

  //When we hit the last blurb we throw this and increment mode to go to journal
  const blurbViewHandler = (blurbViewOver) => {
    if(blurbViewOver){
      setMode(1)
    }
  }
  //when the "all done" button is hit at the bottom of the journal move to entry
  const journalEntryHandler = (journalEntered) => {
    if(journalEntered){
      setMode(2)
    }
  }
//wrap entry screen back to blurb[0]. Temporary 
  const goBackHomeHandler = (backHome) => {
    if(backHome){
      setMode(0)
    }
  }

  const addJournalText = (journalText) => {
    setUserText(journalText)
    setAmountOfJournalEntries(amountOfJournalEntries + 1)
  }
  
  //switch content based on mode 
 let content 
 switch(mode){
   case 0:
    content =  <Blurbs blurbViewOver = {blurbViewHandler}/>
    break;
  case 1:
    content = <Journaling journalEntered = {journalEntryHandler} journalText = {addJournalText}/>
    break;
  case 2: 
    content = <Entries backHome = {goBackHomeHandler} text = {userText} numEntries = {amountOfJournalEntries}/>
  break;

  default:
    Alert.alert("great, you broke it.")
 }
    return (
      //print content
      <View >
        {content}
      </View>
  );

}

const styles = StyleSheet.create({
  
});
