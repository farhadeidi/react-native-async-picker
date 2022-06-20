import React, { useEffect, useState } from 'react';
import AsyncPicker, { helpers } from 'react-native-async-picker';
import allCountries from '../mocks/countries.json';

type ItemProps = {
  name: string;
  code: string;
};

const PickYourAsyncCountry = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<ItemProps[]>([]);

  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const search = async (q: string, allData: ItemProps[]) => {
    setIsLoading(true);
    const result = allData.filter((el) =>
      helpers.isTextIncludedInString(q, el.name)
    );

    await helpers.sleep(500);
    setData(result || []);
    setIsLoading(false);
  };

  useEffect(() => {
    search(query, allCountries);
  }, [query]);

  return (
    <AsyncPicker
      label="Where are you from? (Async)"
      value={selectedItems}
      onChange={setSelectedItems}
      data={data}
      limit={1}
      closeOnSelect
      isLoading={isLoading}
      searchProps={{
        value: query,
        onChangeText: setQuery,
      }}
      keyExtractor={(e) => e.code}
      labelExtractor={(e) => e.name}
      searchStringExtractor={(el) => `${el.name} - ${el.code}`}
    />
  );
};

export default PickYourAsyncCountry;
