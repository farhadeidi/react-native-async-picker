import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncPicker, {
  helpers,
  AsyncPickerRef,
} from 'react-native-async-picker';
import SimpleButton from '../components/SimpleButton';
import allCountries from '../mocks/countries.json';

type ItemProps = {
  name: string;
  code: string;
};

const Triggers = () => {
  const ref = React.useRef<AsyncPickerRef<ItemProps>>(null);
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
    <>
      <AsyncPicker
        label="Pick some countries? (Async)"
        value={selectedItems}
        ref={ref}
        onChange={setSelectedItems}
        data={data}
        isLoading={isLoading}
        ListEmptyComponent={
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <SimpleButton
              label="Focus on search"
              style={{ marginVertical: 16 }}
              onPress={() => {
                ref.current?.focusOnSearch();
              }}
            />

            <SimpleButton
              label="Close modal"
              style={{ marginVertical: 16 }}
              onPress={() => {
                ref.current?.closeModal();
              }}
            />
          </View>
        }
        searchProps={{
          value: query,
          onChangeText: setQuery,
        }}
        keyExtractor={(e) => e.code}
        labelExtractor={(e) => e.name}
        searchStringExtractor={(el) => `${el.name} - ${el.code}`}
      />

      <SimpleButton
        label="Open modal from outside!"
        style={{ marginVertical: 16 }}
        onPress={() => {
          ref.current?.openModal();
        }}
      />

      <SimpleButton
        label="RESET!"
        style={{ marginVertical: 16 }}
        onPress={() => {
          ref.current?.reset();
        }}
      />
    </>
  );
};

export default Triggers;
