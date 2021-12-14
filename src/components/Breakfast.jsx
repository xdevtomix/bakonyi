import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Breakfast() {
    const [dishes, setDishes] = useState([]);
    const [dishId, setDishId] = useState(1);

    const maxId = 16;

    const getSelectedDish = () => {
        const selectedDish = dishes.find((dish) => +dish.id === dishId);
        const dishToReturn = { name: '', price: '', src: '', };

        if (selectedDish) {
            dishToReturn.name = selectedDish.hu;
            dishToReturn.price = selectedDish.price;

            if (selectedDish.url && selectedDish.url.endsWith('.jpeg')) {
                dishToReturn.src = `https://raw.githubusercontent.com/xdevtomix/mokus/main/public${selectedDish.url.substring(1)}`;
            }
        }

        return dishToReturn;
    };

    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/xdevtomix/mokus/main/src/assets/translations.json');
        const json = await response.json();

        setDishes(json.dishes);

        return () => { };
    }, []);

    useEffect(async () => {
        const generateRandomDishId = () => {
            setDishId(Math.floor(Math.random() * maxId) + 1);
        };

        let intervalId = setInterval(() => {
            generateRandomDishId();
        }, 10 * 1000);

        generateRandomDishId();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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

            <ImageContainer>
                <div>
                    <span>{getSelectedDish().name}</span> <span>{getSelectedDish().price}</span>
                </div>
                {getSelectedDish().src && <img src={getSelectedDish().src} alt={getSelectedDish().name} loading="lazy" />}
                {!getSelectedDish().src && <ion-icon name="fast-food-outline"></ion-icon>}
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