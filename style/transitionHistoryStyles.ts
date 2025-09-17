import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const transitionHistoryStyles = (wp: any, hp: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  backButton: {
    padding: wp(2),
  },
  headerTitle: {
    fontSize: wp(5),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
    flex: 1,
    marginLeft: wp(3),
  },
  filterButton: {
    padding: wp(2),
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  monthSection: {
    marginBottom: hp(3),
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  monthTitle: {
    fontSize: wp(4.5),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
  },
  monthTotal: {
    fontSize: wp(4.5),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
  },
  transactionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionLeft: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: wp(4),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
    marginBottom: hp(0.3),
  },
  transactionSubtitle: {
    fontSize: wp(3.5),
    fontFamily: 'Urbanist-Regular',
    color: '#666666',
    marginBottom: hp(0.2),
  },
  transactionRecipient: {
    fontSize: wp(3.2),
    fontFamily: 'Urbanist-Regular',
    color: '#999999',
  },
  transactionAmount: {
    fontSize: wp(4),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
  },
});