import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from '../../../../style/helpStyles';

const HelpScreen: React.FC = () => {
  const navigation = useNavigation();

  const faqs = [
    {
      id: '1',
      question: 'How do I track my ski runs?',
      answer: "Tap the 'Start' button on the main screen.",
    },
    {
      id: '2',
      question: 'What are the different ski run types?',
      answer: 'Green, blue, black, and double black diamond.',
    },
    {
      id: '3',
      question: 'How do I connect with friends?',
      answer: "Go to 'Friends' in your profile and search for users.",
    },
    {
      id: '4',
      question: 'How do I manage my privacy settings?',
      answer: "Check your profile settings under 'Privacy'.",
    },
    {
      id: '5',
      question: 'Where can I see my past ski runs?',
      answer: "Access 'History' in your profile to view past activities.",
    },
  ];

  return (
    <ImageBackground
      source={require('../../../../assets/Image/background.png')} // add gradient-like background image
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: hp(1) }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={wp('6%')} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Help</Text>
          </View>

          {/* Contact Support */}
          <Text style={styles.sectionTitle}>Contact Support</Text>
          <View style={styles.contactBox}>
            <View style={styles.contactBoxbg}>
              <Ionicons name="call-outline" size={wp('6%')} color="#333" />
            </View>
            <Text style={styles.contactText}>+91 9876543210</Text>
          </View>
          <View style={styles.contactBox}>
            <View style={styles.contactBoxbg}>
              <Ionicons name="mail-outline" size={wp('6%')} color="#333" />
            </View>

            <Text style={styles.contactText}>user@gmail.com</Text>
          </View>
          <View style={styles.contactBox}>
            <View style={styles.contactBoxbg}>
              <Ionicons
                name="chatbubble-outline"
                size={wp('6%')}
                color="#333"
              />
            </View>
            <Text style={styles.contactText}>+97 0123654789</Text>
          </View>

          {/* FAQ */}
          <Text style={styles.sectionTitle}>FAQ</Text>
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={wp('5%')} color="#888" />
            <TextInput
              placeholder="Search FAQs"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>

          <FlatList
            data={faqs}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.faqItem}>
                <View style={styles.faqIconBox}>
                  <Ionicons
                    name="help-circle-outline"
                    size={wp('5.5%')}
                    color="#333"
                  />
                </View>

                <View style={styles.faqTextBox}>
                  <Text style={styles.faqQuestion}>{item.question}</Text>
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HelpScreen;
