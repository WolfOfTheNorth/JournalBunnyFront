import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { getJournalEntries } from '../api/SaveJournal'; // Import the fetching function

export default function TabTwoScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getJournalEntries();
        setEntries(data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {entries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <Text style={styles.entryTitle}>{entry.title}</Text>
          <View style={styles.separator} />
          <Text>{entry.content.substring(0, 120)}...</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  entryContainer: {
    backgroundColor: '#f2f2f2', // Change as needed
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  entryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});