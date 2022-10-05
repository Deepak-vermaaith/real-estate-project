
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './card.css'
const PropertyCard = (props) => {

    const header = (
        <img alt="Card" src={require('./../../images/' + props.card.img)} />
    );
    const footer = (
        <span>
        </span>
    );

    return (
        <div>
            <Card className='mr-5' title={props.card.name} footer={footer} header={header}>
                <p className="m-0" style={{ lineHeight: '1.5' }}><strong className='text-primary'>${props.card.price}</strong>/month</p>
                <p className="m-0" style={{ lineHeight: '1.5' }}>{props.card.location}</p>
                <p className="m-0" style={{ lineHeight: '1.5' }}>
                    <span className='mr-3'><img className='icon-size mr-2' src={require("./../../images/bed-icon.png")}/>{props.card.bedroom}Beds</span>
                    <span className='mr-3'><img className='icon-size mr-2' src={require("./../../images/bathroom-icon.png")}/>{props.card.bathroom}Bathrooms</span>
                    <span className='mr-3'><img className='icon-size mr-2' src={require("./../../images/area-icon.png")}/>{props.card.area}m^2</span>
                </p>

            </Card>
        </div>
    )
}
export default PropertyCard;