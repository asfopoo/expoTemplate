import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import * as app from '../../app.json';
import Header from '../components/Header';

export default function AboutScreen() {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Header {...{ navigation }} />
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: tabBarHeight + 50 },
        ]}
      >
        <Text style={[styles.text28, styles.marginBottom20]}>
          Welcome to idSxanner
        </Text>
        <Text style={styles.marginBottom20}>
          At idSxanner, we believe in enhancing the efficiency and security of
          bars and restaurants by revolutionizing the way IDs are scanned. Our
          cutting-edge app is designed to streamline the ID verification
          process, ensuring a seamless experience for both businesses and their
          patrons.
        </Text>
        <Text style={[styles.text16, styles.marginBottom10]}>
          What is idSxanner?
        </Text>
        <Text style={styles.marginBottom20}>
          idSxanner is a state-of-the-art ID scanning app that empowers
          establishments to verify customer identities with speed and accuracy.
          Whether you run a bustling bar or a cozy restaurant, our app is your
          trusted companion for age verification, creating a safer environment
          for everyone.
        </Text>
        <Text style={[styles.text20, styles.marginBottom20]}>Key Features</Text>
        <Text style={[styles.text16, styles.marginBottom10]}>
          Instant ID Verification
        </Text>
        <Text style={styles.marginBottom20}>
          Say goodbye to long lines and tedious manual checks. idSxanner quickly
          verifies IDs with just a simple scan, reducing wait times and
          improving customer satisfaction.
        </Text>
        <Text style={[styles.text16, styles.marginBottom10]}>
          Fraud Prevention
        </Text>
        <Text style={styles.marginBottom20}>
          Our advanced technology detects fake IDs, helping you maintain a
          secure environment and comply with legal regulations. Feel confident
          in knowing that your establishment is protected against potential
          risks.
        </Text>
        <Text style={[styles.text16, styles.marginBottom10]}>
          Data Security
        </Text>
        <Text style={styles.marginBottom20}>
          We prioritize the privacy and security of customer information.
          idSxanner employs robust encryption measures to safeguard sensitive
          data, ensuring peace of mind for both businesses and patrons.
        </Text>
        <Text style={[styles.text16, styles.marginBottom10]}>
          User-Friendly Interface
        </Text>
        <Text style={styles.marginBottom20}>
          idSxanner is designed with simplicity in mind. Its intuitive interface
          makes it easy for your staff to quickly adapt and incorporate the app
          seamlessly into your daily operations.
        </Text>
        <Text>App Version {app.expo.version}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

/* 
Ads:
https://ammarahm-ed.github.io/react-native-admob-native-ads/docs/installation-3/
*/

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text28: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  text20: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text16: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom10: {
    marginBottom: 10,
  },
});
