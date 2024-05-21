import { Provider} from 'react-redux';
import {store} from './redux/store';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BudgetScreen from './components/Budget/BudgetScreen';
import BudgetEntryScreen from './components/Budget/BudgetEntryScreen';
import AddNewCategory from './components/Budget/BudgetEntryScreen/AddCategory';
import CategoryDetails from './components/Budget/BudgetScreen/CategoryDetails';
import AddExpense from './components/Budget/BudgetScreen/AddExpense';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
let persistor = persistStore(store);

const App = ()=> {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name ='Budget' options={{headerShown:false}} component={BudgetScreen}/>
            <Stack.Screen name='Budget Entry' component={BudgetEntryScreen}/>
            <Stack.Screen name ='Add Category' component = {AddNewCategory}/>
            <Stack.Screen name ='Category Details' component={CategoryDetails}/>
            <Stack.Screen name='Add Expense' component={AddExpense}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
// export default ReduxApp;
export default App;