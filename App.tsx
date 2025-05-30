import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateSnippet from './src/screens/createSnippet';
import Feed from './src/screens/feed/Feed';
import useStoreSetup from './src/customHooks/useStoreSetup';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const {ready} = useStoreSetup();
  if (ready) {
    return (
      <SafeAreaProvider style={styles.main}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="CreateSnippet" component={CreateSnippet} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {flex: 1},
  loadingView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
