"use client";
import React, { useState, useEffect } from "react";
import AdminLogin from "../../components/AdminLogin";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = sessionStorage.getItem("adminLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      fetchMessages();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    fetchMessages();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (err) {
      setError('Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/messages?id=${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
      } else {
        setError('Failed to delete message');
      }
    } catch (err) {
      setError('Error deleting message');
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  // Show login screen if not authenticated
  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Messages</h1>
              <p className="text-sm sm:text-base text-gray-600 hidden sm:block">View and manage messages from your contact form</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="bg-white shadow rounded-lg">
          {error && (
            <div className="mx-4 sm:mx-6 mt-4 bg-red-50 border border-red-200 rounded-md p-3 sm:p-4">
              <p className="text-red-600 text-sm sm:text-base">{error}</p>
            </div>
          )}

          <div className="px-4 sm:px-6 py-4 sm:py-6">
            {messages.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="text-gray-400 text-4xl sm:text-6xl mb-4">📭</div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">No messages yet</h3>
                <p className="text-sm sm:text-base text-gray-600">Messages from your contact form will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="border border-gray-200 rounded-lg p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{message.name}</h3>
                        <p className="text-blue-600 text-sm sm:text-base break-all">{message.email}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{formatDate(message.timestamp)}</p>
                      </div>
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="flex items-center justify-center sm:justify-start mt-2 sm:mt-0 text-red-600 hover:text-red-800 transition-colors p-2 rounded-lg hover:bg-red-50"
                        title="Delete message"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span className="ml-1 text-xs sm:text-sm hidden sm:inline">Delete</span>
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-md p-3 sm:p-4">
                      <p className="text-gray-700 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
