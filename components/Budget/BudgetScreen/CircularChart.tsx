import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { MaterialIcons } from '@expo/vector-icons';

const CircularChart = () => {
  const widthAndHeight = 150
  const colorList = ["blue", "green", "red", "yellow", "purple","violet"]
  const [series, setSeries] = useState([1]);
  const [sliceColor, setSliceColor] = useState(['gray']);
  const categoryList = useSelector((state: RootState) => state.budget).categoryList;
  const [sortedCategoryList, setSortedCateogoryList]= useState([]);
  const [totalEstimate, setTotalEstimate]  = useState(0);

  function updateCircularChart() {
    let series= [];
    let sliceColor = [];
    let other =0;
    let totalEstimateL= 0;
    let sortedList = [...categoryList];
    sortedList.sort((a, b) => a.totalBudget < b.totalBudget ? 1 : -1);
    sortedList.forEach((item, index) => {
      console.log(item.totalBudget)
      totalEstimateL+=item.totalBudget;
      if(index<=4){
        series.push(item.totalBudget);
        sliceColor.push(colorList[index]);
      }
      else{
        other+=item.totalBudget;
      }
    });

    if(categoryList?.length>=5){
      series.push(other);
      sliceColor.push(colorList[4]);
    }
    setSeries(series);
    setSliceColor(sliceColor);
    setTotalEstimate(totalEstimateL);
    setSortedCateogoryList(sortedList);
  }


  useEffect(() => {
    if(categoryList.length>0){
      updateCircularChart();
    }
  }, [categoryList])


  return (
    <View>
      <View style={styles.container} >
        <Text style={{ fontSize: 20, marginBottom: 5 }}>Total Estimate: <Text style={{ fontWeight: 'bold' }}>{totalEstimate}$</Text></Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.65}
            coverFill={'#FFF'}
          >
          </PieChart>
          <View style={{ flex: 1, justifyContent: 'center',marginStart:10 }}>
            {
            sortedCategoryList.sort((a, b) => a.totalBudget < b.totalBudget ? -1 : 1).map((item,index)=>{
              if(index<=4){
                return(
                  <View key={index} style={{display:'flex', flexDirection:'row', alignItems:'center', }}>
                    <MaterialIcons name="circle" size={24} color={colorList[index]} />
                    <Text>{index==4?"Others":item.name}</Text>
                  </View>
                )
              }
            })
            }
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 15
  }
})

export default CircularChart
