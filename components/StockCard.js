import React from 'react';

const StockCard = ({ stock }) => {
    const { name, price, changePercentage, volume, marketCap } = stock;

    return (
        <div className="stock-card">
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Change: {changePercentage}%</p>
            <p>Volume: {volume}</p>
            <p>Market Cap: ${marketCap.toLocaleString()}</p>
        </div>
    );
};

export default StockCard;