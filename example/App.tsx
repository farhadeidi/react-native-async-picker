import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Section from './src/components/Section';
import PickSomeFruits from './src/samples/PickSomeFruits';
import PickYourAsyncCountry from './src/samples/PickYourAsyncCountry';
import PickYourCountry from './src/samples/PickYourCountry';
import SimplePicker from './src/samples/SimplePicker';
import Triggers from './src/samples/Triggers';

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
        <Section description="This component uses Async picker">
          <PickYourAsyncCountry />
        </Section>

        <Section label="Simple usage">
          <SimplePicker />
        </Section>

        <Section label="Event Triggers">
          <Triggers />
        </Section>

        <Section description="Single item picker">
          <PickYourCountry />
        </Section>

        <Section description="Multiple item picker">
          <PickSomeFruits />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}
