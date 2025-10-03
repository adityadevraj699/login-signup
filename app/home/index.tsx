import MyButton from "@/components/MyButton";
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

const Home: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to the Home Screen!</Text>

      <MyButton title="Go to Profile" onPress={() => setModalVisible(true)} />

      <ReactNativeModal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile Modal</Text>
          <MyButton title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Home;