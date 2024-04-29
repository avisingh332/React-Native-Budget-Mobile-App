import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Ionicons } from '@expo/vector-icons';
import { removeCategory } from '../../../redux/slices/budget';
import { AntDesign } from '@expo/vector-icons';


const CategoryDetails = (props) => {
    const id= props.route.params;
    const category = useSelector((state:RootState)=>state.budget).categoryList.find(c=>c.id==id);
    const expenseList = useSelector((state:RootState)=>state.budget).expenseList.filter(ex=>ex.categoryId==id);
    const dispatch = useDispatch();
    const handleDelete = () =>{
        console.log("Handling Delete");
        console.log("id is", id);
        dispatch(removeCategory(id));
        props.navigation.navigate('Budget');
    }
    // const expenseList = [
    //     {amount:'200', title:'Tv', note:'Samsung Tv'},
    //     {amount:'500', title:'Washing Machine', note:'Hitachi Washing Machine'},
    //     {amount:'2000', title:'Toaster', note:'Large Size Toaster'},
    //     {amount:'2000', title:'Toaster', note:'Large Size Toaster'},
    //     {amount:'2000', title:'Toaster', note:'Large Size Toaster'},
    //     {amount:'2000', title:'Toaster', note:'Large Size Toaster'},
    //     {amount:'2000', title:'Toaster', note:'Large Size Toaster'}
    // ]
  return (
    <View style={styles.container}>
        {/* header */}
        <View style={{display:'flex', flexDirection:'row'}}>
            {/* icon */}
            <View style={{justifyContent:'flex-start',}}>
                <Text style={{...styles.iconText,backgroundColor:category.color}}>Xy</Text>
            </View>
            
            {/* other */}
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.categoryText}>{category.name}</Text>
                    <Text>{category.itemCount} Items</Text>
                </View>
                <TouchableOpacity onPress={()=>{handleDelete()}}>
                    <Ionicons name="trash-sharp" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:15}}>
          <Text style={{fontSize:18}}>$ {category.budgetSpend}</Text>
          <Text style={{fontSize:18}}>$ {category.totalBudget}</Text>
        </View>
        <View style={{marginTop:10}}>
            {
              expenseList.length!=0?<Text style={{fontSize:20,fontWeight:'bold'}}> Expense Items</Text>
              : <Text style={{fontSize:24, marginTop:10}}> No Expense Items</Text>
            }
            {/* List of Expenses */}
            <ScrollView>
            <View>
                {
                    expenseList.map((expense,index)=>{
                        return(
                            // expenseContainer
                            <View style={styles.expenseContainer} >
                                {/* expenseIconContainer */}
                                <View style={{justifyContent:'flex-start'}} >
                                    <Text style={{...styles.iconText, backgroundColor:'green'}}>Xy</Text>
                                </View>
                                {/* expenseSubContainer */}
                                <View style={styles.expenseSubContainer}>
                                    <View >
                                        <Text style ={{fontSize:19,fontWeight:'bold'}}>{expense.title}</Text>
                                        <Text>{expense.note}</Text>
                                    </View>
                                        <Text style={{fontSize:20,fontWeight:'bold'}}>$ {expense.amount}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            </ScrollView>
        </View>
        {/* Add expense Button */}
        <TouchableOpacity style={styles.addNewCategoryBtn} onPress={()=>{props.navigation.navigate('Add Expense', id)}}>
            <AntDesign  name="pluscircle" size={42} color="black" />
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:15, 
        marginTop:15,
        // backgroundColor:'blue',
        flex:1
    },
  iconText:{
    padding:18, 
    borderRadius:15,
    fontSize:30, 
  },
  budgetText:{
    fontSize:22,
    fontWeight:'bold'
  },
  subContainer:{
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%',
    // backgroundColor:'green',
    paddingLeft:10
  } ,
  categoryText:{
    fontSize:19,
    fontWeight:'bold'
  },
  addNewCategoryBtn:{
    position:'absolute',  
    bottom:20, 
    right:20
  },
  expenseContainer:{
    display:'flex',
    flexDirection:'row',
    marginTop:15,
    backgroundColor:'#DDDDDD',
    borderRadius:15,
    paddingVertical:10,
    paddingHorizontal:12,
  },
  expenseSubContainer:{
    display:'flex', 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    padding:10
  }
})

export default CategoryDetails
