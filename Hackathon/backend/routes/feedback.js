const express = require('express');
const Joi = require('joi');

const router = express.Router();

// Mock feedback storage (replace with database)
let feedbackStorage = [];

// Validation schema
const feedbackSchema = Joi.object({
  analysisId: Joi.string().required(),
  feedback: Joi.string().valid('positive', 'negative').required(),
  comment: Joi.string().max(500).optional(),
  timestamp: Joi.string().isoDate().optional()
});

// Submit feedback endpoint
router.post('/', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = feedbackSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const { analysisId, feedback, comment, timestamp } = value;
    
    // Store feedback (in real app, save to database)
    const feedbackEntry = {
      id: Date.now(),
      analysisId,
      feedback,
      comment,
      timestamp: timestamp || new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };
    
    feedbackStorage.push(feedbackEntry);
    
    res.json({
      success: true,
      message: 'Feedback submitted successfully',
      data: {
        feedbackId: feedbackEntry.id,
        timestamp: feedbackEntry.timestamp
      }
    });
    
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({
      error: 'Submission Error',
      message: 'Failed to submit feedback'
    });
  }
});

// Get feedback statistics (admin endpoint)
router.get('/stats', (req, res) => {
  try {
    const totalFeedback = feedbackStorage.length;
    const positiveFeedback = feedbackStorage.filter(f => f.feedback === 'positive').length;
    const negativeFeedback = feedbackStorage.filter(f => f.feedback === 'negative').length;
    
    res.json({
      success: true,
      data: {
        total: totalFeedback,
        positive: positiveFeedback,
        negative: negativeFeedback,
        satisfaction: totalFeedback > 0 ? (positiveFeedback / totalFeedback * 100).toFixed(1) : 0
      }
    });
    
  } catch (error) {
    console.error('Feedback stats error:', error);
    res.status(500).json({
      error: 'Stats Error',
      message: 'Failed to retrieve feedback statistics'
    });
  }
});

// Get all feedback (admin endpoint)
router.get('/', (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    const paginatedFeedback = feedbackStorage.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: {
        feedback: paginatedFeedback,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: feedbackStorage.length,
          pages: Math.ceil(feedbackStorage.length / limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Feedback retrieval error:', error);
    res.status(500).json({
      error: 'Retrieval Error',
      message: 'Failed to retrieve feedback'
    });
  }
});

module.exports = router;
