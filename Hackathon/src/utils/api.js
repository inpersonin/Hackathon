import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const apiEndpoints = {
  // Analysis endpoints
  analyzeText: (data) => api.post('/analyze/text', data),
  analyzeUrl: (data) => api.post('/analyze/url', data),
  analyzeImage: (data) => api.post('/analyze/image', data),
  
  // User endpoints
  getUserHistory: () => api.get('/user/history'),
  saveAnalysis: (data) => api.post('/user/save-analysis', data),
  
  // Feedback endpoints
  submitFeedback: (data) => api.post('/feedback', data),
  
  // Health check
  healthCheck: () => api.get('/health'),
};

// Mock data for development
export const mockAnalysisResults = {
  fake: {
    verdict: 'Fake',
    confidence: 87,
    signals: [
      { type: 'emotional', text: 'URGENT! BREAKING NEWS!', confidence: 95 },
      { type: 'source', text: 'Unverified source with no credibility', confidence: 82 },
      { type: 'factual', text: 'Contradicts established facts', confidence: 78 },
      { type: 'bias', text: 'Strong political bias detected', confidence: 71 }
    ],
    supportingEvidence: [
      { platform: 'Twitter/X', url: '#', title: 'Fact-check by @snopes', type: 'debunk' },
      { platform: 'Reddit', url: '#', title: 'Community discussion', type: 'discussion' },
      { platform: 'Reuters', url: '#', title: 'Official statement', type: 'official' }
    ],
    explanation: 'This content shows multiple indicators of fake news including emotional manipulation, unverified sources, and factual inconsistencies.'
  },
  real: {
    verdict: 'Real',
    confidence: 92,
    signals: [
      { type: 'source', text: 'Verified news organization with good reputation', confidence: 94 },
      { type: 'factual', text: 'Information aligns with established facts', confidence: 89 },
      { type: 'bias', text: 'Minimal bias detected', confidence: 85 }
    ],
    supportingEvidence: [
      { platform: 'AP News', url: '#', title: 'Corroborating report', type: 'official' },
      { platform: 'BBC', url: '#', title: 'Similar coverage', type: 'official' },
      { platform: 'FactCheck.org', url: '#', title: 'Fact-check verification', type: 'verification' }
    ],
    explanation: 'This content appears to be legitimate news from verified sources with factual accuracy and minimal bias.'
  },
  uncertain: {
    verdict: 'Uncertain',
    confidence: 58,
    signals: [
      { type: 'source', text: 'Mixed source credibility', confidence: 65 },
      { type: 'factual', text: 'Some claims need verification', confidence: 62 },
      { type: 'bias', text: 'Moderate bias present', confidence: 55 }
    ],
    supportingEvidence: [
      { platform: 'Wikipedia', url: '#', title: 'Background information', type: 'reference' },
      { platform: 'Reddit', url: '#', title: 'Community analysis', type: 'discussion' }
    ],
    explanation: 'This content requires additional verification. Some claims appear credible while others need further fact-checking.'
  }
};

// Mock API functions for development
export const mockApi = {
  analyzeText: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
    
    // Simulate different results based on content
    const content = (data.title + ' ' + data.content).toLowerCase();
    if (content.includes('urgent') || content.includes('breaking') || content.includes('shocking')) {
      return { data: mockAnalysisResults.fake };
    } else if (content.includes('verified') || content.includes('confirmed') || content.includes('official')) {
      return { data: mockAnalysisResults.real };
    } else {
      return { data: mockAnalysisResults.uncertain };
    }
  },
  
  analyzeUrl: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { data: mockAnalysisResults.fake };
  },
  
  analyzeImage: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { data: mockAnalysisResults.uncertain };
  },
  
  submitFeedback: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: { success: true } };
  }
};

// Utility functions
export const getVerdictColor = (verdict) => {
  switch (verdict) {
    case 'Real': return 'text-green-400 bg-green-900/20 border-green-500';
    case 'Fake': return 'text-red-400 bg-red-900/20 border-red-500';
    case 'Uncertain': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
    default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
  }
};

export const getVerdictIcon = (verdict) => {
  switch (verdict) {
    case 'Real': return 'CheckCircle';
    case 'Fake': return 'XCircle';
    case 'Uncertain': return 'AlertTriangle';
    default: return 'AlertTriangle';
  }
};

export default api;
