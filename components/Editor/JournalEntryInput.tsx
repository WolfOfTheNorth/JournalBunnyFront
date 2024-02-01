import { State } from 'expo-router/build/fork/getPathFromState';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const JournalEntryInput = ({ onChangeText }: any) => {
  return (
    <TextInput
      style={styles.input}
      multiline
      placeholder="Write your journal entry here..."
      onChangeText={onChangeText} // Use the passed onChangeText
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: '90%', // Adjust the height to accommodate the save button
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
});

export default JournalEntryInput;