import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import MyComp from './components/MyComp';
import ListContact from './components/contact/ListContact';

const App = ()=> {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <MyComp/> */}
        <ListContact/>
      </View>
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