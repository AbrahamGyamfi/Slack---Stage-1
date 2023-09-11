import React from 'react';
import {  Text, StyleSheet, SafeAreaView, Image, View, Button, Linking } from 'react-native';

const MyComponent = () => {
  const openGitHubProfile = () => {
    const githubUrl = 'https://github.com/AbrahamGyamfi'; // Replace with your GitHub username
    Linking.openURL(githubUrl)
      .catch((err) => console.error('An error occurred: ', err));
  }
  return (
    < SafeAreaView style={styles.container}>
      <Text style={styles.text}> Abraham Gyamfi </Text>
      <Image 
      source={require('./assets/Ico.jpg')} // Replace 'myImage.png' with your image file's path
        style={styles.image}
      />
      
      
      < Button
        title="Open GitHub"
        onPress={openGitHubProfile}
      />
      
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex Start',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 35, // Set the font size to 24 units
    textAlign:'top',
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    marginTop: 20, // Adjust the top margin to separate text and image
  },
});
export default MyComponent;

