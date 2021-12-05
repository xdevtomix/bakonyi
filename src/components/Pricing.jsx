import { useState, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const seasons = [
    {
        id: 1,
        duration: '2021.12.20 - 2022.02.28',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '12 000 Ft' },
                    { label: '2 fő', price: '15 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '12 000 Ft' },
                    { label: '2 fő', price: '15 000 Ft' },
                    { label: '3 fő', price: '19 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '15 000 Ft' },
                    { label: '2 fő', price: '20 000 Ft' },
                    { label: '3 fő', price: '26 000 Ft' },
                    { label: '4 fő', price: '30 000 Ft' },
                    { label: '5 fő', price: '33 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '24 000 Ft' },
                    { label: '2 fő', price: '24 000 Ft' },
                    { label: '3 fő', price: '30 000 Ft' },
                    { label: '4 fő', price: '35 000 Ft' },
                    { label: '5 fő', price: '39 000 Ft' },
                    { label: '6 fő', price: '42 000 Ft' },
                    { label: '7 fő', price: '45 000 Ft' },
                ]
            }
        ],
    },
    {
        id: 2,
        duration: '2022.03.01 - 2022.06.15',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '10 000 Ft' },
                    { label: '2 fő', price: '14 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '10 000 Ft' },
                    { label: '2 fő', price: '14 000 Ft' },
                    { label: '3 fő', price: '19 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '15 000 Ft' },
                    { label: '2 fő', price: '17 000 Ft' },
                    { label: '3 fő', price: '23 000 Ft' },
                    { label: '4 fő', price: '27 000 Ft' },
                    { label: '5 fő', price: '30 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '19 000 Ft' },
                    { label: '2 fő', price: '20 000 Ft' },
                    { label: '3 fő', price: '25 000 Ft' },
                    { label: '4 fő', price: '29 000 Ft' },
                    { label: '5 fő', price: '32 000 Ft' },
                    { label: '6 fő', price: '37 000 Ft' },
                    { label: '7 fő', price: '42 000 Ft' },
                ]
            }
        ],
    },
    {
        id: 3,
        duration: '2022.06.16 - 2022.08.31',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '12 000 Ft' },
                    { label: '2 fő', price: '15 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '12 000 Ft' },
                    { label: '2 fő', price: '15 000 Ft' },
                    { label: '3 fő', price: '19 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '15 000 Ft' },
                    { label: '2 fő', price: '20 000 Ft' },
                    { label: '3 fő', price: '26 000 Ft' },
                    { label: '4 fő', price: '30 000 Ft' },
                    { label: '5 fő', price: '33 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '24 000 Ft' },
                    { label: '2 fő', price: '24 000 Ft' },
                    { label: '3 fő', price: '30 000 Ft' },
                    { label: '4 fő', price: '35 000 Ft' },
                    { label: '5 fő', price: '39 000 Ft' },
                    { label: '6 fő', price: '42 000 Ft' },
                    { label: '7 fő', price: '45 000 Ft' },
                ]
            }
        ],
    },
    {
        id: 4,
        duration: '2022.09.01 - 2022.12.19',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '10 000 Ft' },
                    { label: '2 fő', price: '14 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '10 000 Ft' },
                    { label: '2 fő', price: '14 000 Ft' },
                    { label: '3 fő', price: '19 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '15 000 Ft' },
                    { label: '2 fő', price: '17 000 Ft' },
                    { label: '3 fő', price: '23 000 Ft' },
                    { label: '4 fő', price: '27 000 Ft' },
                    { label: '5 fő', price: '30 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '19 000 Ft' },
                    { label: '2 fő', price: '20 000 Ft' },
                    { label: '3 fő', price: '25 000 Ft' },
                    { label: '4 fő', price: '29 000 Ft' },
                    { label: '5 fő', price: '32 000 Ft' },
                    { label: '6 fő', price: '37 000 Ft' },
                    { label: '7 fő', price: '42 000 Ft' },
                ]
            }
        ],
    },
];

export default function Pricing() {
    const [season, setSeason] = useState(1);
    const swiperRef = useRef(null);

    const onSwiper = (swiper) => {
        swiperRef.current = swiper;
    };

    const handleSeasonChange = (id) => {
        setSeason(id);
        swiperRef.current.slideTo(id - 1, 1000);
    };

    return (
        <Container data-component="pricing" id="araink">

            <Title>
                <div></div>
                <h2>Áraink</h2>
                <div></div>
            </Title>

            <SeasonSelector season={season}>
                {seasons.map((season) => (
                    <div key={season.id} onClick={() => handleSeasonChange(season.id)}>{season.duration}</div>
                ))}
            </SeasonSelector>

            <Swiper allowTouchMove={false} onSwiper={(swiper) => onSwiper(swiper)}>

                {seasons.map((season) => (
                    <SwiperSlide key={season.id}>
                        <BoxesContainer>

                            {season.places.map((place) => (
                                <Box key={place.name}>
                                    <h2>{place.name}</h2>
                                    <ul>
                                        {place.prices.map((price) => (
                                            <li key={price.label}>
                                                <span>{price.label}</span>
                                                <span>{price.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            ))}

                        </BoxesContainer>
                    </SwiperSlide>
                ))}
                
            </Swiper>

        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem;
`;

const Title = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    div {
        width: 25%;
        border: 0.5px solid var(--light-night);
    }

    h2 {
        color: var(--light-night);
        border: 1px solid var(--light-night);
        border-radius: 0.25rem;
        width: max-content;
        padding: 0.5rem 1rem;
    }
`;

const SeasonSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    div {
        border: 1px solid var(--light-night);
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: transform 200ms;
    }

    div:nth-child(${({season}) => season}) {
        color: var(--decor);
        transform: scale(1.1);
    }
`;

const BoxesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media(min-width: 1024px) {
        gap: 4rem;
    }
`;

const Box = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--light-night);
    border-radius: 0.25rem;
    padding: 1rem 2rem 0 2rem;

    h2 {
        color: var(--night);
        font-size: 1.5rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }

    ul {
        width: 100%;
        list-style-type: none;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
    
            span {
                color: var(--light-night);
                font-size: 1rem;
            }
        }
    }
`;