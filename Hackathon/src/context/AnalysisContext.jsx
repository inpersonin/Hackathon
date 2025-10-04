import { createContext, useContext, useReducer } from 'react';
import { mockApi } from '../utils/api';

const AnalysisContext = createContext();

const initialState = {
    isAnalyzing: false,
    results: null,
    history: [],
    error: null,
    feedback: null
};

const analysisReducer = (state, action) => {
    switch (action.type) {
        case 'ANALYSIS_START':
            return {
                ...state,
                isAnalyzing: true,
                error: null,
                results: null
            };

        case 'ANALYSIS_SUCCESS':
            return {
                ...state,
                isAnalyzing: false,
                results: action.payload,
                error: null,
                history: [action.payload, ...state.history.slice(0, 9)] // Keep last 10 analyses
            };

        case 'ANALYSIS_ERROR':
            return {
                ...state,
                isAnalyzing: false,
                error: action.payload,
                results: null
            };

        case 'CLEAR_RESULTS':
            return {
                ...state,
                results: null,
                error: null
            };

        case 'SUBMIT_FEEDBACK':
            return {
                ...state,
                feedback: action.payload
            };

        default:
            return state;
    }
};

export const AnalysisProvider = ({ children }) => {
    const [state, dispatch] = useReducer(analysisReducer, initialState);

    const analyzeText = async (data) => {
        dispatch({ type: 'ANALYSIS_START' });
        try {
            const response = await mockApi.analyzeText(data);
            dispatch({ type: 'ANALYSIS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'ANALYSIS_ERROR', payload: error.message });
        }
    };

    const analyzeUrl = async (data) => {
        dispatch({ type: 'ANALYSIS_START' });
        try {
            const response = await mockApi.analyzeUrl(data);
            dispatch({ type: 'ANALYSIS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'ANALYSIS_ERROR', payload: error.message });
        }
    };

    const analyzeImage = async (data) => {
        dispatch({ type: 'ANALYSIS_START' });
        try {
            const response = await mockApi.analyzeImage(data);
            dispatch({ type: 'ANALYSIS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'ANALYSIS_ERROR', payload: error.message });
        }
    };

    const submitFeedback = async (data) => {
        try {
            await mockApi.submitFeedback(data);
            dispatch({ type: 'SUBMIT_FEEDBACK', payload: data });
        } catch (error) {
            console.error('Feedback submission failed:', error);
        }
    };

    const clearResults = () => {
        dispatch({ type: 'CLEAR_RESULTS' });
    };

    const value = {
        ...state,
        analyzeText,
        analyzeUrl,
        analyzeImage,
        submitFeedback,
        clearResults
    };

    return (
        <AnalysisContext.Provider value={value}>
            {children}
        </AnalysisContext.Provider>
    );
};

export const useAnalysis = () => {
    const context = useContext(AnalysisContext);
    if (!context) {
        throw new Error('useAnalysis must be used within an AnalysisProvider');
    }
    return context;
};
