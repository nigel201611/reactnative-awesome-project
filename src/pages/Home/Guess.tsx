import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { GuessItemType } from '@config/types';
import Icon from '@assets/iconfont/index';
import useStore from '../../hooks/useStore';

function Guess() {
  const { guessItems, setGuessItems } = useStore('homeStore');
  const fetch = () => {
    setGuessItems([]);
  };
  useEffect(() => {
    setGuessItems([]);
  }, [guessItems.length]);
  const renderItem = ({ item }: { item: GuessItemType }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          console.log(item);
        }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <Icon name="icon-smile-fill" color="#f86442" />
          <Text style={styles.headerTitle}>猜你喜欢</Text>
        </View>
        <View style={styles.headerLeft}>
          <Text style={styles.moreText}>更多</Text>
          <Icon name="icon-more" color="#f86442" />
        </View>
      </View>
      <FlatList
        style={styles.list}
        numColumns={3}
        data={guessItems}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.changeGuess} onPress={fetch}>
        <Icon name="icon-shuaxin" color="#f86442" />
        <Text style={styles.changeGuessText}>换一批</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#6f6f6f',
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  changeGuessText: {
    marginLeft: 5,
  },
  list: {
    padding: 10,
  },
});
export default observer(Guess);
