/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../style/eventdetailstyle';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import { useQuery } from '@tanstack/react-query';
import { API_DETAILSLIST_EVENTS } from '../../utils/api/APIConstant';
import { getApiWithOutQuery } from '../../utils/api/common';

const attendees = [
  { id: 1, image: require('../../../assets/icon/eventuser1.png') },
  { id: 2, image: require('../../../assets/icon/eventuser2.png') }, // Replace with actual image
  { id: 3, image: require('../../../assets/icon/eventuser3.png') },
];
type RouteParams = {
  EventDetailsScreen: {
    eventId: string;
  };
};
interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export const formatDate = (dateString?: string) => {
  if (!dateString) return '';

  const date = new Date(dateString);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const EventDetailsScreen = () => {
  const { wp, hp } = useResponsive();
  const [showFAQ, setShowFAQ] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);
  const route = useRoute<RouteProp<RouteParams, 'EventDetailsScreen'>>();
  const { eventId } = route.params;
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['event-detail', eventId], // ✅ unique per event
    queryFn: () =>
      getApiWithOutQuery({
        url: `${API_DETAILSLIST_EVENTS}/${eventId}`,
      }),
    enabled: !!eventId,
  });
  const event = data?.data;

  const renderLoading = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <ActivityIndicator size="large" color="#14532d" />
      <Text style={{ fontSize: wp(4), marginTop: 10 }}>Loading Event...</Text>
    </View>
  );

  const renderError = () => (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: wp(4), textAlign: 'center', color: 'red' }}>
        {data?.error || 'Event not found or not approved'}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#14532d',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
        onPress={() => refetch()}
      >
        <Text style={{ color: '#fff' }}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={themedStyles.bgimg}
    >
      <ScrollView style={themedStyles.container}>
        <Header />
        <View style={themedStyles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(10)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={themedStyles.titleevent}>Manage Event</Text>
        </View>
   <View style={themedStyles.innercontainer}>
          {isLoading || isRefetching
            ? renderLoading()
            : !data?.success
            ? renderError()
            : (
              <>
                {/* Paid / free badge */}
                <View style={themedStyles.paidEventContainer}>
                  <Text style={themedStyles.paidEventText}>
                    {event?.isFree ? 'Free Event' : 'Paid Event'}
                  </Text>
                </View>
          <View style={themedStyles.headerContainer}>
            <Image
              source={require('../../../assets/Image/eventdetail.png')}
              style={[themedStyles.mainImage, { height: hp(15), width: '95%' }]}
            />
          </View>
          <View style={themedStyles.contentContainer}>
            <View style={themedStyles.titleRow}>
              <Text style={[themedStyles.title, { fontSize: wp(3.2) }]}>
                {event?.name}
              </Text>
              <Image
                source={
                  event?.isFree
                    ? require('../../../assets/icon/free.png') // FREE image
                    : require('../../../assets/icon/badge.png') // PAID image
                }
                style={themedStyles.freeImage}
                resizeMode="contain"
              />
            </View>

            <Text style={[themedStyles.dateText, { fontSize: wp(3.5) }]}>
              {formatDate(event?.date)}
            </Text>
            <Text style={[themedStyles.timeText, { fontSize: wp(3.5) }]}>
              {event?.time}
            </Text>

            <View style={[themedStyles.attendanceRow]}>
              {attendees.map((item, index) => (
                <Image
                  key={item.id}
                  source={item.image}
                  style={[
                    themedStyles.attendeeImage,
                    {
                      width: wp(8),
                      height: wp(8),
                      marginLeft: index === 0 ? 0 : wp(-3), // tighter overlap
                    },
                  ]}
                />
              ))}
              <Text
                style={[
                  themedStyles.attendanceText,
                  { fontSize: wp(3.5), marginLeft: wp(2) }, // REMOVE marginLeft here
                ]}
              >
                +50 Attendance
              </Text>
            </View>

            <Text style={[themedStyles.sectionTitle, { fontSize: wp(3.8) }]}>
              About
            </Text>
            <Text style={[themedStyles.descriptionText, { fontSize: wp(3) }]}>
              {event?.description}
            </Text>

            <Text style={[themedStyles.sectionTitle, { fontSize: wp(4) }]}>
              Host Speaker
            </Text>
            <View style={themedStyles.speakerRow}>
              <Image
                source={
                  event?.hostSpeakers?.image
                    ? { uri: event.hostSpeakers?.image }
                    : require('../../../assets/icon/eventuser.png')
                }
                style={[
                  themedStyles.speakerImage,
                  { width: wp(15), height: wp(15) },
                ]}
              />
              <View style={themedStyles.speakerInfo}>
                <Text style={[themedStyles.speakerName, { fontSize: wp(4) }]}>
                  {event?.hostSpeakers?.[0]?.fullName}
                </Text>
                <Text style={[themedStyles.speakerRole, { fontSize: wp(2.8) }]}>
                  Clinical Psychologist
                </Text>
              </View>
            </View>

            <Text style={[themedStyles.sectionTitle, { fontSize: wp(4) }]}>
              What will be included
            </Text>

            {event?.includedItems?.map((item: string, index: number) => (
              <View key={index} style={themedStyles.listItem}>
                <Text style={themedStyles.bulletPoint}>•</Text>
                <Text style={themedStyles.listText}>{item}</Text>
              </View>
            ))}

            <TouchableOpacity
              style={themedStyles.accordionHeader}
              onPress={() => setShowFAQ(prev => !prev)}
            >
              <Text
                style={[themedStyles.accordionTitle, { fontSize: wp(3.8) }]}
              >
                Frequently Asked Questions
              </Text>
              <Ionicons
                name={showFAQ ? 'chevron-up' : 'chevron-down'}
                size={wp(4)}
                color="#000"
                style={{ marginTop: wp(2) }}
              />
            </TouchableOpacity>

            {showFAQ && (
              <View style={themedStyles.accordionContent}>
                {event?.faqs?.length ? (
                  event.faqs.map((faq: FAQ) => (
                    <View key={faq._id} style={{ marginBottom: hp(1) }}>
                      <Text style={themedStyles.listText}>
                        • {faq.question}
                      </Text>
                      <Text style={themedStyles.listText}>{faq.answer}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={themedStyles.listText}>No FAQs available</Text>
                )}
              </View>
            )}

            {/* Terms & Conditions Expandable */}
            <TouchableOpacity
              style={themedStyles.accordionHeader}
              onPress={() => setShowTerms(!showTerms)}
            >
              <Text
                style={[themedStyles.accordionTitle, { fontSize: wp(3.8) }]}
              >
                Terms & Conditions
              </Text>
              <Ionicons
                name={showTerms ? 'chevron-up' : 'chevron-down'}
                size={wp(4)}
                color="#000"
                style={{ marginTop: wp(2) }}
              />
            </TouchableOpacity>

            {showTerms && (
              <Text style={themedStyles.listText}>
                {event?.termsAndConditions}
              </Text>
            )}
          </View>
            </>
            )}
        </View>
        {!event?.isFree && (
          <View style={themedStyles.accessPaymentContainer}>
            <Text style={themedStyles.sectionTitlePayment}>Payout Summary</Text>
            <View style={themedStyles.paymentInfoContainer}>
              <View style={themedStyles.paymentRow}>
                <Text style={themedStyles.paymentLabel}>Collected:</Text>
                <Text style={themedStyles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={themedStyles.paymentRow}>
                <Text style={themedStyles.paymentLabel}>Platform Fee:</Text>
                <Text style={themedStyles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={themedStyles.paymentRow}>
                <Text style={themedStyles.paymentLabel}>Net Payout:</Text>
                <Text style={themedStyles.paymentValue}>KES 2,500</Text>
              </View>
            </View>

            {/* Action Buttons Section */}
            <View style={themedStyles.actionButtonsContainer}>
              {/* Send Payment Link */}
              <View style={themedStyles.actionButtonsinnerContainer}>
                <TouchableOpacity
                  style={themedStyles.primaryButton}
                  onPress={() =>
                    navigation.navigate('SendPaymentLink' as never)
                  }
                >
                  <Text style={themedStyles.primaryButtonText}>
                    Send Payment Link
                  </Text>
                  <Feather
                    name="link-2"
                    size={wp(4.5)}
                    color="#fff"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* Refund Participant */}
                <TouchableOpacity
                  style={themedStyles.outlineButton}
                  onPress={() =>
                    navigation.navigate('RefundPaymentScreen' as never)
                  }
                >
                  <Text style={themedStyles.outlineButtonText}>
                    Refund Participant
                  </Text>
                  <MaterialIcons
                    name="arrow-u-right-top"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
              {/* Grant Access */}
              <View style={themedStyles.actionButtonsinnerContainer}>
                <TouchableOpacity
                  style={themedStyles.outlineButton}
                  onPress={() =>
                    navigation.navigate('TransactionHistory' as never)
                  }
                >
                  <Text style={themedStyles.outlineButtonText}>
                    View All Transactions
                  </Text>
                  <Ionicons
                    name="eye"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={themedStyles.accessPaymentContainer}>
          <Text style={themedStyles.sectionTitlePayment}> Resources</Text>
          <Text style={themedStyles.paymentLabelresource}>
            Effectively resoures
          </Text>

          <View style={themedStyles.actionButtonsContainer}>
            <View style={themedStyles.actionButtonsinnerContainer}>
              <TouchableOpacity
                style={themedStyles.outlineButton}
                onPress={() => navigation.navigate('NoteScreen' as never)}
              >
                <Text style={themedStyles.outlineButtonText}>Add Notes</Text>
                <Ionicons
                  name="bookmark-outline"
                  size={wp(4.5)}
                  color="#14532d"
                  style={{ marginLeft: wp(2) }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={themedStyles.outlineButton}
                onPress={() => navigation.navigate('UploadScreen' as never)}
              >
                <Text style={themedStyles.outlineButtonText}>
                  Upload Resources
                </Text>
                <Feather
                  name="upload"
                  size={wp(4.5)}
                  color="#14532d"
                  style={{ marginLeft: wp(2) }}
                />
              </TouchableOpacity>
            </View>
            {/* Grant Access */}
          </View>
        </View>
        <View style={themedStyles.accessPaymentContainer}>
          <Text style={themedStyles.sectionTitlePayment}> Event Settings</Text>
          <Text style={themedStyles.paymentLabelresource}>
            Manage your event at one place{' '}
          </Text>

          <View style={themedStyles.actionButtonsContainer}>
            <View style={themedStyles.actionButtonsinnerContainer}>
              <TouchableOpacity
                style={themedStyles.outlineButton}
                onPress={() => navigation.navigate('UploadScreen' as never)}
              >
                <Text style={themedStyles.outlineButtonText}>Cancel Event</Text>
                <Ionicons
                  name="close-circle-outline"
                  size={wp(4.5)}
                  color="#14532d"
                  style={{ marginLeft: wp(2) }}
                />
              </TouchableOpacity>
            </View>
            {/* Grant Access */}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EventDetailsScreen;
