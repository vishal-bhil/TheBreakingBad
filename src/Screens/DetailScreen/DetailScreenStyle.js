import {StyleSheet} from 'react-native';
import {Responsive, Color} from '../../Helper';

export default StyleSheet.create({
  imageBackground: {
    width: Responsive.widthPx(100),
    height: Responsive.widthPx(120),
  },
  imageStyle: {
    opacity: 0.3,
    backgroundColor: Color.modalOverlay,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.widthPx(5),
    paddingVertical: Responsive.widthPx(5),
    paddingTop: Responsive.widthPx(10),
  },
  imageContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  characterImage: {
    width: Responsive.widthPx(42),
    height: Responsive.widthPx(60),
    borderRadius: 10,
    marginBottom: 20,
  },
  potrayedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  dobContainer: {
    flexDirection: 'row',
  },
  marginStart10: {
    marginStart: 10,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop30: {
    marginTop: 30,
  },
  subContainer: {
    paddingHorizontal: Responsive.widthPx(5),
  },
  seasonContainer: {
    padding: 5,
    backgroundColor: Color.grey1A,
    marginStart: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  listStyle: {
    marginTop: 20,
  },
});
