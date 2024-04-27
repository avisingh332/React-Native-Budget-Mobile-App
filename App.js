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

const Stack = createNativeStackNavigator();

const App = ()=> {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ='Budget' component={BudgetScreen}/>
          <Stack.Screen name='Budget Entry' component={BudgetEntryScreen}/>
          <Stack.Screen name='Counter' component={MyComp}/>
          <Stack.Screen name='Home' component={ListContact}/>
          <Stack.Screen name='Test' component={TestComp}/>
          <Stack.Screen name ='Add Category' component = {AddNewCategory}/>
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