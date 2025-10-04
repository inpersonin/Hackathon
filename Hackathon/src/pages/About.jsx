import { motion } from 'framer-motion';
import {
    Shield,
    Brain,
    Users,
    Target,
    Zap,
    Lock,
    Globe,
    Award,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Star,
    Sparkles,
    Cpu,
    Database,
    Network
} from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Brain className="h-12 w-12" />,
            title: 'Advanced AI Models',
            description: 'Multi-agent system using state-of-the-art machine learning algorithms for content analysis.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Shield className="h-12 w-12" />,
            title: 'Credibility Assessment',
            description: 'Comprehensive evaluation of source credibility, fact-checking, and bias detection.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Zap className="h-12 w-12" />,
            title: 'Real-Time Processing',
            description: 'Instant analysis with detailed explanations and supporting evidence.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: <Lock className="h-12 w-12" />,
            title: 'Privacy First',
            description: 'Your data is protected with end-to-end encryption and privacy-focused design.',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const stats = [
        { number: '99.2%', label: 'Accuracy Rate', icon: <Target className="h-8 w-8" /> },
        { number: '1M+', label: 'Articles Analyzed', icon: <TrendingUp className="h-8 w-8" /> },
        { number: '50K+', label: 'Active Users', icon: <Users className="h-8 w-8" /> },
        { number: '24/7', label: 'Monitoring', icon: <Globe className="h-8 w-8" /> }
    ];

    const technologies = [
        { name: 'Natural Language Processing', description: 'Advanced NLP models for text analysis' },
        { name: 'Computer Vision', description: 'Image and video content verification' },
        { name: 'Machine Learning', description: 'Deep learning algorithms for pattern recognition' },
        { name: 'Blockchain', description: 'Immutable verification records' },
        { name: 'API Integration', description: 'Real-time fact-checking services' },
        { name: 'Cloud Computing', description: 'Scalable infrastructure for global reach' }
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
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
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
                                <Award className="h-4 w-4" />
                                <span>Trusted by Millions Worldwide</span>
                                <Star className="h-4 w-4 text-yellow-400" />
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                                About
                                <span className="text-gradient block">FakeNewsDetect</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-amoled-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                                We're building the future of truth verification through advanced AI technology
                                and <span className="text-primary-400 font-semibold">explainable machine learning</span> systems.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="glass-effect rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group">
                                        <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
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

            {/* Mission Section */}
            <section className="py-24 section-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                Our Mission
                            </h2>
                            <div className="space-y-6 text-lg text-amoled-300 leading-relaxed">
                                <p>
                                    In an era of information overload and sophisticated misinformation campaigns,
                                    we believe that truth should be accessible, verifiable, and transparent.
                                </p>
                                <p>
                                    Our mission is to empower individuals and organizations with the tools they need
                                    to make informed decisions in a complex digital landscape.
                                </p>
                                <p>
                                    Through cutting-edge AI technology and explainable machine learning, we provide
                                    real-time analysis of news content with detailed explanations of our findings,
                                    helping users understand not just what is fake, but why it's fake.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center space-x-4">
                                <div className="flex items-center space-x-2 text-primary-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-semibold">Verified Technology</span>
                                </div>
                                <div className="flex items-center space-x-2 text-primary-400">
                                    <Shield className="h-5 w-5" />
                                    <span className="font-semibold">Privacy Protected</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <div className="glass-effect rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                            <Target className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Accuracy First</h4>
                                            <p className="text-amoled-300 text-sm">We prioritize precision and reliability in all our analyses.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                            <Lock className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Privacy Protection</h4>
                                            <p className="text-amoled-300 text-sm">Your data is secure with end-to-end encryption.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                            <Brain className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Transparency</h4>
                                            <p className="text-amoled-300 text-sm">Explainable AI provides clear reasoning for all decisions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-24 hero-bg relative">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pulse-glow"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Advanced Technology Stack
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-amoled-300 max-w-3xl mx-auto leading-relaxed">
                            Our platform leverages state-of-the-art machine learning models and natural language processing techniques.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="card-hover group"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Cpu className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                                        {tech.name}
                                    </h3>
                                </div>
                                <p className="text-amoled-300 leading-relaxed">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
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
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-8">
                            How We Work
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-amoled-300 max-w-3xl mx-auto leading-relaxed">
                            Our multi-agent system combines multiple AI models for comprehensive analysis.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="card-hover text-center group"
                            >
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} p-5 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
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
                            Join the Fight Against
                            <span className="text-gradient block">Misinformation</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl text-amoled-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Help us build a more informed world. Try our platform today and experience
                            the power of explainable AI in fact-checking.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="/dashboard"
                                className="btn-primary inline-flex items-center justify-center group text-xl px-12 py-5"
                            >
                                Start Analyzing Now
                                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                            </a>
                            <a
                                href="/dashboard"
                                className="btn-secondary inline-flex items-center justify-center group text-xl px-12 py-5"
                            >
                                View Demo
                                <Sparkles className="ml-3 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;