import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

function Guess() {
  const { guessItems, setGuessItems } = useStore('homeStore');

  useEffect(() => {
    setGuessItems([]);
  }, [guessItems.length]);
  const renderItem = ({
    item,
  }: {
    item: { title: string; image?: string };
  }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={guessItems} renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderwrap: {
    marginBottom: 50,
  },
});

export default observer(Guess);
