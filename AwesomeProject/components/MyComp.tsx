import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { decrement, increment } from '../redux/slices/counter';

const MyComp = () => {
  const count = useSelector((state:RootState)=> state.counter);
  console.log(`Value of Count ${count}`);
  const dispatch = useDispatch();
  return (
    <View >
    <Text>Count is {count}</Text>
    <View style={styles.buttonContainer}>

      <Button title="Increment" onPress={() => {
        console.log("Value Incremented");
        dispatch(increment());
      }}  />

      <Button title="Decrement" onPress={() => {
        dispatch(decrement());
      }}  />
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginBottom: 5, 
    padding : 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    margin: 6,
    padding: 5,
  },
})
export default MyComp;