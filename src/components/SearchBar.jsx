import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useNavigate } from 'react-router-dom';
import { mockTrips } from '../utils/trips';

const animatedComponents = makeAnimated();

const SearchBar = () => {
    const navigate = useNavigate();

    const tripOptions = mockTrips.map(trip => ({
        value: trip.id,
        label: trip.destination,
        trip: trip
    }));

    const handleChange = (selectedOption) => {
        if (selectedOption) {
            navigate(`/trips/${selectedOption.value}`);
        }
    };

    return (
        <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            isClearable={true}
            isSearchable={true}
            options={tripOptions}
            onChange={handleChange}
            placeholder="Search destinations..."
            className='w-screen max-w-full mx-auto my-4 rounded-lg text-zinc-950 shadow-lg'
            styles={{
                placeholder: (provided) => ({
                    ...provided,
                    color: '#18181b'
                }),
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'transparent', // Change this to your desired color
                    borderColor: state.isFocused ? '#3182ce' : '#cbd5e1',
                    boxShadow: state.isFocused ? '0 0 0 1px #3182ce' : provided.boxShadow,
                }),
                menu: (provided) => ({
                    ...provided,
                    backgroundImage: 'linear-gradient(to right, #f0fdf4, #dcfce7)', // Optional: dropdown menu color
                }),
            }}
        />
    );
}

export default SearchBar;