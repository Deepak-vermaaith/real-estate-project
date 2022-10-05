import Filters from "../Filters/filters";
import Navbar from "../Navbar/navbar";
import PropertyCard from '../Card/card';
import './home.css'
import { useEffect, useState } from "react";
const data = [
    {
        'name': 'Palm Har',
        'price': 100000,
        'popular': true,
        'houseType': 'Home',
        'location': 'New York',
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image1.jpeg',
        'date': "2022-10-05"
    },
    {
        'name': 'Palm Harbar',
        'price': 200000,
        'popular': true,
        'houseType': 'Home',
        'location': 'Rome',
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image1.jpeg',
        'date': "2022-10-05"

    },
    {
        'name': 'Faulkner',
        'price': 300000,
        'popular': true,
        'houseType': 'Room',
        'location': 'Londen',
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image1.jpeg',
        'date': "2022-10-05"

    },
    {
        'name': 'Faulkner Ave',
        'price': 400000,
        'popular': true,
        'houseType': 'Home',
        'location': 'Istanbul',
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image2.jpeg',
        'date': "2022-10-05"

    },
    {
        'name': 'Beverly',
        'price': 100000,
        'popular': true,
        'houseType': 'Home',
        'location': "Paris",
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image2.jpeg',
        'date': "2022-10-05"

    },
    {
        'name': 'Beverly springField',
        'price': 200000,
        'popular': true,
        'houseType': 'Flat',
        'location': 'Paris',
        'bedroom': 3,
        'bathroom': 2,
        'area': 2200,
        'img': 'image2.jpeg',
        'date': "2022-10-05"


    }
]
const Home = () => {
    const [cardData, setCardData] = useState([...data]);
    const updateSearch = (val) => {
        let data = cardData.filter((item) => {
            if (item.date === val.date && item.houseType === val.houseType.name && item.location === val.location.name && item.price === val.price.name) {
                return item;
            }
        });
        setCardData([...data])
    }
    const updateCardData = (val) => {
        setCardData([...data])
    }
    return (
        <div className="main-section">
            <Navbar />
            <div className="sub-section">
                <p className="fnt-size22px text-black font-bold">Search Properties to rent</p>
                <Filters updateCardData={updateCardData} updateSearch={updateSearch} />
                <div className="grid mt-5 ">
                    {cardData.length > 0 ? cardData.map((item, index) => {
                        return (
                            <div className="col-4 p-0 mb-5" key={index}>
                                <PropertyCard  card={item} />
                            </div>
                        )
                    })
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default Home;
