import { getDatabase } from './mongodb';
import { ObjectId } from 'mongodb';

export interface ContactMessage {
  _id?: string;
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export const saveMessage = async (messageData: Omit<ContactMessage, 'id' | 'timestamp' | '_id'>): Promise<ContactMessage> => {
  try {
    const db = await getDatabase();
    const collection = db.collection('messages');
    
    const message = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...messageData
    };
    
    const result = await collection.insertOne(message);
    
    return {
      ...message,
      _id: result.insertedId.toString()
    };
  } catch (error) {
    console.error('Error saving message to MongoDB:', error);
    throw new Error('Failed to save message');
  }
};

export const getAllMessages = async (): Promise<ContactMessage[]> => {
  try {
    const db = await getDatabase();
    const collection = db.collection('messages');
    
    const messages = await collection
      .find({})
      .sort({ timestamp: -1 }) // Sort by newest first
      .toArray();
    
    return messages.map(msg => ({
      _id: msg._id?.toString(),
      id: msg.id,
      name: msg.name,
      email: msg.email,
      message: msg.message,
      timestamp: msg.timestamp
    }));
  } catch (error) {
    console.error('Error fetching messages from MongoDB:', error);
    throw new Error('Failed to fetch messages');
  }
};

export const deleteMessage = async (id: string): Promise<boolean> => {
  try {
    const db = await getDatabase();
    const collection = db.collection('messages');
    
    const result = await collection.deleteOne({ id });
    return result.deletedCount > 0;
  } catch (error) {
    console.error('Error deleting message from MongoDB:', error);
    throw new Error('Failed to delete message');
  }
};
