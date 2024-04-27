import React, { useEffect, useState } from 'react'
import { View , StyleSheet, Text, TouchableOpacity, TextInput, useAnimatedValue, Button} from 'react-native'
import type { RootState } from '../../../redux/store';
import {  updateBudgetEntry } from '../../../redux/slices/budget';
import { useDispatch, useSelector } from 'react-redux';


const BudgetEntryScreen = (props) => {
    const [initialized, setInitialized] = useState(false);
    const [expense, setExpense] = useState({
        budget:'',
        spending:'', 
        expenseName:'',
        id:''
    });
    const budget = useSelector((state:RootState)=>state.budget);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!initialized){
            setExpense(props.route.params)
            setInitialized(true);
        }
    }, []);

    const handleChange = (field:string, value) =>{
        setExpense({
          ...expense, 
          [field]:value
        })
      }
    const saveBudget = ()=>{
        dispatch(updateBudgetEntry(expense));
    }
  return (
    <View style= {styles.container}>
        <Text style={{marginTop:150, fontSize:27, color:'#121481', padding:10}}> Update Expense</Text>
         {/* to select the category  */}
        {/* <TouchableOpacity style={styles.dropDownSelector}>
        </TouchableOpacity> */}


        <View>
            <Text style ={styles.title}>Budget</Text>
            <TextInput 
            style={styles.input}
            placeholder='Budget'
            value={expense.budget}
            onChangeText={(text)=>handleChange('budget',text)}
        />
        </View>
        <View>
            <Text style={styles.title}>Spending</Text>
            <TextInput 
                style={styles.input}
                placeholder='Spending'
                value={expense.spending}
                onChangeText={(text)=>handleChange('spending',text)}
            />
        </View>
        
        <Button title='Save' onPress={()=>{saveBudget()}} />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
    },
    title: { 
        fontSize: 16, 
        marginBottom:-2, 
        marginStart:5,
        fontWeight: "bold", 
        color: "green", 
    }, 
    input: { 
        width: 250, 
        height: 50, 
        borderWidth: 2, 
        borderColor: "#3498db", 
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        fontSize: 18, 
        color: "#333", 
        backgroundColor: "#fff",
        marginBottom:10
    }, 
})
export default BudgetEntryScreen
