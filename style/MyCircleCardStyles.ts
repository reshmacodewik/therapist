import { StyleSheet } from "react-native";
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  cardWrap: {
    width: wp(45),
    backgroundColor: "#ffffffcc",
    borderRadius: wp(3),
    marginRight: wp(3),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  thumb: {
    width: "88%",
    height: hp(12),
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: wp(3),
    marginTop: hp(1),
     marginBottom: hp(-1),

  },
  callToActionWrap: {
     backgroundColor: "#FF8D4D",
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.6),
    borderRadius: wp(10),
    marginTop: hp(2),
    width:wp(25),
     marginLeft: wp(3),
   
  
  },
  callToAction: {
    fontSize: wp(3.2),
    color: "#fff",
    textAlign:'center'
  
  },
  cardBody: {
    padding: wp(3),
  },
  cardTitle: {
    fontSize: wp(4.2),
    fontWeight: "700",
    color: "#264734",
    marginBottom: hp(0.8),
  },
  cardMeta: {
    fontSize: wp(3.2),
    color: "#6b6b6b",
    marginBottom: hp(1.2),
   
  },
   cardMeta1: {
    fontSize: wp(3.2),
    color: "#6b6b6b",
    marginBottom: hp(1.2),
     marginTop: hp(-1),
  },
  ctaBtn: {
    backgroundColor: "#143f33",
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(0),
    borderRadius: wp(10),
    alignSelf: "center",
    width: wp(40),
  },
  ctaText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: wp(3),
    textAlign:'center'
  },
});
