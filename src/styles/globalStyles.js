import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const cardWidth = deviceWidth - 70;

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  separator: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
  searchIcon: {
    marginLeft: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

const textStyles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
    color: colors.primary,
    paddingHorizontal: 22,
    alignSelf: 'center',
    textAlign: 'left',
  },
  sourceTimeText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'left',
    paddingHorizontal: 22,
    paddingBottom: 6,
  },
  detailTitleText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 22,
    paddingBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
  },
  cardText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 20,
  },
  onBtext: {
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    marginHorizontal: 10,
    width: 100,
    height: 40,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const cardStyles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: 180,
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 12,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  cardOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const onboardingStyles = StyleSheet.create({
  onBiMage: {
    width: deviceWidth,
    height: deviceHeight - 200,
  },
  onBtextContainer: {
    width: deviceWidth,
    paddingHorizontal: 20,
    marginBottom: 200,
    backgroundColor: colors.background,
  },
});

export default {
  ...layoutStyles,
  ...textStyles,
  ...buttonStyles,
  ...cardStyles,
  ...onboardingStyles,
};
