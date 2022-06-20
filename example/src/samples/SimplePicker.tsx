import React, { useState } from 'react';
import AsyncPicker from 'react-native-async-picker';

const countries = [
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Germany', code: 'DE' },
];

const SimplePicker = () => {
  const [selectedItems, setSelectedItems] = useState<
    { name: string; code: string }[]
  >([]);

  return (
    <AsyncPicker
      data={countries}
      value={selectedItems}
      onChange={setSelectedItems}
      keyExtractor={(item) => item.code}
      labelExtractor={(item) => item.name}
    />
  );
};

export default SimplePicker;
