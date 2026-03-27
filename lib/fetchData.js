'use strict';

const CACHE = new Map();

const fetchData = async (url) => {
    // Check if data is cached
    if (CACHE.has(url)) {
        return CACHE.get(url);
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        // Cache the data
        CACHE.set(url, data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;  // Re-throw the error for further handling
    }
};

// Export the fetchData utility
module.exports = { fetchData };