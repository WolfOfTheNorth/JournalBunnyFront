// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';
import { Text } from '@/components/Themes/Themed';
import JournalEntryInput from '../../components/Editor/JournalEntryInput';
import { saveJournalEntry } from '../api/SaveJournal'; // Import the API function

export default function TabOneScreen() {
  const [entry, setEntry] = useState('');
  const [title, setTitle] = useState('');

  const handleSave = async () => {
    // set the title to todays date
    setTitle(new Date().toLocaleDateString());
    try {
      const savedEntry = await saveJournalEntry({ title: title, content: entry });
      console.log('Entry saved:', savedEntry);
      Alert.alert("Success", "Journal entry saved successfully");
      setEntry(''); // Clear the input field after saving
    } catch (error) {
      console.error('Failed to save entry:', error);
      Alert.alert("Error", "Failed to save journal entry");
    }
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
