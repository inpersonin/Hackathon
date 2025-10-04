import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    Link,
    Image,
    Send,
    CheckCircle,
    XCircle,
    AlertTriangle,
    ExternalLink,
    ThumbsUp,
    ThumbsDown,
    Sparkles,
    Brain,
    Eye,
    Shield,
    Clock,
    TrendingUp,
    BarChart3,
    Download,
    Share2,
    Bookmark,
    Star,
    Zap
} from 'lucide-react';
import { useAnalysis } from '../context/AnalysisContext';
import { getVerdictColor, getVerdictIcon } from '../utils/api';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('text');
    const [textTitle, setTextTitle] = useState('');
    const [textBody, setTextBody] = useState('');
    const [url, setUrl] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const {
        isAnalyzing,
        results,
        error,
        analyzeText,
        analyzeUrl,
        analyzeImage,
        submitFeedback
    } = useAnalysis();

    const handleAnalyze = async () => {
        if (activeTab === 'text' && textTitle && textBody) {
            await analyzeText({ title: textTitle, content: textBody });
        } else if (activeTab === 'url' && url) {
            await analyzeUrl({ url });
        } else if (activeTab === 'image' && imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);
            await analyzeImage(formData);
        }
    };

    const handleFeedback = async (feedback) => {
        await submitFeedback({
            analysisId: Date.now(), // Mock ID
            feedback: feedback,
            timestamp: new Date().toISOString()
        });
        setShowFeedback(false);
    };

    const tabs = [
        { id: 'text', name: 'Text Analysis', icon: <FileText className="h-5 w-5" />, description: 'Analyze news articles and text content' },
        { id: 'url', name: 'URL Analysis', icon: <Link className="h-5 w-5" />, description: 'Verify content from web URLs' },
        { id: 'image', name: 'Image Analysis', icon: <Image className="h-5 w-5" />, description: 'OCR and image content verification' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-amoled-950">
            {/* Header Section */}
            <div className="hero-bg py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full text-primary-400 text-sm font-medium mb-6 border border-primary-500/30">
                                <Sparkles className="h-4 w-4 animate-pulse" />
                                <span>AI-Powered Analysis Dashboard</span>
                                <Star className="h-4 w-4 text-yellow-400" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                News Analysis
                                <span className="text-gradient block">Dashboard</span>
                            </h1>
                            <p className="text-xl text-amoled-300 max-w-3xl mx-auto">
                                Analyze news content for authenticity and credibility with our advanced AI-powered detection system
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="card"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">Input Content</h2>
                                <p className="text-amoled-300">Choose your analysis method</p>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex space-x-1 mb-8 bg-amoled-800/50 rounded-xl p-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex flex-col items-center space-y-1 px-4 py-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-primary-600 text-white shadow-lg'
                                        : 'text-amoled-300 hover:text-white hover:bg-amoled-700/50'
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="text-xs">{tab.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === 'text' && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-white mb-3">News Title</label>
                                            <input
                                                type="text"
                                                value={textTitle}
                                                onChange={(e) => setTextTitle(e.target.value)}
                                                placeholder="Enter news headline..."
                                                className="input-field"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-white mb-3">News Content</label>
                                            <textarea
                                                value={textBody}
                                                onChange={(e) => setTextBody(e.target.value)}
                                                placeholder="Paste the news article content..."
                                                rows={8}
                                                className="input-field resize-none"
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'url' && (
                                    <div>
                                        <label className="block text-sm font-semibold text-white mb-3">News URL</label>
                                        <input
                                            type="url"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="https://example.com/news-article"
                                            className="input-field"
                                        />
                                        <p className="text-sm text-amoled-400 mt-3 flex items-center">
                                            <Eye className="h-4 w-4 mr-2" />
                                            We'll analyze the content from this URL for authenticity
                                        </p>
                                    </div>
                                )}

                                {activeTab === 'image' && (
                                    <div>
                                        <label className="block text-sm font-semibold text-white mb-3">Upload Image</label>
                                        <div className="border-2 border-dashed border-amoled-600 rounded-xl p-12 text-center hover:border-primary-500 transition-colors group">
                                            <Image className="h-16 w-16 text-amoled-400 mx-auto mb-4 group-hover:text-primary-400 transition-colors" />
                                            <p className="text-amoled-300 mb-2 font-medium">Drop an image here or click to browse</p>
                                            <p className="text-sm text-amoled-400">Supports JPG, PNG, GIF (OCR analysis)</p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setImageFile(e.target.files[0])}
                                                className="hidden"
                                                id="image-upload"
                                            />
                                            <label
                                                htmlFor="image-upload"
                                                className="btn-primary mt-6 cursor-pointer inline-block"
                                            >
                                                Choose File
                                            </label>
                                        </div>
                                        {imageFile && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mt-4 glass-effect rounded-xl p-4 border border-green-500/30"
                                            >
                                                <div className="flex items-center space-x-3 text-green-400">
                                                    <CheckCircle className="h-5 w-5" />
                                                    <span className="font-medium">Selected: {imageFile.name}</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || (activeTab === 'text' && (!textTitle || !textBody)) || (activeTab === 'url' && !url) || (activeTab === 'image' && !imageFile)}
                            className="btn-primary w-full mt-8 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isAnalyzing ? (
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                    <span>Analyzing Content...</span>
                                </>
                            ) : (
                                <>
                                    <Zap className="h-6 w-6 mr-3" />
                                    <span>Analyze Content</span>
                                </>
                            )}
                        </button>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 glass-effect rounded-xl p-4 border border-red-500/30"
                            >
                                <div className="flex items-center space-x-3 text-red-400">
                                    <XCircle className="h-5 w-5" />
                                    <span className="font-medium">Error: {error}</span>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {results && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="card"
                            >
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                        <BarChart3 className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Analysis Results</h3>
                                        <p className="text-amoled-300">Comprehensive content verification</p>
                                    </div>
                                </div>

                                {/* Verdict */}
                                <div className="mb-8">
                                    <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 ${getVerdictColor(results.verdict)}`}>
                                        {getVerdictIcon(results.verdict) === 'CheckCircle' && <CheckCircle className="h-8 w-8" />}
                                        {getVerdictIcon(results.verdict) === 'XCircle' && <XCircle className="h-8 w-8" />}
                                        {getVerdictIcon(results.verdict) === 'AlertTriangle' && <AlertTriangle className="h-8 w-8" />}
                                        <div>
                                            <span className="text-2xl font-bold">Verdict: {results.verdict}</span>
                                            <div className="text-sm opacity-80">AI Confidence Score</div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between text-sm text-amoled-300 mb-3">
                                            <span>Confidence Level</span>
                                            <span className="font-semibold">{results.confidence}%</span>
                                        </div>
                                        <div className="w-full bg-amoled-800 rounded-full h-4 overflow-hidden">
                                            <motion.div
                                                className={`h-4 rounded-full transition-all duration-1000 ${results.verdict === 'Real' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                                    results.verdict === 'Fake' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                                                        'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                    }`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${results.confidence}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Key Signals */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                        <Shield className="h-5 w-5 mr-2 text-primary-400" />
                                        Key Signals Detected
                                    </h4>
                                    <div className="space-y-3">
                                        {results.signals.map((signal, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="glass-effect rounded-xl p-4 hover:border-primary-500/30 transition-all duration-300"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="text-white font-semibold capitalize mb-1">{signal.type} Signal</p>
                                                        <p className="text-amoled-300 text-sm">{signal.text}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-primary-400 font-bold text-lg">
                                                            {signal.confidence}%
                                                        </span>
                                                        <div className="w-16 bg-amoled-700 rounded-full h-2 mt-1">
                                                            <div
                                                                className={`h-2 rounded-full transition-all duration-500 ${signal.confidence > 80 ? 'bg-red-500' :
                                                                    signal.confidence > 60 ? 'bg-yellow-500' : 'bg-green-500'
                                                                    }`}
                                                                style={{ width: `${signal.confidence}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => setShowFeedback(!showFeedback)}
                                        className="btn-secondary flex-1 flex items-center justify-center"
                                    >
                                        <ThumbsUp className="h-4 w-4 mr-2" />
                                        Provide Feedback
                                    </button>
                                    <button className="btn-secondary flex items-center justify-center px-4">
                                        <Share2 className="h-4 w-4" />
                                    </button>
                                    <button className="btn-secondary flex items-center justify-center px-4">
                                        <Bookmark className="h-4 w-4" />
                                    </button>
                                    <button className="btn-secondary flex items-center justify-center px-4">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Supporting Evidence */}
                        {results && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="card"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <ExternalLink className="h-5 w-5 mr-2 text-primary-400" />
                                    Supporting Evidence
                                </h3>
                                <div className="space-y-4">
                                    {results.supportingEvidence.map((evidence, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="glass-effect rounded-xl p-4 hover:bg-amoled-700/30 transition-all duration-300 group cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                                                        {evidence.title}
                                                    </p>
                                                    <p className="text-amoled-400 text-sm">{evidence.platform}</p>
                                                </div>
                                                <a
                                                    href={evidence.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary-400 hover:text-primary-300 transition-colors"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Analysis Tips */}
                        {!results && !isAnalyzing && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="card"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Brain className="h-5 w-5 mr-2 text-primary-400" />
                                    Analysis Tips
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-primary-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Provide Complete Context</p>
                                            <p className="text-amoled-300 text-sm">Include full articles and headlines for better accuracy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                                            <Shield className="h-4 w-4 text-primary-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Check Source Credibility</p>
                                            <p className="text-amoled-300 text-sm">Our AI evaluates source reputation and authority</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-4 w-4 text-primary-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">Real-Time Analysis</p>
                                            <p className="text-amoled-300 text-sm">Get results in seconds with detailed explanations</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Feedback Modal */}
                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            onClick={() => setShowFeedback(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="card max-w-md w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h3 className="text-xl font-bold text-white mb-6">Was this analysis helpful?</h3>
                                <div className="flex space-x-4 mb-6">
                                    <button
                                        onClick={() => handleFeedback('positive')}
                                        className="flex-1 btn-secondary flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300"
                                    >
                                        <ThumbsUp className="h-5 w-5 mr-2" />
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleFeedback('negative')}
                                        className="flex-1 btn-secondary flex items-center justify-center hover:bg-red-600 hover:border-red-500 transition-all duration-300"
                                    >
                                        <ThumbsDown className="h-5 w-5 mr-2" />
                                        No
                                    </button>
                                </div>
                                <button
                                    onClick={() => setShowFeedback(false)}
                                    className="w-full btn-secondary"
                                >
                                    Cancel
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard;