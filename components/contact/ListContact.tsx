import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import {addContact, removeContact, updateContact} from '../../redux/slices/contacts/index';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid"




// Header component for the table
const TableHeader = () => (
    <View style={styles.header}>
      <Text style={[styles.cell, {fontWeight:'bold'}]}>Name</Text>
      <Text style={[styles.cell, {fontWeight:'bold'}]}>Phone Number</Text>
      <Text style={[styles.cell, {fontWeight:'bold'}]}>Email</Text>
    </View>
  );
  
  // Row component for the table
  const TableRow = ({ item }) => (
    <View key={item.id} style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.phoneNumber}</Text>
      <Text style={styles.cell}>{item.email}</Text>
    </View>
  );


const ListContact = () => {
  const [initialized, setInitialized] = useState(false);
  const [display, setDisplay]= useState(false);
  const contact = useSelector((state:RootState)=> state.contact);
  const dispatch = useDispatch();

  useEffect(()=>{
    
    // console.log("############### Use Effect is Running ######################");
    if(!initialized){
      setInitialized(true);
    }

  },[])

  // dispatch(addContact(contactList[1]));
  
  const [contactForm, setContactForm] = useState({
    id:uuidv4(), 
    name: '', 
    phoneNumber:'',
    email: ''
  });
  const handleChange = (field:string, value) =>{
    setContactForm({
      ...contactForm, 
      [field]:value
    })
  }


  return (
    <View style={styles.container}>
    <TableHeader />
    {
      contact.map((item)=>{
        return <TableRow item={item} />
      })
    }
    <View>
        <Button title='Add-New Contact' onPress={()=>setDisplay(!display)}/>
    </View>
    <View>
      {
        display ? 
        <View style={{marginTop:20}}>
          <TextInput
          style = {styles.input}
          placeholder = 'Name'
          value={contactForm.name}
          onChangeText={(text)=>handleChange('name',text)}
          />
          <TextInput
          style = {styles.input}
          placeholder = 'Phone Number'
          value={contactForm.phoneNumber}
          onChangeText={(text)=>handleChange('phoneNumber',text)}
          />
          <TextInput
          style = {styles.input}
          placeholder = 'Email'
          value={contactForm.email}
          onChangeText={(text)=>handleChange('email',text)}
          />
          <Button
          title='Add Contact'
          onPress={()=>{
            dispatch(addContact(contactForm))
            setContactForm({
              id:uuidv4(), 
              name: '', 
              phoneNumber:'',
              email: ''
            })
          }}
          />
        </View>
        :null
      }
    </View>

  </View>
  )
};

const styles = StyleSheet.create({
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
      flexDirection: 'row',
      borderBottomWidth: 4,
      borderBottomColor: 'gray',
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
    }
  });
  
export default ListContact;
