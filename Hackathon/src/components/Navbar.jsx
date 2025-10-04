import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="glass-effect sticky top-0 z-50 border-b border-amoled-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Shield className="h-10 w-10 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
                            <Sparkles className="h-4 w-4 text-primary-400 absolute -top-1 -right-1 animate-pulse" />
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                                FakeNewsDetect
                            </span>
                            <div className="text-xs text-primary-400 font-medium">
                                AI-Powered Verification
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(item.path)
                                    ? 'text-primary-400 bg-primary-900/20 border border-primary-500/30'
                                    : 'text-amoled-300 hover:text-white hover:bg-amoled-800/50'
                                    }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/dashboard"
                            className="btn-primary text-sm px-6 py-2"
                        >
                            Try Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-amoled-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-amoled-800/50 transition-colors duration-300"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-4 space-y-1 border-t border-amoled-800/50">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive(item.path)
                                            ? 'text-primary-400 bg-primary-900/20 border border-primary-500/30'
                                            : 'text-amoled-300 hover:text-white hover:bg-amoled-800/50'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/dashboard"
                                    className="btn-primary w-full text-center mt-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Try Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;