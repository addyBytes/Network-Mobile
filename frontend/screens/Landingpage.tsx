import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomText from '@/components/BottomText';
import GmailButton from '@/components/GmailButton';
import Signup from '@/components/Signup';
import Textbox from '@/components/Textbox';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 600;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent,
          { 
            // iPad: center | Mobile: bottom
            justifyContent: isTablet ? 'center' : 'flex-end', 
            // iPad: center | Mobile: left
            alignItems: isTablet ? 'center' : 'flex-start' 
          }
        ]}
      >
        <View style={[
          styles.responsiveWrapper,
          { 
            width: isTablet ? 450 : '100%',
            alignItems: isTablet ? 'center' : 'flex-start' 
          }
        ]}>
          <Textbox />
          <Signup />
          <GmailButton />
          <BottomText />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F8F0', 
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  responsiveWrapper: {
    width: '100%',
  },
});