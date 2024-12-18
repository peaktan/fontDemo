/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  Text,
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
              }}>已取件(粗体),未设置了numberOfLines * 121221</Text>
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
              }} numberOfLines={1}>已取件(粗体),设置了numberOfLines=1 * 121221</Text>
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
      </View>
    </View>
  );
}

export default App;
