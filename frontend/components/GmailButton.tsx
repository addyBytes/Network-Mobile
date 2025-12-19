import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native';

const GmailButton = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 600;

  return (
    <TouchableOpacity style={[
      styles.button, 
      { alignSelf: isTablet ? 'center' : 'flex-start' }
    ]} activeOpacity={0.7}>
      <Image source={require('../assets/images/google logo.png')} style={styles.logo} />
      <Text style={styles.text}>Continue with Gmail</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 450,
    paddingVertical: 14,
    backgroundColor: '#FBF9F1',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    marginBottom: 8,
  },
  logo: { width: 20, height: 20, resizeMode: 'contain' },
  text: { color: '#12141c', fontSize: 17, fontWeight: '500' },
});

export default GmailButton;