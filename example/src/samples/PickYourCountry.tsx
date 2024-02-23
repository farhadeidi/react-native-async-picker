import React, { useEffect, useState } from 'react';
import AsyncPicker, { PickerItem } from 'react-native-async-picker';
import allCountries from '../mocks/countries.json';

type ItemProps = {
  name: string;
  code: string;
};

const PickYourCountry = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    setData(allCountries);
  }, []);

  return (
    <AsyncPicker
      label="Where are you from?"
      value={selectedItems}
      onChange={setSelectedItems}
      data={data}
      limit={1}
      closeOnSelect
      keyExtractor={(e) => e.code}
      labelExtractor={(e) => e.name}
      searchStringExtractor={(el) => `${el.name} - ${el.code}`}
      renderItem={({ item, disabled, isActive, onItemPress }) => (
        <PickerItem
          asRadio
          label={item.name}
          isActive={isActive}
          disabled={disabled}
          onPress={() => {
            onItemPress(item);
          }}
        />
      )}
    />
  );
};

export default PickYourCountry;
