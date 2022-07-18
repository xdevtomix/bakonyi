import { useState, useEffect } from "react";
import styled from "styled-components";

import bakonyiKulso1 from '/src/images/bakonyiapartmanhaz_kulso_1.jpg';
import bakonyiKulso2 from '/src/images/bakonyiapartmanhaz_kulso_2.jpg';
import bakonyiKulso1Mobile from '/src/images/bakonyiapartmanhaz_kulso_1_mobile.jpg';
import bakonyiKulso2Mobile from '/src/images/bakonyiapartmanhaz_kulso_2_mobile.jpg';

export default function Home() {
    const [selectedSlide, setSelectedSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSlide((v) => v === 1 ? 2 : 1);
        }, 20 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container data-component="home" id="fooldal">

            <SlidesHole>
                <SlidesContainer>
                    <Slide isVisible={selectedSlide === 1}>
                        {/* <picture>
                            <source media="(max-width: 767px)" srcSet={bakonyiKulso1Mobile} />
                            <source media="(min-width: 768px)" srcSet={bakonyiKulso1} />
                            <img src={bakonyiKulso1} alt="bakonyiapartmanház" />
                        </picture> */}
                        <img src={bakonyiKulso1} alt="bakonyiapartmanház" />
                        <span>Jöjjön el...</span>
                        <h2>...érezze otthon magát nálunk</h2>
                        <a href="mailto:dreissiger@gmail.com">Írjon</a>
                    </Slide>

                    <Slide isVisible={selectedSlide === 2}>
                        {/* <picture>
                            <source media="(max-width: 767px)" srcSet={bakonyiKulso2Mobile} />
                            <source media="(min-width: 768px)" srcSet={bakonyiKulso2} />
                            <img src={bakonyiKulso2} alt="bakonyiapartmanház" loading="lazy" />
                        </picture> */}
                        <img src={bakonyiKulso2} alt="bakonyiapartmanház" loading="lazy" />
                        <span>Pihenjen...</span>
                        <h2>...és azután induljon a nap</h2>
                        <a href="tel:+36-70-31-22-091">Hívjon</a>
                    </Slide>
                </SlidesContainer>
            </SlidesHole>

        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    margin-top: var(--header-height);
    padding: 0 0.25rem;

    @media(min-width: 768px) {
        padding: 0 1rem;
    }
`;

const SlidesHole = styled.div`
    width: 100%;
    height: calc(100vh - var(--header-height));
`;

const SlidesContainer = styled.div`
    position: relative;
`;

const Slide = styled.div`
    width: 100%;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    padding-bottom: 4rem;
    transition: opacity 2000ms;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.25rem;
    }

    span {
        color: var(--decor);
        margin-left: 2rem;
        font-weight: 900;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        z-index: 1;
    }

    h2 {
        color: var(--day);
        max-width: 90%;
        margin-left: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        z-index: 1;
    }

    a {
        background: var(--decor);
        color: var(--day);
        width: max-content;
        padding: 0.5rem 1rem;
        margin-left: 2rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        text-decoration: none;
        z-index: 1;
    }
`;