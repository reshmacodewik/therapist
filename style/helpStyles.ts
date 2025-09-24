import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginLeft: wp(-2),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    marginLeft: wp('3%'),
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginVertical: hp('2%'),
  },
  contactBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    padding: hp('1.5%'),
    marginBottom: hp('1%'),
  },
  contactBoxbg: {
    backgroundColor: '#F0F2F5',
    paddingHorizontal: hp('1.2%'),
    paddingVertical: hp('0.8%'),
    borderRadius: wp('2%'),
  },
  contactText: {
    marginLeft: wp('3%'),
    fontSize: wp('4%'),
    color: '#111',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.5%'),
    marginBottom: hp('2%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
    color: '#111',
  },
  faqItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    padding: hp('1.5%'),
    marginBottom: hp('1%'),
    alignItems: 'center',
   
  },
    faqIconBox: {       
    backgroundColor: '#F0F2F5',
    paddingHorizontal: hp('1.2%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('2%'),
  },
  faqTextBox: {
    marginLeft: wp('3%'),
    flex: 1,
  },
  faqQuestion: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#111',
    marginBottom: hp('0.5%'),
  },
  faqAnswer: {
    fontSize: wp('3.5%'),
    color: '#666',
  },
});

export default styles;
