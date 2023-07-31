import { useState, useRef, useEffect } from "preact/hooks";
import styled from "styled-components";

const seasons = [
    {
        id: 1,
        duration: '2023.10.15 - 2024.04.15',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '14 000 Ft' },
                    { label: '2 fő', price: '18 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '14 000 Ft' },
                    { label: '2 fő', price: '18 000 Ft' },
                    { label: '3 fő', price: '22 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '25 000 Ft' },
                    { label: '2 fő', price: '30 000 Ft' },
                    { label: '3 fő', price: '34 000 Ft' },
                    { label: '4 fő', price: '38 000 Ft' },
                    { label: '5 fő', price: '42 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '30 000 Ft' },
                    { label: '2 fő', price: '35 000 Ft' },
                    { label: '3 fő', price: '40 000 Ft' },
                    { label: '4 fő', price: '45 000 Ft' },
                    { label: '5 fő', price: '50 000 Ft' },
                    { label: '6 fő', price: '54 000 Ft' },
                    { label: '7 fő', price: '58 000 Ft' },
                ]
            }
        ],
    },
    {
        id: 2,
        duration: '2023.04.16 - 2023.10.14',
        places: [
            {
                name: 'Szoba 2',
                prices: [
                    { label: '1 fő', price: '13 000 Ft' },
                    { label: '2 fő', price: '18 000 Ft' },
                ]
            },
            {
                name: 'Szoba 3',
                prices: [
                    { label: '1 fő', price: '13 000 Ft' },
                    { label: '2 fő', price: '18 000 Ft' },
                    { label: '3 fő', price: '22 000 Ft' },
                ]
            },
            {
                name: 'Apartman 5',
                prices: [
                    { label: '1 fő', price: '22 000 Ft' },
                    { label: '2 fő', price: '27 000 Ft' },
                    { label: '3 fő', price: '31 000 Ft' },
                    { label: '4 fő', price: '35 000 Ft' },
                    { label: '5 fő', price: '39 000 Ft' },
                ]
            },
            {
                name: 'Apartman 7',
                prices: [
                    { label: '1 fő', price: '28 000 Ft' },
                    { label: '2 fő', price: '33 000 Ft' },
                    { label: '3 fő', price: '38 000 Ft' },
                    { label: '4 fő', price: '43 000 Ft' },
                    { label: '5 fő', price: '48 000 Ft' },
                    { label: '6 fő', price: '52 000 Ft' },
                    { label: '7 fő', price: '56 000 Ft' },
                ]
            }
        ],
    },
];

const descriptions = {
    'Szoba 2': [
        { id: 1, text: 'Két férőhelyes' },
        { id: 2, text: 'Franciaágyas' },
        { id: 3, text: 'Fürdőszobával' },
    ],
    'Szoba 3': [
        { id: 1, text: 'Két férőhelyes' },
        { id: 2, text: 'Plusz felnőtt méretű pótágy' },
        { id: 3, text: 'Fürdőszobával' },
        { id: 4, text: 'Klimatizált' },
    ],
    'Apartman 5': [
        { id: 1, text: '32nm' },
        { id: 2, text: 'Szoba, nappali, fürdőszoba' },
        { id: 3, text: 'A szobában franciaágy plusz normál ágy' },
        { id: 4, text: 'A nappaliban étkező- és ülőgarnitúra' },
        { id: 5, text: 'A nappaliban kétszemélyes kinyitható fekhely' },
        { id: 6, text: 'Felszerelt konyha' },
    ],
    'Apartman 7': [
        { id: 1, text: '44nm' },
        { id: 2, text: '2 egymástól független szoba, nappali, fürdőszoba' },
        { id: 3, text: 'Az egyik szoba két, a másik három ágyas' },
        { id: 4, text: 'A nappaliban étkező- és ülőgarnitúra' },
        { id: 5, text: 'A nappaliban kétszemélyes kinyitható fekhely' },
        { id: 6, text: 'Felszerelt konyha' },
        { id: 7, text: 'Klimatizált' },
    ],
};

export default function Pricing() {
    const [selectedSeason, setSelectedSeason] = useState(2);
    const [isRoomInfoVisible, setIsRoomInfoVisible] = useState({
        'Szoba 2': false,
        'Szoba 3': false,
        'Apartman 5': false,
        'Apartman 7': false,
    });
    const slidesHoleRef = useRef(null);
    const slideRef = useRef(null); // gets the last one but it is ok as the height is the same for all

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            slidesHoleRef.current.style.height = `${slideRef.current.getBoundingClientRect().height}px`;
        });

        resizeObserver.observe(slideRef.current);

        return () => {
            resizeObserver.unobserve(slideRef.current);
        };
    }, []);

    return (
        <Container data-component="pricing" id="araink">

            <Title>
                <div></div>
                <h2>Áraink</h2>
                <div></div>
            </Title>

            <Info>Mikor jönne? Kattintson!</Info>

            <SeasonSelector season={selectedSeason}>
                {seasons.map((season) => (
                    <div key={season.id} onClick={() => setSelectedSeason(season.id)}>{season.duration}</div>
                ))}
            </SeasonSelector>

            <SlidesHole ref={slidesHoleRef}>
                <SlidesContainer>
                    {
                        seasons.map((season) => (
                            <Slide key={season.id} isVisible={selectedSeason === season.id} ref={slideRef}>

                                {season.places.map((place) => (
                                    <Box key={place.name}>
                                        <h2>{place.name}</h2>
                                        <span onClick={() => setIsRoomInfoVisible({ ...isRoomInfoVisible, [place.name]: true })}>
                                            <ion-icon name="information-circle-outline"></ion-icon>
                                        </span>
                                        <ul>
                                            {place.prices.map((price) => (
                                                <li key={price.label}>
                                                    <span>{price.label}</span>
                                                    <span>{price.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <RoomInfo isVisible={isRoomInfoVisible[place.name]}>
                                            <span onClick={() => setIsRoomInfoVisible({ ...isRoomInfoVisible, [place.name]: false })}>
                                                <ion-icon name="close-outline"></ion-icon>
                                            </span>
                                            <ul>
                                                {descriptions[place.name].map((description) => (
                                                    <li key={description.id}>
                                                        <ion-icon name="checkmark-outline"></ion-icon>
                                                        <span>{description.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </RoomInfo>
                                    </Box>
                                ))}

                            </Slide>
                        ))
                    }
                </SlidesContainer>
            </SlidesHole>

            <PricesInfo>
                Az árak egy éjszakára vonatkoznak és nem tartalmazzák az idegenforgalmi adót.
            </PricesInfo>

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

const Info = styled.div`
    text-align: center;
    font-size: 1rem;
    color: var(--light-night);
    margin-bottom: 2rem;
`;

const SeasonSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    div {
        color: var(--light-night);
        border: 1px solid var(--light-night);
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: transform 200ms;
        user-select: none;
    }

    div:nth-child(${({ season }) => season}) {
        color: var(--decor);
        transform: scale(1.1);
    }
`;

const SlidesHole = styled.div`
    width: 100%;
`;

const SlidesContainer = styled.div`
    position: relative;
`;

const Slide = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: absolute;
    transition: opacity 200ms;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};

    @media(min-width: 1024px) {
        gap: 4rem;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--light-night);
    border-radius: 0.25rem;
    position: relative;
    overflow: hidden;

    >h2 {
        color: var(--night);
        font-size: 1.5rem;
        padding: 1rem 4rem;
        margin-bottom: 1rem;
        background-color: var(--light-day);
    }

    >span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;

        >ion-icon {
            color: var(--night);
            font-size: 1.5rem;
        }
    }

    >ul {
        width: 100%;
        list-style-type: none;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
    
            span {
                color: var(--light-night);
                font-size: 1rem;
            }
        }
    }
`;

const RoomInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--day);
    padding-left: 0.5rem;
    padding-top: 2rem;
    transition: 400ms;
    transform: ${({ isVisible }) => isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)'};
    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};

    >span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;

        >ion-icon {
            color: var(--night);
            font-size: 1.5rem;
        }
    }

    >ul {
        width: 100%;
        list-style-type: none;

        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.25rem;

            ion-icon {
                font-size: 1.25rem;
                color: var(--decor);
                min-width: 1.25rem;
            }
    
            span {
                font-size: 1rem;
                color: var(--night);
            }
        }
    }
`;

const PricesInfo = styled.div`
    text-align: center;
    font-size: 1rem;
    color: var(--light-night);
    margin-top: 4rem;
`;