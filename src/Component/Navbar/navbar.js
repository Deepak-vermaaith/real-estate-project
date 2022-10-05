
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
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
    const end = <>
        <Button label="Login" className="p-button-outlined mr-3" />
        <Button label="SignUp" aria-label="SignUp" />

    </>;

    return (
        <div className='col-12'>
            <Menubar className='navbar' model={items} start={start} end={end} />
        </div>
    );
}

export default Navbar