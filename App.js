import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import MyComp from './components/MyComp';
import ListContact from './components/contact/ListContact';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BudgetScreen from './components/Budget/BudgetScreen';
import BudgetEntryScreen from './components/Budget/BudgetEntryScreen';
import TestComp from './components/TestComp';
import AddNewCategory from './components/Budget/BudgetEntryScreen/AddCategory';
import CategoryDetails from './components/Budget/BudgetScreen/CategoryDetails';
import AddExpense from './components/Budget/BudgetScreen/AddExpense';

const Stack = createNativeStackNavigator();

const App = ()=> {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ='Budget' options={{headerShown:false}} component={BudgetScreen}/>
          <Stack.Screen name='Budget Entry' component={BudgetEntryScreen}/>
          <Stack.Screen name='Counter' component={MyComp}/>
          <Stack.Screen name='Home' component={ListContact}/>
          <Stack.Screen name='Test' component={TestComp}/>
          <Stack.Screen name ='Add Category' component = {AddNewCategory}/>
          <Stack.Screen name ='Category Details' component={CategoryDetails}/>
          <Stack.Screen name='Add Expense' component={AddExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default ReduxApp;
export default App;