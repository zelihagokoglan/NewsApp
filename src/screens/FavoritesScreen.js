import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FavoritesContext } from '../../store/FavoritesContext';
import globalStyles from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';

const FavoritesScreen = () => {
  const favoriteNewsContext = useContext(FavoritesContext);
  const ItemSeparator = () => <View style={globalStyles.separator} />;


  const renderItem = ({ item }) => (
    <CardComponent
      imageUrl={item.image_url} 
      title={item.title}
      onPress={() => navigation.navigate('NewsDetailScreen', { 
        title: item.title,
        image: item.image_url, 
        description: item.description, 
        pubDate: item.pubDate, 
        source_name: item.source_name 
      })}
    />
  );
    
    return <FlatList
    data={favoriteNewsContext.ids}
    renderItem={renderItem}
    keyExtractor={item => item.id || item.title} 
    ItemSeparatorComponent={ItemSeparator}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={globalStyles.listContent}
  />;
  }

export default FavoritesScreen;
