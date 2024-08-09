import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

const deviceWidth = Math.round(Dimensions.get('window').width);
const cardWidth = deviceWidth - 50; // Ekranın her iki tarafından 25 birim boşluk bırakıyoruz

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginTop: 50,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  drawerText: {
    color: colors.drawerbackground,
    fontSize: fonts.drawerText.fontSize,
    fontFamily: fonts.drawerText.fontFamily,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: colors.drawerbackground,
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: colors.drawerbackground,
    borderBottomWidth: 3,
    borderBottomColor: colors.drawerbackground,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 200,
    color: colors.drawerTitle,
  },
  drawerFooter: {
    padding: 50,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  drawerFooterText: {
    fontSize: 54,
    color: '#007bff',
  },
  cardContainer: {
    width: cardWidth,
    height: 230,
    overflow: 'hidden',
    alignSelf: 'center', // Kartı yatay olarak ortalar
    padding: 0,
    margin: 0,
    borderWidth: 0,
    shadowColor: 'transparent', // Gölgeyi kaldır
    backgroundColor: 'transparent', // Arka planı kaldır
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    flex: 1,
    justifyContent: 'center', // İçeriği dikey olarak ortalar
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yazıyı daha okunaklı hale getirmek için koyu katman ekler
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    padding: 10, // İçeriğe biraz dolgu ekler
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20, // Metni dikey olarak ortalar
  },

  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  separator: {
    height: 30, // Boşluk yüksekliği
    backgroundColor: 'transparent', // Arka plan rengi
  },
});

export default globalStyles;
