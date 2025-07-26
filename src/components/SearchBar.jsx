import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { mockTrips } from '../utils/trips';

const animatedComponents = makeAnimated();

const SearchBar = () => {
    const [selectedTrips, setSelectedTrips] = useState([]);
    
    // Transform mockTrips into format required by react-select
    const tripOptions = mockTrips.map(trip => ({
        value: trip.id,
        label: trip.destination,
        trip: trip // Keep original trip data
    }));

    const handleChange = (selectedOptions) => {
        setSelectedTrips(selectedOptions);
        console.log("Selected trips:", selectedOptions);
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[tripOptions[0], tripOptions[1]]}
            isMulti
            options={tripOptions}
            onChange={handleChange}
            placeholder="Search destinations..."
            className='w-screen max-w-full mx-auto my-4 rounded-lg bg-transparent'
        />
    );
}

export default SearchBar;