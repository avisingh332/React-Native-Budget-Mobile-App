import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


const ColorPicker = ({selectedColor, setSelectedColor}) => {
const colorList = ["#FC4100", "#FFC55A", "#00215E", "#2C4E80"];
 
  return (
    <View style={{display:'flex', flexDirection:'row', gap:20, marginTop:15}}>
     {
        colorList.map((color, index)=>{
            return (
                <TouchableOpacity
                key={index} 
                style={{
                    height:30,
                    width:30,
                    backgroundColor:color,
                    borderRadius:99, 
                    borderWidth: selectedColor == color? 3:0, 
                    borderColor: selectedColor == color? 'black':'transparent'
                }}
                onPress={()=>{
                    setSelectedColor(color);
                }}> 
                </TouchableOpacity>
                
            )
        })
     }
    </View>
  )
}
const styles = StyleSheet.create({
})

export default ColorPicker
