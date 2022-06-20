import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import PickSomeFruits from './src/samples/PickSomeFruits';
import PickYourAsyncCountry from './src/samples/PickYourAsyncCountry';
import PickYourAsyncCountryWithDelay from './src/samples/PickYourAsyncCountryWithDelay';
import PickYourCountry from './src/samples/PickYourCountry';
import SimplePicker from './src/samples/SimplePicker';

export default function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000000' : '#ffffff',
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ padding: 16 }}>
          <View style={{ marginBottom: 16 }}>
            <SimplePicker />
          </View>
          <View style={{ marginBottom: 16 }}>
            <PickYourAsyncCountry />
          </View>
          <View style={{ marginBottom: 16 }}>
            <PickYourAsyncCountryWithDelay />
          </View>
          <View style={{ marginBottom: 16 }}>
            <PickYourCountry />
          </View>
          <View style={{ marginBottom: 16 }}>
            <PickSomeFruits />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
