import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Breakfast() {
    const [dishes, setDishes] = useState([]);
    const [dishId, setDishId] = useState({ value: -1 });
    const [selectedDish, setSelectedDish] = useState({ id: '', name: '', price: '', src: '' });
    const [showImage, setShowImage] = useState(false);

    const maxId = 16;
    const intervalTime = 10 * 1000;
    const fadeTime = 2 * 1000;

    const generateRandomDishId = () => {
        setDishId({ value: Math.floor(Math.random() * maxId) + 1 });
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/xdevtomix/mokus/main/src/assets/translations.json');
            const json = await response.json();

            let dishes = json.dishes;

            dishes = dishes.filter((item) => item.role === 'dish');
            dishes = dishes.filter((dish) => +dish.id <= maxId);
            dishes = dishes.map((dish) => {
                const mappedDish = { id: '', name: '', price: '', src: '' };

                mappedDish.id = dish.id;
                mappedDish.name = dish.hu;
                mappedDish.price = dish.price;

                if (dish.url.endsWith('.jpeg') || dish.url.endsWith('.jpg')) {
                    mappedDish.src = `https://raw.githubusercontent.com/xdevtomix/mokus/main/public${dish.url.substring(1)}`;
                }

                return mappedDish;
            });

            setDishes(dishes);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (dishes.length > 0) {
            generateRandomDishId();
        }
    }, [dishes]);

    useEffect(() => {
        if (dishId.value > -1) {
            setSelectedDish({ ...dishes.find((dish) => +dish.id === dishId.value) });
        }
    }, [dishId]);

    useEffect(() => {
        if (selectedDish.name) {
            setShowImage(true);
            setTimeout(() => setShowImage(false), intervalTime - fadeTime);
            setTimeout(() => generateRandomDishId(), intervalTime);
        }
    }, [selectedDish]);

    return (
        <Container data-component="breakfast" id="reggeli">
            <Header>
                <p>REGGELI</p>
                <h2>Akár szobaszervízzel</h2>
                <div>Egészséges és finom reggeli a szobájában vagy a büfében</div>
                <a href="https://mokus.vercel.app" target="_blank" rel="noopener">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <span>Étlap</span>
                </a>
            </Header>

            <ImageContainer showImage={showImage} fadeTime={fadeTime}>
                <div>
                    <span>{selectedDish.name}</span> <span>{selectedDish.price}</span>
                </div>

                {selectedDish.src && <img src={selectedDish.src} alt={selectedDish.name} loading="lazy" />}

                <PreloadedImagesList>
                    {dishes.map((dish) => (
                        <li key={dish.id}>
                            <img src={dish.src} alt={dish.name} loading="lazy" />
                        </li>
                    ))}
                </PreloadedImagesList>
            </ImageContainer>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    padding: 4rem 1rem;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    background: linear-gradient(to bottom, var(--light-day), var(--day), var(--light-day));

    @media(min-width: 1024px) {
        flex-direction: row;
    }

    @media(min-width: 1366px) {
        gap: 8rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--decor);
        margin-bottom: 1rem;
    }
    
    h2 {
        font-size: 2rem;
        color: var(--night);
        text-align: center;
        margin-bottom: 1rem;
    }
    
    div {
        font-size: 1rem;
        color: var(--light-night);
        text-align: center;
        margin-bottom: 4rem;
    }

    a {
        text-decoration: none;
        background: var(--decor);
        color: var(--day);
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        z-index: 1;
        display: flex;
        align-items: center;

        ion-icon {
            margin-right: 0.5rem;
        }
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    transform: rotate(3deg);
    opacity: ${({ showImage }) => showImage ? '1' : '0'};
    transition: ${({ fadeTime }) => `opacity ${fadeTime}ms`};

    @media(min-width: 768px) {
        width: 50%;
    }

    @media(min-width: 1024px) {
        width: 40%;
    }

    @media(min-width: 1536px) {
        width: 30%;
    }

    div {
        font-size: 1rem;
        color: var(--light-night);

        span:nth-child(2) {
            color: var(--decor);
            font-weight: bold;
        }
    }

    img {
        width: 90%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    ion-icon {
        font-size: 12rem;
        color: var(--light-night);
    }
`;

const PreloadedImagesList = styled.ul`
    height: 1px;
    opacity: 0;

    >li {
        height: 100%;
        
        >img {
            height: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }
    }
`;