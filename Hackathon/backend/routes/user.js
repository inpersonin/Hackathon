const express = require('express');
const Joi = require('joi');

const router = express.Router();

// Mock user data storage (replace with database)
let userAnalysisHistory = [];

// Validation schema for saving analysis
const saveAnalysisSchema = Joi.object({
  analysisId: Joi.string().required(),
  verdict: Joi.string().valid('Real', 'Fake', 'Uncertain').required(),
  confidence: Joi.number().min(0).max(100).required(),
  inputType: Joi.string().valid('text', 'url', 'image').required(),
  inputData: Joi.object().required(),
  results: Joi.object().required()
});

// Get user analysis history
router.get('/history', (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    // Sort by timestamp (newest first)
    const sortedHistory = userAnalysisHistory.sort((a, b) => 
      new Date(b.timestamp) - new Date(a.timestamp)
    );
    
    const paginatedHistory = sortedHistory.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: {
        history: paginatedHistory,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: userAnalysisHistory.length,
          pages: Math.ceil(userAnalysisHistory.length / limit)
        }
      }
    });
    
  } catch (error) {
    console.error('History retrieval error:', error);
    res.status(500).json({
      error: 'Retrieval Error',
      message: 'Failed to retrieve analysis history'
    });
  }
});

// Save analysis to user history
router.post('/save-analysis', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = saveAnalysisSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const { analysisId, verdict, confidence, inputType, inputData, results } = value;
    
    // Create history entry
    const historyEntry = {
      id: Date.now(),
      analysisId,
      verdict,
      confidence,
      inputType,
      inputData,
      results,
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };
    
    // Store in history (in real app, save to database)
    userAnalysisHistory.push(historyEntry);
    
    // Keep only last 100 analyses per user (mock implementation)
    if (userAnalysisHistory.length > 100) {
      userAnalysisHistory = userAnalysisHistory.slice(-100);
    }
    
    res.json({
      success: true,
      message: 'Analysis saved to history',
      data: {
        historyId: historyEntry.id,
        timestamp: historyEntry.timestamp
      }
    });
    
  } catch (error) {
    console.error('Save analysis error:', error);
    res.status(500).json({
      error: 'Save Error',
      message: 'Failed to save analysis to history'
    });
  }
});

// Delete analysis from history
router.delete('/history/:id', (req, res) => {
  try {
    const { id } = req.params;
    const analysisIndex = userAnalysisHistory.findIndex(item => item.id === parseInt(id));
    
    if (analysisIndex === -1) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'Analysis not found in history'
      });
    }
    
    userAnalysisHistory.splice(analysisIndex, 1);
    
    res.json({
      success: true,
      message: 'Analysis deleted from history'
    });
    
  } catch (error) {
    console.error('Delete analysis error:', error);
    res.status(500).json({
      error: 'Delete Error',
      message: 'Failed to delete analysis from history'
    });
  }
});

// Get user statistics
router.get('/stats', (req, res) => {
  try {
    const totalAnalyses = userAnalysisHistory.length;
    const realCount = userAnalysisHistory.filter(item => item.verdict === 'Real').length;
    const fakeCount = userAnalysisHistory.filter(item => item.verdict === 'Fake').length;
    const uncertainCount = userAnalysisHistory.filter(item => item.verdict === 'Uncertain').length;
    
    const averageConfidence = totalAnalyses > 0 
      ? (userAnalysisHistory.reduce((sum, item) => sum + item.confidence, 0) / totalAnalyses).toFixed(1)
      : 0;
    
    res.json({
      success: true,
      data: {
        totalAnalyses,
        verdicts: {
          real: realCount,
          fake: fakeCount,
          uncertain: uncertainCount
        },
        averageConfidence: parseFloat(averageConfidence),
        inputTypes: {
          text: userAnalysisHistory.filter(item => item.inputType === 'text').length,
          url: userAnalysisHistory.filter(item => item.inputType === 'url').length,
          image: userAnalysisHistory.filter(item => item.inputType === 'image').length
        }
      }
    });
    
  } catch (error) {
    console.error('User stats error:', error);
    res.status(500).json({
      error: 'Stats Error',
      message: 'Failed to retrieve user statistics'
    });
  }
});

module.exports = router;
