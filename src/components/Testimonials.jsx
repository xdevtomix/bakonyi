import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    return (
        <Container data-component="testimonials" id="velemenyek">

            <Header>
                <p>Vélemények</p>
                <h2>Vendégeink írták</h2>
                <div>
                    Számunkra nagyon fontos vendégeink elégedettsége, ezért mindig örömmel tölt el,
                    amikor elutazásuk után pozitív visszajelzést kapunk.
                </div>
                <button>Még több vélemény</button>
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
                            <div>
                                Szép, tiszta és kényelmes szobát kaptunk modern berendezéssel, szép fürdőszobával. Közel van a bolt is, a buszmegálló is, a természet is.
                                A szállás éttermében vacsoráztunk, az ételek nagyon finomak voltak, jóllaktunk. Köszönjük a vendéglátást!"
                            </div>
                            <div>
                                Gergely
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>
                                Nagyon családias, igazán vendéglátásra termett tulajdonosokkal találkozhattunk. Megtapasztalhattuk az igazi vendégszeretetet.
                            </div>
                            <div>
                                Ferenc
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>
                                Kedvesek a vendéglátók, segítőkészek. Nagyon tiszta és igazán otthonos, remekül felszerelt szálláshely.
                                Teljesen alkalmas az önellátásra, de ha akartam a vendéglő részüket is igénybe vehettem.
                                Élelmiszerbolt a közvetlen szomszédságban. Jövőre is ide mennék!
                            </div>
                            <div>
                                Márta
                            </div>
                        </SlideItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem>
                            <div>
                                Mindenki nagyon kedves volt, segítőkész, látszott, hogy nekik fontos volt, hogy mi öten jól érezzük magunkat!
                                A szállás tiszta volt, hűvös, csendes és nyugodt! Mindenben nagyon megfelelt, jól éreztük ott magunkat!
                                Köszönjük szépen!
                            </div>
                            <div>
                                Lívia
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
        margin-bottom: 2rem;
    }

    button {
        cursor: pointer;
        background: transparent;
        color: var(--decor);
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
    background-color: var(--day);
    padding: 1rem 1rem 2rem 1rem;
    aspect-ratio: 1;

    @media(min-width: 1024px) {
        margin-bottom: 4rem;
    }

    >div:nth-child(1) {
        font-size: 1rem;
        color: var(--light-night);
        margin-bottom: 1rem;
    }

    >div:nth-child(2) {
        font-size: 1rem;
        color: var(--light-night);
        margin-bottom: 1rem;
    }
`;