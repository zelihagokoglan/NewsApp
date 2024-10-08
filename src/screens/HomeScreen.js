import React, { useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Text,
} from "react-native";
import CardComponent from "../components/card";
import globalStyles from "../styles/globalStyles";
import ButtonComponent from "../components/button";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import useResult from "../../hooks/useResults";
import colors from "../styles/colors";

const categories = ["Top", "Crime", "Technology", "Politics", "Sports"];

const HomeScreen = ({ navigation }) => {
  // States
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Top");

  // Hooks
  const { newsData, loading, error } = useResult(activeCategory);

  // Constants
  const filteredNewsData = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <CardComponent
      image={item.image}
      title={item.title}
      onPress={() =>
        navigation.navigate("NewsDetailScreen", {
          title: item.title,
          image: item.image,
          description: item.description,
          pubDate: item.pubDate,
          source_name: item.source_name,
          article_id: item.article_id,
        })
      }
    />
  );

  const renderCategoryItem = ({ item }) => (
    <ButtonComponent
      category={item}
      isActive={item === activeCategory}
      onPress={() => setActiveCategory(item)}
    />
  );

  const ItemSeparator = () => <View style={globalStyles.separator} />;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: activeCategory,
    });
  }, [navigation, activeCategory]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.searchContainer}>
        <TextInput
          style={globalStyles.searchInput}
          placeholder="Search news..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <EvilIcons
          name="search"
          size={24}
          color={colors.avgGray}
          style={globalStyles.searchIcon}
        />
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          ...globalStyles.listContent,
          marginBottom: 15,
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" colors={colors.black} />
      ) : error ? (
        <Text>Error fetching news: {error.message}</Text>
      ) : (
        <FlatList
          data={filteredNewsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.article_id || item.title}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.listContent}
        />
      )}
    </View>
  );
};

export default HomeScreen;
