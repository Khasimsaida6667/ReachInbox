import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchThreads() {
  try {
    const response = await axios.get(`${API_BASE_URL}/onebox/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching threads:', error);
    return [];
  }
}

export async function replyToThread(threadId, replyData) {
  try {
    await axios.post(`${API_BASE_URL}/reply/${threadId}`, replyData);
  } catch (error) {
    console.error('Error replying to thread:', error);
    throw error;
  }
}

export async function deleteThread(threadId) {
  try {
    await axios.delete(`${API_BASE_URL}/onebox/${threadId}`);
  } catch (error) {
    console.error('Error deleting thread:', error);
    throw error;
  }
}

export async function getThreadDetails(threadId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/onebox/${threadId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching thread details:', error);
    throw error;
  }
}