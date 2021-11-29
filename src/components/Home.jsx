import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <Container data-component="home" id="fooldal">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{delay: 5000}}
                loop
            >
                <SwiperSlide>
                    <SlideItem image="https://images.pexels.com/photos/7675409/pexels-photo-7675409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                        <span>Be Strong, Be Fit</span>
                        <h3>Make Yourself Stronger Than Your Excuses</h3>
                        <button>Get Started</button>
                    </SlideItem>
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem image="https://images.pexels.com/photos/7676552/pexels-photo-7676552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                        <span>Be Strong, Be Fit</span>
                        <h3>Make Yourself Stronger Than Your Excuses</h3>
                        <button>Get Started</button>
                    </SlideItem>
                </SwiperSlide>

                <SwiperSlide>
                    <SlideItem image="https://images.pexels.com/photos/7676548/pexels-photo-7676548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                        <span>Be Strong, Be Fit</span>
                        <h3>Make Yourself Stronger Than Your Excuses</h3>
                        <button>Get Started</button>
                    </SlideItem>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

const Container = styled.section`
`;

const SlideItem = styled.div`
    width: 100vw;
    height: 100vh;
    background : url(${({image}) => image});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;

    span {
        color: var(--red);
        margin-top: 20rem;
        font-weight: 900;
        font-size: 1.5rem;
    }

    h3 {
        color: var(--white);
        margin-bottom: 1rem;
        font-size: 2rem;

        @media(min-width: 1024px) {
            font-size: 3rem;
            max-width: 50%;
        }
    }

    button {
        cursor: pointer;
        background: var(--red);
        color: var(--white);
        width: max-content;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1rem;

        @media(min-width: 1024px) {
            font-size: 1.5rem;
        }
    }
`;