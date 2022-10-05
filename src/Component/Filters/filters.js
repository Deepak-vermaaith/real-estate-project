
import React, { useRef, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './filters.css'
import { ProgressSpinner } from 'primereact';
const Filters = (props) => {
    const menu = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [date3, setDate3] = useState(null);
    const [selectedHouse, setSelectedHouse] = useState(null);
    const locations = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
    const prices = [
        { name: 50000 },
        { name: 100000 },
        { name: 200000 },
        { name: 300000 },
        { name: 400000 },
    ];
    const Houses = [
        { name: 'Home' },
        { name: 'Flat' },
        { name: 'Room' },
    ];
    const onLocationChange = (e) => {
        setSelectedLocation(e.value);
        const searchVal = {
            'location': e.value,
        }
        props.updateCardData(searchVal);
    }
    const onPriceChange = (e) => {
        setSelectedPrice(e.value);
        const searchVal = {
            'price': e.value,
        }
        props.updateCardData(searchVal);

    }
    const onHouseChange = (e) => {
        const searchVal = {
            'houseType': e.value,
        }
        setSelectedHouse(e.value);
        props.updateCardData(searchVal);

    }
    const search = () => {
        const date = formatDate(date3)
        const searchVal = {
            'location': selectedLocation,
            'houseType': selectedHouse,
            'price': selectedPrice,
            'date': date
        }
        props.updateSearch(searchVal);

    }
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    const onChangeDate3 = (val) => {
        const searchVal = {
            'date': val
        }
        setDate3(val);
        props.updateCardData(searchVal);

    }
    return (
        <div className='grid filter-section'>
            <div className='col-10 grid'>
                <div className='col-3'>
                    <p>locations</p>
                    <Dropdown value={selectedLocation} options={locations} onChange={onLocationChange} optionLabel="name" placeholder="Select a location" />
                </div>
                <div className='col-3'>
                    <p>When</p>
                    <Calendar id="icon" value={date3} onChange={(e) => onChangeDate3(e.value)} showIcon />
                </div>

                <div className='col-3'>
                    <p>Price</p>
                    <Dropdown value={selectedPrice} options={prices} onChange={onPriceChange} optionLabel="name" placeholder="Select a price" />
                </div>
                <div className='col-3'>
                    <p>House type</p>
                    <Dropdown value={selectedHouse} options={Houses} onChange={onHouseChange} optionLabel="name" placeholder="Select a house" />
                </div>
            </div>
            <div className='col-2 pt-6'>
                {selectedHouse && selectedLocation && selectedPrice && date3 ?
                    <Button onClick={search} label="Search" aria-label="Search" /> :
                    <Button label="Search" disabled />}
            </div>
        </div>
    );
}

export default Filters;