import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bakonyiKulso1 from '/src/images/bakonyiapartmanhaz_kulso_1.jpg';
import bakonyiKulso2 from '/src/images/bakonyiapartmanhaz_kulso_2.jpg';
import bakonyiKulso1Mobile from '/src/images/bakonyiapartmanhaz_kulso_1_mobile.jpg';
import bakonyiKulso2Mobile from '/src/images/bakonyiapartmanhaz_kulso_2_mobile.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <Container data-component="home" id="fooldal">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 10 * 1000 }}
                loop
            >
                <SwiperSlide>
                    <SlideItem>
                        {/* <picture>
                            <source media="(max-width: 767px)" srcSet={bakonyiKulso1Mobile} />
                            <source media="(min-width: 768px)" srcSet={bakonyiKulso1} />
                            <img src={bakonyiKulso1} alt="bakonyiapartmanház" />
                        </picture> */}
                        <img src={bakonyiKulso1} alt="bakonyiapartmanház" />
                        <span>Jöjjön el...</span>
                        <h2>...érezze otthon magát nálunk</h2>
                        <a href="#kapcsolat">Írjon</a>
                    </SlideItem>
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem>
                        {/* <picture>
                            <source media="(max-width: 767px)" srcSet={bakonyiKulso2Mobile} />
                            <source media="(min-width: 768px)" srcSet={bakonyiKulso2} />
                            <img src={bakonyiKulso2} alt="bakonyiapartmanház" loading="lazy" />
                        </picture> */}
                        <img src={bakonyiKulso2} alt="bakonyiapartmanház" loading="lazy" />
                        <span>Pihenjen és azután...</span>
                        <h2>...induljon a nap egy finom reggelivel</h2>
                        <a href="#kapcsolat">Hívjon</a>
                    </SlideItem>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    margin-top: var(--header-height);
`;

const SlideItem = styled.div`
    width: 100%;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding-bottom: 4rem;

    img {
        position: absolute;
        top: 0;
        left: 1%;
        width: 98%;
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
        cursor: pointer;
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