import React, { useContext, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { FavoritesContext } from '../../store/FavoritesContext';
import globalStyles from '../styles/globalStyles';
import CardComponent from '../components/card';

const FavoritesScreen = ({ navigation }) => {
  const favoriteNewsContext = useContext(FavoritesContext);
  const ItemSeparator = () => <View style={globalStyles.separator} />;

  useEffect(() => {
    console.log('Favorites updated', favoriteNewsContext.ids);
  }, [favoriteNewsContext.ids]);

  const renderItem = ({ item }) => (
    <CardComponent
      image={item.image} 
      title={item.title}
      onPress={() => navigation.navigate('NewsDetailScreen', { 
        title: item.title,
        image: item.image, 
        description: item.description, 
        pubDate: item.pubDate, 
        source_name: item.source_name,
        article_id: item.article_id  
      })}
    />
  );

  if (favoriteNewsContext.ids.length === 0) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.detailTitleText}>Henüz favoriniz yok!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteNewsContext.ids}
      renderItem={renderItem}
      keyExtractor={(item) => item.article_id || item.title}
      ItemSeparatorComponent={ItemSeparator}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyles.listContent}
    />
  );
};

export default FavoritesScreen;
