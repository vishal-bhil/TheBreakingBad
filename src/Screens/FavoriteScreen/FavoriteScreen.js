import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {AppContainer, AppText} from '../../Components';
import {Color} from '../../Helper';
import {
  HeaderContainer,
  FavoriteIcon,
  ListContainer,
  ItemSeparator,
} from './FavoriteScreenStyle';
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
      <HeaderContainer>
        <AppText
          text="Favorites"
          fontSize="6"
          fontWeight="bold"
          fontColor={Color.green75}
        />

        <FavoriteIcon onPress={onBackPress}>
          <Icon name="x" color={Color.white} size={25} />
        </FavoriteIcon>
      </HeaderContainer>

      <ListContainer
        data={localCharacterList}
        renderItem={renderCharacterItem}
        numColumns={2}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </AppContainer>
  );
};
export default FavoriteScreen;
