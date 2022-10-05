
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import './navbar.css'
const Navbar = () => {
    const items = [
        {
            label: 'Rent',
        },
        {
            label: 'Buy',
        }, {
            label: 'Sell',
        }, {
            label: 'Manage Property',
        },
        {
            label: 'Resources',
        }
    ];

    const start = <img alt="logo" src={require("./../../images/logo.png")} height="40" className="mr-2 cursor-pointer"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div className='col-12'>
            <Menubar className='navbar' model={items} start={start} end={end} />
        </div>
    );
}

export default Navbar