import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'; // Replace with your Django server URL

export const saveJournalEntry = async (entryData) => {
  try {
    const response = await axios.post(`${BASE_URL}entries/`, entryData);
    return response.data;
  } catch (error) {
    // Handle the error appropriately
    console.error('Error saving journal entry:', error);
    throw error;
  }
};

export const getJournalEntries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}entries/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    throw error;
  }
};