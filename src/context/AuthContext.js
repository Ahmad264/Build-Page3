import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loading: true
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check for stored token
      const token = localStorage.getItem('authToken');
      
      if (token) {
        // Verify token with backend (when available)
        // For now, we'll use a mock user
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          isClubMember: true
        };
        setUser(mockUser);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Mock login - replace with actual API call
      if (email && password) {
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: email,
          isClubMember: true
        };
        
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        // Store token
        localStorage.setItem('authToken', mockToken);
        setUser(mockUser);
        
        return { success: true, user: mockUser };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
