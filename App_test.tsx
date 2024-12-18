/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from "react-native";
import {
  Colors
} from "react-native/Libraries/NewAppScreen";


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [isShow, setIsShow] = useState(false);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Colors.lighter, }}>
      <View style={{
        width: '100%',
        height: 30,
      }}>
        {/* <FlatList style={{
          flex: 1
        }} horizontal={true} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} renderItem={() => {
          return <TouchableOpacity style={{
            flex: 1,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10
          }}>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                // fontWeight: "bold",
                fontFamily: 'Roboto-Bold'
              }}>已核销 * 121221</Text>
            </View>
          </TouchableOpacity> */}
        {/* }}></FlatList> */}
            <Text style={{ textAlign: 'left',paddingLeft: 20 }}>系统字体：</Text>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontWeight: "bold",
                backgroundColor: 'red',
              }} onLayout={(event) => {
                console.log('width===', event.nativeEvent.layout.width)
              }}>已取件(粗体) * 121221</Text>
            </View>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontWeight: "bold",
                backgroundColor: 'red',
              }} numberOfLines={1} onLayout={(event) => {
                console.log('width===', event.nativeEvent.layout.width)
              }}>已取件(粗体) * 121221</Text>
            </View>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
              }}>已取件(正常) * 121221</Text>
            </View>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontWeight: '200'
              }}>已取件(细体) * 121221</Text>
            </View>
            <Text style={{ textAlign: 'left',paddingLeft: 20, }}>自定义字体：</Text>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontFamily: 'Roboto-Bold',
                // fontWeight: "bold",
              }}>已取件(粗体) * 121221</Text>
            </View>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontFamily: 'Roboto-Medium'
              }}>已取件(正常) * 121221</Text>
            </View>
            <View style={{
              paddingHorizontal: 12,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              height: 26
            }}>
              <Text style={{
                fontSize: 13,
                fontFamily: 'Roboto-Regular'
              }}>已取件(细体) * 121221</Text>
            </View>
      </View>
    </View>
  );
}

export default App;
