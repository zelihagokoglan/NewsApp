import React, { useLayoutEffect, useContext, useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles';
import colors from '../styles/colors';
import { FavoritesContext } from '../../store/FavoritesContext';

export default function NewsDetailScreen({ route, navigation }) {
  const favoriteNewsContext = useContext(FavoritesContext);
  const { title, image, description, pubDate, source_name, article_id } = route.params;

  const [newsIsFavorite, setNewsIsFavorite] = useState(
    favoriteNewsContext.ids.some(news => news.article_id === article_id)
  );

  useEffect(() => {
    setNewsIsFavorite(favoriteNewsContext.ids.some(news => news.article_id === article_id));
  }, [favoriteNewsContext.ids]);

  function changeFavorite() {
    if (newsIsFavorite) {
      favoriteNewsContext.removeFavorite(article_id);
    } else {
      favoriteNewsContext.addFavorite({ title, image, article_id, description, pubDate, source_name });
    }
    setNewsIsFavorite(!newsIsFavorite);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={changeFavorite} style={{ marginRight: 10 }}>
          <MaterialIcons
            name={newsIsFavorite ? "favorite" : "favorite-border"}
            size={24}
            color={colors.black}
          />
        </Pressable>
      ),
    });
  }, [navigation, newsIsFavorite]);

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollView}>
      <View>
        <Card containerStyle={globalStyles.cardContainer}>
          <ImageBackground source={{ uri: image }} style={globalStyles.cardImage} />
          <Text style={globalStyles.cardTitle}>{title}</Text>
        </Card>
        <View>
          <Text style={globalStyles.detailTitleText}>{title}</Text>
          <Text style={globalStyles.sourceTimeText}>{source_name}</Text>
          <Text style={globalStyles.sourceTimeText}>{pubDate}</Text>
          <Text style={globalStyles.descriptionText}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
