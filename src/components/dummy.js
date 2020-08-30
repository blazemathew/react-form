import React, { useState, useEffect } from 'react';

const Dummy = () => {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.total));
    }, []);

    return(
        <React.Fragment>
            <h1><center>Get Request Example</center></h1>
            <h2>Total react packages: {totalReactPackages}</h2>
        </React.Fragment>
    );
}

export default Dummy;