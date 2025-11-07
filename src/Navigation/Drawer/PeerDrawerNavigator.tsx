import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomPeerDrawer from "./CustomPeerDrawer";
import HomeScreenPeer from "../../Screens/Peer/HomeScreenPeer";

const Drawer = createDrawerNavigator();

export default function PeerDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomPeerDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        overlayColor: "transparent",
        
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreenPeer} />
    </Drawer.Navigator>
  );
}
