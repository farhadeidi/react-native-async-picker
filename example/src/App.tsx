import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Section from './components/Section';
import PickSomeFruits from './samples/PickSomeFruits';
import PickYourAsyncCountry from './samples/PickYourAsyncCountry';
import PickYourCountry from './samples/PickYourCountry';
import SimplePicker from './samples/SimplePicker';
import Triggers from './samples/Triggers';

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
