import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {AppContainer, AppText} from '../../Components';
import {Color} from '../../Helper';
import styles from './FavoriteScreenStyle';
import CharacterItem from '../HomeScreen/Components/CharacterItem';

const FavoriteScreen = ({navigation}) => {
  const localCharacterList = useSelector(
    state => state.character.characterList,
  );

  const onBackPress = () => {
    navigation.goBack();
  };

  const renderCharacterItem = ({item, index}) => {
    return <CharacterItem item={item} index={index} navigation={navigation} />;
  };

  return (
    <AppContainer isPadding={false}>
      <View style={styles.headerContainer}>
        <AppText
          text="Favorites"
          fontSize="6"
          fontWeight="bold"
          fontColor={Color.green75}
        />

        <TouchableOpacity onPress={onBackPress} style={styles.favoriteIcon}>
          <Icon name="x" color={Color.white} size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={localCharacterList}
        renderItem={renderCharacterItem}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
        style={styles.listStyle}
      />
    </AppContainer>
  );
};
export default FavoriteScreen;
