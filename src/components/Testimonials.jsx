import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    return (
        <Container data-component="testimonials" id="velemenyek">

            <Header>
                <p>Testimonials</p>
                <h3>What Our Clients Say</h3>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis repellendus dicta magni quidem vel quos sapiente. Excepturi, ab est?</div>
                <button>Read More</button>
            </Header>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                >
                    <SwiperSlide>
                        <SlideItem>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, voluptatem.</div>
                            <div>
                                <div>
                                    <img src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                                    <div>
                                        <p>Mary Jane</p>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <i className='bx bxs-quote-right'></i>
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, voluptatem.</div>
                            <div>
                                <div>
                                    <img src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                                    <div>
                                        <p>Mary Jane</p>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <i className='bx bxs-quote-right'></i>
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, voluptatem.</div>
                            <div>
                                <div>
                                    <img src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                                    <div>
                                        <p>Mary Jane</p>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <i className='bx bxs-quote-right'></i>
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, voluptatem.</div>
                            <div>
                                <div>
                                    <img src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                                    <div>
                                        <p>Mary Jane</p>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <i className='bx bxs-quote-right'></i>
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>

        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media(min-width: 768px) {
        width: 50%;
    }

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--red);
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 2rem;
        color: var(--white);
        text-align: center;
        margin-bottom: 1rem;
    }

    div {
        font-size: 1rem;
        color: var(--light-white);
        text-align: center;
        margin-bottom: 2rem;
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
    }
`;

const SwiperContainer = styled.div`
    width: 100%;

    @media(min-width: 768px) {
        width: 50%;
    }
`;

const SlideItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333;
    padding: 1rem;
    border-radius: 0.25rem;
    aspect-ratio: 3 / 2;

    @media(min-width: 1024px) {
        margin-bottom: 4rem;
    }

    >div:nth-child(1) {
        font-size: 1rem;
        color: var(--light-white);
        margin-bottom: 1rem;
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        >div {
            display: flex;
            align-items: center;

            img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 0.75rem;
            }

            >div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                p {
                    font-size: 1rem;
                    color: var(--white);
                }

                span {
                    font-size: 0.75rem;
                    color: var(--red);
                }
            }
        }

        i {
            font-size: 2rem;
            color: var(--red);
        }
    }
`;