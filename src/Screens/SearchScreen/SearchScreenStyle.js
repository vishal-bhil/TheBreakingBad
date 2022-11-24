import {StyleSheet, Platform} from 'react-native';
import {Responsive, Color, Fonts} from '../../Helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: Color.grey24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.widthPx(5),
    paddingVertical:
      Platform.OS === 'android' ? Responsive.widthPx(2) : Responsive.widthPx(5),
    paddingTop:
      Platform.OS === 'android'
        ? Responsive.widthPx(2)
        : Responsive.widthPx(10),
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.Roboto_Thin,
    fontSize: Responsive.font(7),
    color: Color.white,
    marginVertical: 10,
    marginStart: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  listStyle: {
    marginTop: 20,
    paddingHorizontal: Responsive.widthPx(5),
  },
  ItemSeparator: {
    marginTop: 20,
  },
});
