import React, {useRef} from 'react'
import { View, Text, StyleSheet} from 'react-native'

import promptsJSON from '../prompts.json'



const Header = props => {

   // const[randNum, setRandNum] = useState(null)
    const randNum = useRef(null)

    let prompt = "prompts" + props.currentJournal.toString()
    let todaysPrompt = promptsJSON.[prompt][0]

    //here we store the possible journal prompts to show the user 
    //TODO: change to JSON and import 
  /*  const prompts = [
        "What do I love about my life?",
        "What do I feel like my life is missing and how can I get more of what I need?",
        "Where do I want to be in 5 years?",
        "Who are the people in my life that make me the happiest?",
        "heres just a reall long prompt that I need too be so long like so long like so so so so so long just to see if it will all fit when I print it "
    ]
*/
    //generate a random number to pick a random prompt 
    // randNum.current = Math.floor(Math.random() * (prompts.length)) 

    return(
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}> Todays Journal prompt: </Text>
            <Text 
                style = {styles.prompt} 
                adjustsFontSizeToFit ={true} 
                numberOfLines ={3}>
                {todaysPrompt}</Text>
        </View> 
    )
};
const styles = StyleSheet.create({

    header: {
        width : '100%',
        height: 90,
        paddingTop: 10,
        alignItems: 'flex-start',
        borderColor: 'black',
      // backgroundColor: 'green',
        
    },
    headerTitle: {
        color: '#3F3D3D',
        fontSize : 17,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
       // borderWidth: 1
    },
    prompt :{
        color: '#4F2929',
        fontSize: 20,
        fontFamily: 'Chalkduster',
        borderColor: 'black',
      //  borderWidth: 1,
    }
});

export default Header;
