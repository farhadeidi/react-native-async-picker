import React, { useState } from 'react';
import AsyncPicker, { helpers } from 'react-native-async-picker';

const fruits = [
  'apple',
  'cherry',
  'cloudberry',
  'coconut',
  'tomato',
  'ugli fruit',
  'watermelon',
];

const PickSomeFruits = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <AsyncPicker
      label="Pick some fruits"
      value={selectedItems}
      onChange={setSelectedItems}
      data={fruits as string[]}
      limit={3}
      keyExtractor={(item) => item}
      isSearchable={false}
      labelExtractor={(item) => helpers.capitalizeFirstLetter(item)}
    />
  );
};

export default PickSomeFruits;
