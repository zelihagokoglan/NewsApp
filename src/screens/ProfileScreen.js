
// included top news
import React from 'react';
import { View, FlatList } from 'react-native';
import CardComponent from '../components/CardComponent';
import globalStyles from '../styles/globalStyles';

const ProfileScreen = ({ navigation }) => {
  const newsData = [
    {
      id: '1',
      title: 'My Card Title 1',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534',
    },
    {
      id: '2',
      title: 'My Card Title 2',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534',
    },
    {
      id: '3',
      title: 'My Card Title 3',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534',
    },
    {
      id: '4',
      title: 'My Card Title 4',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534',
    },
  ];

  // CardComponent için renderItem fonksiyonu
  const renderItem = ({ item }) => (
    <CardComponent
      imageUrl={item.imageUrl}
      title={item.title}
      onPress={() => navigation.navigate('NewsDetailScreen', { id: item.id })}
    />
  );

  // Ayırıcı bileşen
  const ItemSeparator = () => <View style={globalStyles.separator} />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator} // Ayırıcı bileşen
        contentContainerStyle={globalStyles.listContent}
      />
    </View>
  );
};


export default ProfileScreen
;
