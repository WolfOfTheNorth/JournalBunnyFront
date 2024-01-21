// TabOneScreen
import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Text } from '@/components/Themed';
import JournalEntryInput from '../../components/JournalEntryInput';

export default function TabOneScreen() {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    console.log('Journal Entry:', entry); // Here you can replace with actual save logic
    // For now, it just logs the entry to the console
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Day Today</Text>
      <JournalEntryInput onChangeText={setEntry} />
      <Button title="Save Entry" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});