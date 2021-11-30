import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import breakfast_1 from '/src/images/breakfast_1.jpeg';
import breakfast_2 from '/src/images/breakfast_2.jpeg';
import breakfast_3 from '/src/images/breakfast_3.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Breakfast() {
    return (
        <Container data-component="breakfast" id="reggeli">
            <Header>
                <p>REGGELI</p>
                <h2>Akár szobaszervízzel</h2>
                <div>Egészséges és finom reggeli a szobájában vagy az étteremben</div>
                <a href="https://mokus.vercel.app" target="_blank" rel="noopener">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <span>Mókusbüfé</span>
                </a>
            </Header>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 10 * 1000 }}
                    loop
                >
                    <SwiperSlide>
                        <SlideItem>
                            <img src={breakfast_1} alt="reggeli" loading="lazy" />
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src={breakfast_2} alt="reggeli" loading="lazy" />
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src={breakfast_3} alt="reggeli" loading="lazy" />
                        </SlideItem>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--light-day);

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    @media(min-width: 1024px) {
        width: 55%;
    }

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--decor);
        margin-bottom: 1rem;
        z-index: 1;
    }
    
    h2 {
        font-size: 2rem;
        color: var(--night);
        text-align: center;
        margin-bottom: 1rem;
        z-index: 1;
    }
    
    div {
        font-size: 1rem;
        color: var(--light-night);
        text-align: center;
        margin-bottom: 2rem;
        z-index: 1;
    }
    
    a {
        text-decoration: none;
        background: var(--decor);
        color: var(--day);
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
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

const SwiperContainer = styled.div`
    width: 100%;
    padding: 0 0.5rem;

    @media(min-width: 1024px) {
        width: 45%;
    }
`;

const SlideItem = styled.div`
    width: 100%;
    aspect-ratio: 3 / 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.25rem;
    }
`;