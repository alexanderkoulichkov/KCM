import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockPicks = () => {
    const [hedgeFundPicks, setHedgeFundPicks] = useState([]);
    const [trendingStocks, setTrendingStocks] = useState([]);
    
    useEffect(() => {
        // Fetch hedge fund picks
        const fetchHedgeFundPicks = async () => {
            const response = await axios.get('/api/hedge-fund-picks');
            setHedgeFundPicks(response.data);
        };

        // Fetch Robinhood trending stocks
        const fetchTrendingStocks = async () => {
            const response = await axios.get('/api/robinhood-trending-stocks');
            setTrendingStocks(response.data);
        };

        fetchHedgeFundPicks();
        fetchTrendingStocks();
    }, []);

    return (
        <div className="stock-picks">
            <h1>Hedge Fund Picks</h1>
            <ul>
                {hedgeFundPicks.map((pick) => (
                    <li key={pick.id}>{pick.name}: {pick.pick}</li>
                ))}
            </ul>
            <h1>Trending Stocks</h1>
            <ul>
                {trendingStocks.map((stock) => (
                    <li key={stock.id}>{stock.symbol}: {stock.name}</li>
                ))}
            </ul>
            <style jsx>{` 
                .stock-picks {
                    padding: 20px;
                    background: #f5f5f5;
                }
                h1 {
                    color: #333;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    margin: 10px 0;
                }
            `}</style>
        </div>
    );
};

export default StockPicks;
