import React, { useLayoutEffect, useContext, useCallback } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles';
import colors from '../styles/colors';
import { FavoritesContext } from '../../store/FavoritesContext';

export default function NewsDetailScreen({ route, navigation }) {
  const favoriteNewsContext = useContext(FavoritesContext);
  const { title, image, description, pubDate, source_name } = route.params;
  const article_id = route.params.article_id;

  const newsIsFavorite = favoriteNewsContext.ids.includes(article_id);

  const changeFavorite = useCallback(() => {
    if (newsIsFavorite) {
      favoriteNewsContext.removeFavorite(article_id);
    } else {
      favoriteNewsContext.addFavorite(article_id);
    }
  }, [newsIsFavorite, favoriteNewsContext, article_id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={changeFavorite}>
          <MaterialIcons
            style={({ pressed }) => (pressed ? globalStyles.pressed : null)}
            name={newsIsFavorite ? "favorite" : "favorite-border"}
            size={24}
            color={newsIsFavorite ? colors.secondary : colors.primary}
          />
        </Pressable>
      ),
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <View>
        <Card
          containerStyle={[
            globalStyles.cardContainer,
            { marginTop: 20 },
            { marginBottom: 20 },
          ]}
        >
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
