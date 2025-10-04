// Mock analysis service - replace with actual AI integration

const mockAnalysisResults = {
  fake: {
    verdict: 'Fake',
    confidence: 87,
    signals: [
      { type: 'emotional', text: 'URGENT! BREAKING NEWS!', confidence: 95 },
      { type: 'source', text: 'Unverified source with no credibility', confidence: 82 },
      { type: 'factual', text: 'Contradicts established facts', confidence: 78 },
      { type: 'bias', text: 'Strong political bias detected', confidence: 71 }
    ],
    supportingEvidence: [
      { platform: 'Twitter/X', url: '#', title: 'Fact-check by @snopes', type: 'debunk' },
      { platform: 'Reddit', url: '#', title: 'Community discussion', type: 'discussion' },
      { platform: 'Reuters', url: '#', title: 'Official statement', type: 'official' }
    ],
    explanation: 'This content shows multiple indicators of fake news including emotional manipulation, unverified sources, and factual inconsistencies.'
  },
  real: {
    verdict: 'Real',
    confidence: 92,
    signals: [
      { type: 'source', text: 'Verified news organization with good reputation', confidence: 94 },
      { type: 'factual', text: 'Information aligns with established facts', confidence: 89 },
      { type: 'bias', text: 'Minimal bias detected', confidence: 85 }
    ],
    supportingEvidence: [
      { platform: 'AP News', url: '#', title: 'Corroborating report', type: 'official' },
      { platform: 'BBC', url: '#', title: 'Similar coverage', type: 'official' },
      { platform: 'FactCheck.org', url: '#', title: 'Fact-check verification', type: 'verification' }
    ],
    explanation: 'This content appears to be legitimate news from verified sources with factual accuracy and minimal bias.'
  },
  uncertain: {
    verdict: 'Uncertain',
    confidence: 58,
    signals: [
      { type: 'source', text: 'Mixed source credibility', confidence: 65 },
      { type: 'factual', text: 'Some claims need verification', confidence: 62 },
      { type: 'bias', text: 'Moderate bias present', confidence: 55 }
    ],
    supportingEvidence: [
      { platform: 'Wikipedia', url: '#', title: 'Background information', type: 'reference' },
      { platform: 'Reddit', url: '#', title: 'Community analysis', type: 'discussion' }
    ],
    explanation: 'This content requires additional verification. Some claims appear credible while others need further fact-checking.'
  }
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const analyzeTextContent = async ({ title, content }) => {
  await delay(2000); // Simulate processing time
  
  // Simple heuristic-based mock analysis
  const text = (title + ' ' + content).toLowerCase();
  
  // Check for fake news indicators
  const fakeIndicators = ['urgent', 'breaking', 'shocking', 'you won\'t believe', 'doctors hate this'];
  const realIndicators = ['verified', 'confirmed', 'official', 'according to sources'];
  
  const fakeScore = fakeIndicators.reduce((score, indicator) => 
    text.includes(indicator) ? score + 1 : score, 0);
  const realScore = realIndicators.reduce((score, indicator) => 
    text.includes(indicator) ? score + 1 : score, 0);
  
  // Determine verdict based on indicators
  if (fakeScore > realScore) {
    return mockAnalysisResults.fake;
  } else if (realScore > fakeScore) {
    return mockAnalysisResults.real;
  } else {
    return mockAnalysisResults.uncertain;
  }
};

const analyzeUrlContent = async ({ url }) => {
  await delay(2000); // Simulate processing time
  
  // TODO: Implement URL content extraction and analysis
  // For now, return mock result
  return mockAnalysisResults.fake;
};

const analyzeImageContent = async ({ imageBuffer, imageType }) => {
  await delay(3000); // Simulate OCR and image analysis
  
  // TODO: Implement OCR and image analysis
  // For now, return mock result
  return mockAnalysisResults.uncertain;
};

module.exports = {
  analyzeTextContent,
  analyzeUrlContent,
  analyzeImageContent
};
