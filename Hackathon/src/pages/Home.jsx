import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Shield,
    ArrowRight,
    CheckCircle,
    Zap,
    Eye,
    Brain,
    Lock,
    Clock,
    TrendingUp,
    Users,
    Target,
    Sparkles,
    Star
} from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <Brain className="h-12 w-12" />,
            title: 'AI-Powered Detection',
            description: 'Advanced machine learning models analyze content for authenticity and credibility markers with 99.2% accuracy.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Eye className="h-12 w-12" />,
            title: 'Explainable Results',
            description: 'Get detailed explanations of why content is flagged as fake or misleading with supporting evidence.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Zap className="h-12 w-12" />,
            title: 'Real-Time Analysis',
            description: 'Instant analysis of text, URLs, and images with comprehensive feedback in under 3 seconds.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: <Shield className="h-12 w-12" />,
            title: 'Credibility Scoring',
            description: 'Multi-dimensional analysis including source verification, fact-checking, and bias detection.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Lock className="h-12 w-12" />,
            title: 'Privacy First',
            description: 'Your data is protected with end-to-end encryption and privacy-focused design principles.',
            color: 'from-red-500 to-rose-500'
        },
        {
            icon: <Clock className="h-12 w-12" />,
            title: '24/7 Monitoring',
            description: 'Continuous monitoring and updates to stay ahead of evolving misinformation tactics.',
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    const stats = [
        { number: '99.2%', label: 'Accuracy Rate', icon: <Target className="h-6 w-6" /> },
        { number: '1M+', label: 'Articles Analyzed', icon: <TrendingUp className="h-6 w-6" /> },
        { number: '50K+', label: 'Active Users', icon: <Users className="h-6 w-6" /> },
        { number: '24/7', label: 'Monitoring', icon: <Clock className="h-6 w-6" /> }
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-bg min-h-screen flex items-center">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl floating"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pulse-glow"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full text-primary-400 text-sm font-medium mb-8 border border-primary-500/30">
                                <Sparkles className="h-4 w-4 animate-pulse" />
                                <span>Multi-Agent Fake News Detection</span>
                                <Star className="h-4 w-4 text-yellow-400" />
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                                Detect
                                <span className="text-gradient block"> Fake News</span>
                                <span className="text-4xl md:text-5xl lg:text-6xl block mt-4">
                                    Instantly
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-amoled-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                                Advanced AI-powered platform that analyzes and explains fake or misleading news content
                                with <span className="text-primary-400 font-semibold">explainable results</span> and real-time feedback.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <Link
                                to="/dashboard"
                                className="btn-primary inline-flex items-center justify-center group text-lg px-10 py-4"
                            >
                                Start Analyzing Now
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/about"
                                className="btn-secondary inline-flex items-center justify-center group text-lg px-10 py-4"
                            >
                                Learn More
                                <Eye className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="glass-effect rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group">
                                        <div className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-amoled-400 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 section-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Why Choose Our Platform?
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-amoled-300 max-w-3xl mx-auto leading-relaxed">
                            Our multi-agent system provides comprehensive analysis with transparent, explainable results.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="card-hover group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-amoled-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 hero-bg relative">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pulse-glow"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to Start Detecting
                            <span className="text-gradient block mt-2">Fake News?</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl text-amoled-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of users who trust our platform for reliable fact-checking and content verification.
                            Get started in seconds with our intuitive dashboard.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/dashboard"
                                className="btn-primary inline-flex items-center justify-center group text-xl px-12 py-5"
                            >
                                Get Started Now
                                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/about"
                                className="btn-secondary inline-flex items-center justify-center group text-xl px-12 py-5"
                            >
                                View Demo
                                <Eye className="ml-3 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;