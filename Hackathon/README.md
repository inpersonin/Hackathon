# 🛡️ Multi-Agent Fake News Detection Platform

A modern, AI-powered web platform for detecting and explaining fake or misleading news content with explainable results and real-time feedback.

## 🌟 Features

- **Multi-Modal Analysis**: Support for text, URL, and image analysis
- **Explainable AI**: Detailed explanations of why content is flagged as fake
- **Real-Time Processing**: Instant analysis with confidence scores
- **Interactive Dashboard**: Modern, responsive UI with smooth animations
- **Feedback System**: User feedback integration for continuous improvement
- **AMOLED Design**: Elegant AMOLED black theme with light blue accents
- **Rich Animations**: Smooth transitions, floating elements, and interactive effects
- **Newsletter Signup**: Email subscription system in footer
- **Professional UI**: Glass effects, gradients, and modern design patterns

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Multer** - File upload handling
- **Joi** - Input validation
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Hackathon/
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── context/           # React context providers
│   ├── utils/             # Utility functions
│   └── App.jsx            # Main App component
├── backend/               # Backend API server
│   ├── routes/            # API route handlers
│   ├── services/          # Business logic services
│   └── server.js          # Main server file
└── public/                # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173`

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp env.example .env
   ```

4. **Start the server**:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

5. **API will be available at**: `http://localhost:3001`

## 🎯 Usage

### 1. Home Page
- Landing page with platform introduction
- Call-to-action buttons to start analysis
- Feature highlights and statistics

### 2. Dashboard
- **Text Analysis**: Paste news title and content
- **URL Analysis**: Enter news article URL
- **Image Analysis**: Upload image for OCR analysis
- View analysis results with confidence scores
- Interactive feedback system

### 3. Results Display
- **Verdict**: Real/Fake/Uncertain with colored badges
- **Confidence Score**: Progress bar visualization
- **Key Signals**: Highlighted indicators
- **Supporting Evidence**: External verification links

## 🔌 API Endpoints

### Analysis Endpoints
- `POST /api/analyze/text` - Analyze text content
- `POST /api/analyze/url` - Analyze URL content  
- `POST /api/analyze/image` - Analyze image content

### User Endpoints
- `GET /api/user/history` - Get analysis history
- `POST /api/user/save-analysis` - Save analysis
- `GET /api/user/stats` - Get user statistics

### Feedback Endpoints
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/stats` - Get feedback statistics

## 🎨 Design System

### Colors
- **Primary**: Light Blue (#0EA5E9)
- **Background**: AMOLED Black (#000000)
- **Cards**: AMOLED Dark (#171717)
- **Text**: White with gray variations
- **Accents**: Gradient blue effects

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Elevated with shadows and borders
- **Inputs**: Dark theme with focus states
- **Animations**: Smooth transitions and hover effects

## 🔮 Future Enhancements

### AI Integration
- Replace mock analysis with real AI models
- Integrate with OpenAI, Google AI, or custom models
- Implement multi-agent analysis system

### Database Integration
- User authentication and profiles
- Analysis history persistence
- Feedback analytics and reporting

### Advanced Features
- Real-time fact-checking
- Source credibility scoring
- Bias detection algorithms
- Community verification system

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku)
```bash
# Set environment variables
# Deploy backend/ folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built for hackathon demonstration
- Mock data and analysis for development purposes
- Ready for real AI integration
- Modern, responsive design with accessibility in mind

---

**Note**: This is a demonstration platform with mock AI analysis. For production use, integrate with real AI services and implement proper security measures.