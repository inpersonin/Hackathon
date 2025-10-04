import { useState } from 'react';
import { Shield, Github, Twitter, Linkedin, Mail, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
        }, 2000);
    };

    return (
        <footer className="bg-amoled-900/80 backdrop-blur-sm border-t border-amoled-800/50 mt-auto">
            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-primary-900/20 to-primary-800/20 border-b border-primary-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stay Updated with
                            <span className="text-gradient"> FakeNewsDetect</span>
                        </h3>
                        <p className="text-amoled-300 text-lg mb-8 max-w-2xl mx-auto">
                            Get the latest updates on AI-powered fact-checking, new features, and insights into combating misinformation.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-md mx-auto"
                        >
                            {!isSubscribed ? (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="input-field w-full"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="btn-primary flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Subscribing...
                                            </>
                                        ) : (
                                            <>
                                                Subscribe
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="glass-effect rounded-2xl p-6 border border-green-500/30"
                                >
                                    <div className="flex items-center justify-center space-x-3 text-green-400">
                                        <CheckCircle className="h-6 w-6" />
                                        <span className="text-lg font-semibold">Successfully Subscribed!</span>
                                    </div>
                                    <p className="text-amoled-300 mt-2">
                                        Thank you for joining our community. You'll receive updates soon!
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <Shield className="h-10 w-10 text-primary-500" />
                                <Star className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-gradient">FakeNewsDetect</span>
                                <div className="text-xs text-primary-400 font-medium">
                                    AI-Powered Verification
                                </div>
                            </div>
                        </div>
                        <p className="text-amoled-300 text-sm max-w-md leading-relaxed mb-6">
                            Advanced AI-powered platform for detecting and explaining fake or misleading news content.
                            Built with cutting-edge machine learning technologies for reliable fact-checking and transparency.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-amoled-400">
                            <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span>4.9/5 Rating</span>
                            </div>
                            <span>•</span>
                            <span>50K+ Users</span>
                            <span>•</span>
                            <span>99.2% Accuracy</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-amoled-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Connect With Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-amoled-800 hover:bg-primary-600 flex items-center justify-center text-amoled-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-amoled-800 hover:bg-primary-600 flex items-center justify-center text-amoled-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-amoled-800 hover:bg-primary-600 flex items-center justify-center text-amoled-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:contact@fakenewsdetect.com"
                                className="w-12 h-12 rounded-xl bg-amoled-800 hover:bg-primary-600 flex items-center justify-center text-amoled-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center text-amoled-300">
                                <Mail className="h-4 w-4 mr-3 text-primary-400" />
                                <span>contact@fakenewsdetect.com</span>
                            </div>
                            <div className="flex items-center text-amoled-300">
                                <Shield className="h-4 w-4 mr-3 text-primary-400" />
                                <span>24/7 Support Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-amoled-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-amoled-400 text-sm">
                        © 2024 FakeNewsDetect. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <p className="text-amoled-400 text-sm">
                            Built with ❤️ for truth and transparency
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-amoled-400">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>Trusted by 50K+ users</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;