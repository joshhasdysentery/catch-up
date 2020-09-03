import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Here's what's happening today.</Text>
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={(item) => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default NewsScreen;
