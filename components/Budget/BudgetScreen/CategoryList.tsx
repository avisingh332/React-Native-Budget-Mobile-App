import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

const CategoryList = ({categoryList, navigation}) => {
  return (
    <View>
      <Text style={{marginTop:20, fontSize:24,marginHorizontal:20,fontWeight:'bold'}}>
        Budget Estimate
      </Text>
      <View >
        {
          categoryList.map((category, index)=>{
            return <TouchableOpacity onPress={()=>{navigation.navigate('Category Details', category.id)}}
            style={styles.container}
            key={index}> 
              <View style = {styles.iconContainer}>
                <Text style={{ ...styles.iconText,backgroundColor:category.color}}>
                  {category.iconName} 
                </Text>
              </View>
              <View style={styles.subContainer}> 
                <View>
                  <Text style={styles.categoryText}>{category.name}</Text>
                  <Text style ={styles.itemCountText}>0 items </Text>
                </View>
                <Text style={styles.totalAmountText}> $ {category.totalBudget} </Text>
              </View>
            </TouchableOpacity>
          })
        }
      </View>
      {/* <Text>Category List </Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex', 
    flexDirection:'row', 
    gap:10, 
    marginTop:15,
    marginHorizontal:15,
    backgroundColor:'#EEEEEE', 
    padding:10, 
    borderRadius:15
  },
  subContainer:{
    display:'flex', 
    flexDirection:'row',
    width:'75%',
    alignItems:'center', 
    justifyContent:'space-between',
    
  },
  iconContainer:{
    justifyContent:'center',
    alignItems:'flex-start'
  },
  iconText:{
    padding:18, 
    borderRadius:10,
    fontSize:30
  }, 
  categoryText:{
    fontSize:20
  },
  itemCountText:{
    // fontSize:20,
    // fontWeight:
  },
  totalAmountText:{
    fontWeight:'bold', 
    fontSize:20, 
  }
})

export default CategoryList
