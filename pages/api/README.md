# KCM - Koulichkov Capital Management

A Next.js-powered hedge fund intelligence platform for analyzing institutional positions and generating AI-powered stock recommendations optimized for Robinhood trading.

## Features

- 📊 **Hedge Fund Intelligence**: Track top institutional positions and conviction levels
- 🤖 **AI-Powered Analysis**: Claude-powered stock picking engine with buying/shorting metrics
- 💰 **Robinhood Ready**: Direct integration for retail traders
- 📈 **Real-time Data**: Alpha Vantage integration for live stock prices and fundamentals
- 🎯 **Strategy Filtering**: Multiple investment strategies (Momentum, Value, Growth, AI/Tech, etc.)
- 📋 **Risk Management**: Customizable risk tolerance and time horizons
- 📑 **SEC 13F Integration**: Institutional holdings tracking (coming soon)

## Tech Stack

- **Frontend**: React 18 with Next.js 14
- **Backend**: Next.js API routes
- **AI**: Anthropic Claude API
- **Data Sources**: 
  - Alpha Vantage (real-time stock prices & fundamentals)
  - SEC EDGAR (13F institutional filings - free)
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- API keys:
  - [Anthropic Claude API key](https://console.anthropic.com) (free tier available)
  - [Alpha Vantage API key](https://www.alphavantage.co/api/) (free tier: 5 calls/min)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/alexanderkoulichkov/KCM.git
cd KCM
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env.local.example .env.local
```

4. **Add your API keys to `.env.local`:**
```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
ALPHA_VANTAGE_API_KEY=your-alpha-vantage-key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

5. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### POST /api/scan
Generate stock recommendations based on hedge fund positioning and filters.

**Request:**
```json
{
  "strategies": "momentum, value, growth",
  "risk": "moderate",
  "horizon": "6-12 months",
  "market": "US large cap"
}
```

**Response:**
```json
{
  "stocks": [
    {
      "ticker": "NVDA",
      "company": "NVIDIA Corporation",
      "sector": "Semiconductors",
      "strategy": "AI Growth",
      "conviction": "high",
      "risk": "Medium",
      "thesis": "...",
      "hedgeFunds": "Tiger Global, Coatue, D1 Capital"
    }
  ],
  "briefing": "Market intelligence briefing...",
  "timestamp": "Q1 2026"
}
```

### GET /api/alphavantage
Fetch real-time stock price data.

**Query Parameters:**
- `symbol` (required): Stock ticker (e.g., `NVDA`)
- `function` (optional): Alpha Vantage function (default: `TIME_SERIES_DAILY`)

**Response:**
```json
{
  "symbol": "NVDA",
  "date": "2026-03-27",
  "price": 875.50,
  "high": 885.00,
  "low": 870.00,
  "volume": 45000000
}
```

### GET /api/sec13f
Fetch SEC 13F institutional holdings (coming soon).

## Deployment to Vercel

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Vercel:**
```bash
npm install -g vercel
vercel login
vercel deploy
```

3. **Set environment variables in Vercel dashboard:**
   - `ANTHROPIC_API_KEY`
   - `ALPHA_VANTAGE_API_KEY`

## Development Roadmap

- [x] Next.js project scaffold
- [x] Claude API integration
- [ ] Alpha Vantage real-time data integration
- [ ] SEC 13F filing parser
- [ ] Conviction level algorithm based on hedge fund consensus
- [ ] Portfolio tracking feature (local storage)
- [ ] Mobile responsive design
- [ ] User authentication & saved preferences
- [ ] Historical performance analytics
- [ ] Hedge fund database with rankings

## Important Disclaimer

**FOR EDUCATIONAL AND RESEARCH PURPOSES ONLY — NOT FINANCIAL OR INVESTMENT ADVICE.**

KCM AI Research surfaces publicly available institutional positioning data. This platform does not provide personalized financial advice. Always conduct your own due diligence before investing. Past performance does not guarantee future results. Investing in stocks involves risk, including potential loss of principal.

## API Rate Limits

- **Anthropic Claude**: Check [pricing page](https://www.anthropic.com/pricing)
- **Alpha Vantage Free Tier**: 5 API calls per minute, 500 per day
- Consider upgrading or implementing caching for production use

## Contributing

To contribute, please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions, please [open a GitHub issue](https://github.com/alexanderkoulichkov/KCM/issues).

## Author

Created by Alexander Koulichkov

---

**Made with ❤️ for retail investors who want institutional-grade insights**
