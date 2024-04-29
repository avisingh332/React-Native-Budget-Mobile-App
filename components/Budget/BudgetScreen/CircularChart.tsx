import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import PieChart from 'react-native-pie-chart'
const CircularChart = () => {
    const widthAndHeight = 150
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

  return (
    <View>
        <View style={styles.container} >
            <Text style={{fontSize:20, marginBottom:5}}>Total Estimate: <Text style={{fontWeight:'bold'}}>0$</Text></Text>
            <PieChart
             widthAndHeight={widthAndHeight}
             series={series}
             sliceColor={sliceColor}
             coverRadius={0.65}
             coverFill={'#FFF'}
             >
            </PieChart>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    padding:20, 
    marginTop:10, 
    elevation:1, 
    backgroundColor:'white', 
    borderRadius:15,
    marginHorizontal:15
  }
})

export default CircularChart
