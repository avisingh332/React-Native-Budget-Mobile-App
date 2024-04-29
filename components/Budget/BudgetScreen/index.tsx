import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store'
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image, ScrollView, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CircularChart from './CircularChart';
import { AntDesign } from '@expo/vector-icons';
import CategoryList from './CategoryList';

 // Row component for the table
 const TableRow = ( {item, props} ) => (  
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Budget Entry', item)}}>
      <View key={item.id} style={styles.row}>
        <Text style ={{marginVertical:3}}>Title</Text>
        <View style={{ flexDirection:'row', justifyContent: 'space-between', paddingHorizontal:20}}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>{item.expenseName}</Text>
          </View>
          <View style= {{justifyContent:'center', alignItems:'flex-end'}}>
            <View style={{display:'flex', flexDirection:'row'}}>
              <Text> Budget: {item.budget} </Text>
              <Text> Spending: {item.spending} </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

const BudgetScreen = (props) => {
    const budget = useSelector((state:RootState)=>state.budget);
    // const dispatch = useDispatch();
    console.log(budget.categoryList);
    useEffect(()=>{

    }, []);

    return (

        <SafeAreaView style={{backgroundColor:'#2C4E80', height:'100%'}}>
          <ScrollView>
            {/* Header Section  */}
            <View style={styles.c1}>
              <View style={{
                display:'flex', 
                flexDirection:'row',
                gap:8,
              }}>
                <Image
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls3RFQ1C3s-TXEmjOtvdfDeL4Izr5R0puSw&usqp=CAU'}}
                style={{width:50, height:50, borderRadius:30}}
                />
                <View>
                  <Text style={{fontSize:20, color:'#FC4100'}}> Welcome </Text>
                  <Text style={{fontSize:15, color:'#FFC55A'}}> Avinash</Text>
                </View>
                
              </View>

              <Ionicons name="notifications" size={30} color="black" />
            </View>
            {/* Chart Section */}
            <CircularChart/>

            {/* List Section */}
           {/* <View style={styles.c2}>
            <FlatList
            style={{marginBottom:100}}
            data = {budget}
            renderItem={({item})=>{
              return(
                <TableRow item = {item} props = {props}/>
              )
            }}
            keyExtractor={item => item.id}
            />
          </View> */}
          
            <CategoryList categoryList={budget.categoryList} navigation ={props.navigation}/>
          
          {/* Create Button */}
          </ScrollView>
          <TouchableOpacity style={styles.addNewCategoryBtn} onPress={()=>{props.navigation.navigate('Add Category')}}>
            <AntDesign  name="pluscircle" size={42} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    c1:{
      alignItems:'center',
      justifyContent:'space-between',
      display:'flex',
      flexDirection:'row',
      marginHorizontal:18, 
      marginTop:10
    },
    c2:{
      marginTop:20,
      backgroundColor:'yellow', 
      height:'100%',
      padding:20,
      borderRadius:25
    },
    container: {
      padding: 10,
      width: '100%'
    },
    header: {
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: 'black',
    },
    row: {
      // flexDirection: 'row',
      padding:6,
      marginHorizontal:2,
      height: 80,
      borderRadius:25,
      backgroundColor: '#FC4100',
      marginBottom: 7
    },
    cell: {
      flex: 1,
      padding: 10,
      textAlign: 'center',
    },
    input: {
      padding:7,
      borderWidth: 2,
      borderColor:'blue',
      borderRadius:2,
      marginBottom: 4
    },
    test:{
      borderWidth:4,
      borderColor:'black'
    }, 
    addNewCategoryBtn:{
      position:'absolute',  
      bottom:20, 
      right:20
    }
  });
export default BudgetScreen;
