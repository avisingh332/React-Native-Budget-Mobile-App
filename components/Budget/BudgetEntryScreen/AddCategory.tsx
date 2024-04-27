import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import ColorPicker from './ColorPicker'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux';
// import type { RootState } from '../../../redux/store';

import { addCategory } from '../../../redux/slices/budget';

const AddNewCategory = () => {
  // const budget = useSelector((state:RootState)=>state.budget);
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor]= useState('#FC4100');
  const[inputForm, setInputForm] =useState({
    id:uuidv4(),
    iconName:'',
    category:'', 
    totalBudget:''
  });

  const handleChange = (field:string, value:string) =>{
    setInputForm({
      ...inputForm, 
      [field]:value
    })
  }
  function handleSubmit() {
    dispatch(addCategory({...inputForm, color:selectedColor}));
    setInputForm({
      id:uuidv4(),
      iconName:'',
      category:'', 
      totalBudget:''
    })
  }

  return (
    <View style={{marginTop:20, padding:20}}>
      <View style ={{display:'flex', alignItems:'center'}}>
        <TextInput value={inputForm.iconName}
         style={{...styles.iconInput, backgroundColor:selectedColor}} 
         maxLength={2}
         onChangeText={(text)=>{handleChange('iconName',text)}}/>
        <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </View>

      {/* Category Name */}

      <View style={{...styles.inputWrapper,marginTop:25}}>
        <MaterialIcons name="category" size={24} color="black" />
        <TextInput
        placeholder='Category Name'
        style={{fontSize:15, width:'100%'}}
        value={inputForm.category}
        onChangeText={(text)=>{handleChange('category', text)}}
        />
      </View>

      {/* Expense Input */}
      <View style={{...styles.inputWrapper,marginTop:25}}>
      <FontAwesome name="rupee" size={24} color="black" />
        <TextInput
        keyboardType='numeric'
        placeholder='Total Budget'
        style={{fontSize:15, width:'100%'}}
        value={inputForm.totalBudget}
        onChangeText={(text)=>{handleChange('totalBudget', text)}}
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
  iconInput:{
    width:80, 
    borderRadius:99, 
    height:80, 
    padding:20, 
    fontSize:30
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

export default AddNewCategory;
