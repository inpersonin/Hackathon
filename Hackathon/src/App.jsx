import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { AnalysisProvider } from './context/AnalysisContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', padding: '2rem', fontSize: '1.5rem' }}>
          <h1 style={{ color: 'red' }}>Something went wrong!</h1>
          <pre style={{ background: '#333', padding: '1rem', overflow: 'auto', fontSize: '1rem' }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-amoled-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
              <ErrorBoundary>
                <AnalysisProvider>
                  <Dashboard />
                </AnalysisProvider>
              </ErrorBoundary>
            } />
            <Route path="/about" element={
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;