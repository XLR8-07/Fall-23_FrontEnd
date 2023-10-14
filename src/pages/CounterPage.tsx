import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterPage = () =>{
    const [counter, setCounter] = useState(0); //REACT HOOK!!
    
    const increaseHandler = () =>{
        setCounter(counter + 1)
        console.log("Current Value: ", counter)
    }

    const decreaseHandler = () =>{
        setCounter(counter - 1)
        console.log("Current Value: ", counter)
    }
    return (
        <View style={style.mainContainer}>
            <Text style={style.counterContainer}>{counter}</Text>
            <View style={style.buttonContainer}>
                <Button title="Increase" onPress={increaseHandler}></Button>
                <Button title="Decrease" onPress={decreaseHandler}></Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterContainer:{
        fontSize: 80,
        fontWeight: "700",
        color: "red"
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        margin: 10
    }
})
export default CounterPage;