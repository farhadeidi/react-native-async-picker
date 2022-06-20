import React, { useEffect, useState } from 'react';
import { View, ViewProps } from 'react-native';
import AsyncPicker, { helpers } from 'react-native-async-picker';
import mockItems from '../mocks/countries.json';

type ItemProps = {
  name: string;
  code: string;
};

interface PickYourAsyncCountryWithDelayProps extends ViewProps {}
const PickYourAsyncCountryWithDelay: React.FC<
  PickYourAsyncCountryWithDelayProps
> = ({ ...props }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ItemProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<ItemProps[]>([]);

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
    const delayDebounceFn = setTimeout(() => {
      search(query, mockItems);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <View {...props}>
      <AsyncPicker
        label="Where are you from? (Async with delay)"
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
    </View>
  );
};

export default PickYourAsyncCountryWithDelay;
