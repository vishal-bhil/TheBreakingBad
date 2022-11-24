import {StyleSheet} from 'react-native';
import {Responsive} from '../../Helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Responsive.widthPx(5),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    marginStart: 20,
  },
  listStyle: {
    marginTop: 20,
    paddingHorizontal: Responsive.widthPx(5),
  },
  ItemSeparator: {
    marginTop: 20,
  },
});
