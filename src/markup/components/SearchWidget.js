import React, { useState } from 'react';

const SearchWidget = () => {

    const [query, setQuery] = useState('');

    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchWidget;
