# FakeNewsDetect Backend API

A Node.js/Express backend API for the Fake News Detection Platform.

## Features

- RESTful API endpoints for news analysis
- Text, URL, and image content analysis
- User feedback system
- Analysis history tracking
- Rate limiting and security middleware
- Mock AI analysis (ready for real AI integration)

## API Endpoints

### Analysis Endpoints
- `POST /api/analyze/text` - Analyze text content
- `POST /api/analyze/url` - Analyze URL content
- `POST /api/analyze/image` - Analyze image content (with OCR)

### User Endpoints
- `GET /api/user/history` - Get user analysis history
- `POST /api/user/save-analysis` - Save analysis to history
- `DELETE /api/user/history/:id` - Delete analysis from history
- `GET /api/user/stats` - Get user statistics

### Feedback Endpoints
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/stats` - Get feedback statistics
- `GET /api/feedback` - Get all feedback (admin)

### Utility Endpoints
- `GET /api/health` - Health check
- `GET /` - API information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp env.example .env
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables

See `env.example` for required environment variables.

## Development

The backend uses mock analysis services that simulate AI processing. To integrate with real AI services:

1. Update `services/analysisService.js` with actual API calls
2. Add API keys to environment variables
3. Implement proper error handling and timeouts

## Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Input validation with Joi
- File upload validation

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication and authorization
- Real AI/ML model integration
- Caching layer (Redis)
- Monitoring and logging
- API documentation (Swagger)
