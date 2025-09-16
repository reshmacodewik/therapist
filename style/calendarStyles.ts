import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const calendarStyles = (wp: any, hp: any) => StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: wp(4),
    padding: wp(4),
    marginVertical: hp(2),
  },
  customCalendarHeader: {
    marginBottom: hp(1),
  },
  calendarHeaderYear: {
    fontSize: wp(3.5),
    color: '#264734',
    fontFamily: 'Poppins-Medium',
  },
  calendarHeaderDate: {
    fontSize: wp(4.5),
    color: '#264734',
    fontFamily: 'Poppins-Bold',
  },
  calendarNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarDay: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
    borderRadius: wp(5),
  },
  calendarDaySelected: {
    backgroundColor: '#264734',
  },
  calendarDayText: {
    fontSize: wp(3.5),
    color: '#264734',
    fontFamily: 'Poppins-Medium',
  },
  calendarDayTextSelected: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
});