import { FontAwesome } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, useAnimatedValue, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../../redux/slices/budget'
import {v4 as uuidv4} from 'uuid';
const AddExpense = (props) => {
  const categoryId= props.route.params;
  const dispatch  = useDispatch();
  const [inputForm, setInputForm] = useState({
    title:'', 
    amount:'', 
    note: ''
  })
  const handleChange = (field:string, value:string) =>{
    setInputForm({
      ...inputForm, 
      [field]:value
    })
  }
  const handleSubmit = () =>{
    const expense = {
      id: uuidv4(),
      categoryId: categoryId,
      title:inputForm.title, 
      amount:parseInt(inputForm.amount,10), 
      note: inputForm.note
    }
    console.log(expense);
    if(expense.title==''|| isNaN(expense.amount)|| expense.note==''){
      Alert.alert("Please Provide Correct Value to all Input Fileds");
      return;
    }
    dispatch(addExpense(expense));
    
    setInputForm({
      title:'', 
      amount:'', 
      note: ''
    })
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>Expense</Text> */}
       
       {/* Expense Title */}
      <View style={{...styles.inputWrapper,marginTop:25,alignItems:'center'}}>
        <MaterialIcons name="category" size={24} color="black" />
        <TextInput
        placeholder='Title'
        style={{fontSize:15, width:'100%', marginStart:5}}
        value={inputForm.title}
        onChangeText={(text)=>{handleChange('title', text)}}
        />
      </View>

      {/* Expense Amount */}
      <View style={{...styles.inputWrapper,marginTop:25,alignItems:'center'}}>
      <FontAwesome name="rupee" size={24} color="black" />
        <TextInput
        keyboardType='numeric'
        placeholder='Amount'
        style={{fontSize:15, width:'100%', marginStart:10}}
        value={inputForm.amount}
        onChangeText={(text)=>{handleChange('amount', text)}}
        />
      </View>

      {/* Expense Note */}
      <View style={{...styles.inputWrapper,marginTop:25, alignItems:'center'}}>
      <FontAwesome name="pencil" size={24} color="black" />
        <TextInput
        placeholder='Note'
        numberOfLines={3}
        style={{fontSize:15, width:'100%', marginStart:10}}
        value={inputForm.note}
        onChangeText={(text)=>{handleChange('note', text)}}
        />
      </View>
       {/* Submit Button */}
       <TouchableOpacity style={{...styles.button, marginTop:25}} onPress={()=>{handleSubmit()} }>
        <Text style={{color:'white', fontSize:16, textAlign:'center'}}>Create</Text>
      </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
  titleText:{
    fontSize:24,
    textAlign:'center'
  },
  container:{
    marginTop:20,
    padding:20
  },
  inputWrapper:{
    display:'flex', 
    flexDirection:'row',
    gap:8,
    backgroundColor:'#DDDDDD',
    padding:15, 
    borderRadius:10
  }, 
  button:{
    padding:15, 
    backgroundColor:'blue', 
    borderRadius:20, 
  }
})

export default AddExpense
