# Hedge Fund Picks & Robinhood Picks

A JavaScript-based project for analyzing and tracking investment picks from hedge funds and Robinhood platform.

## Features

- Track hedge fund investment picks
- Monitor Robinhood trending stocks
- Analyze investment trends
- Data aggregation and reporting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Usage

```bash
node src/index.js
```

## Project Structure

```
├── src/
│   ├── index.js          # Main entry point
│   ├── hedgeFunds.js     # Hedge fund picks logic
│   └── robinhood.js      # Robinhood picks logic
├── tests/                # Test files
├── data/                 # Data storage
├── .gitignore
├── package.json
└── README.md
```

## Configuration

Create a `.env` file in the root directory for API keys and configuration:

```
API_KEY=your_api_key_here
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit and push
4. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Alexander Koulichkov