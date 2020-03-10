import React, { useCallback } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: 'blue',
  }
})

const LearnButton = () => {

  const handlePress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void = useCallback(() => {
    console.log('Hey');
  }, []);


  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 200,
        borderRadius: 20,
        backgroundColor: 'blue',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        shadowColor: 'blue',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.7,
      }}
    >
      <View
        style={{
          width: 200,
          borderRadius: 20,
          backgroundColor: 'blue',
          shadowColor: 'gray',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowRadius: 3,
          shadowOpacity: 0.7,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ color: 'white' }}>
          Native
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default LearnButton;