const express = require('express');
const multer = require('multer');
const Joi = require('joi');
const { analyzeTextContent, analyzeUrlContent, analyzeImageContent } = require('../services/analysisService');

const router = express.Router();

// Configure multer for image uploads
const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Validation schemas
const textAnalysisSchema = Joi.object({
  title: Joi.string().min(1).max(500).required(),
  content: Joi.string().min(1).max(10000).required()
});

const urlAnalysisSchema = Joi.object({
  url: Joi.string().uri().required()
});

// Text analysis endpoint
router.post('/text', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = textAnalysisSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const { title, content } = value;
    
    // TODO: Replace with actual AI analysis
    const result = await analyzeTextContent({ title, content });
    
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Text analysis error:', error);
    res.status(500).json({
      error: 'Analysis Error',
      message: 'Failed to analyze text content'
    });
  }
});

// URL analysis endpoint
router.post('/url', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = urlAnalysisSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const { url } = value;
    
    // TODO: Replace with actual AI analysis
    const result = await analyzeUrlContent({ url });
    
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('URL analysis error:', error);
    res.status(500).json({
      error: 'Analysis Error',
      message: 'Failed to analyze URL content'
    });
  }
});

// Image analysis endpoint
router.post('/image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'Image file is required'
      });
    }

    const imageBuffer = req.file.buffer;
    const imageType = req.file.mimetype;
    
    // TODO: Replace with actual AI analysis (OCR + image analysis)
    const result = await analyzeImageContent({ imageBuffer, imageType });
    
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Image analysis error:', error);
    res.status(500).json({
      error: 'Analysis Error',
      message: 'Failed to analyze image content'
    });
  }
});

module.exports = router;
