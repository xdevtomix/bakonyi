import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        text: `
            Kedves, családias hangulat. Közvetlen, segítőkész tulajdonos. Bármilyen kéréssel vagy kérdéssel fordultunk hozzájuk, mindig készséggel segítettek.
            Nagyon jól éreztük magunkat, csak köszönettel tartozunk a szállásadóknak.
        `,
        name: 'Katalin'
    },
    {
        id: 2,
        text: `
            Nagyon családias, igazán vendéglátásra termett tulajdonosokkal találkozhattunk. Megtapasztalhattuk az igazi vendégszeretetet.
        `,
        name: 'Ferenc'
    },
    {
        id: 3,
        text: `
            Kedvesek a vendéglátók, segítőkészek. Nagyon tiszta és igazán otthonos, remekül felszerelt szálláshely.
            Élelmiszerbolt a közvetlen szomszédságban. Jövőre is ide mennék!
        `,
        name: 'Márta'
    },
    {
        id: 4,
        text: `
            Mindenki nagyon kedves volt, segítőkész, látszott, hogy nekik fontos volt, hogy mi öten jól érezzük magunkat!
            A szállás tiszta volt, hűvös, csendes és nyugodt! Mindenben nagyon megfelelt, jól éreztük ott magunkat!
            Köszönjük szépen!
        `,
        name: 'Lívia'
    },
    {
        id: 5,
        text: `
            Ritka az ilyen szállás: jó a wifi, tiszta a szoba, szép az apartman!
            Eplény és Bakonyi Apartmanház - jövőre találkozunk!
        `,
        name: 'Tibor'
    },
];

export default function Testimonials() {
    return (
        <Container data-component="testimonials" id="velemenyek">

            <Title>
                <div></div>
                <h2>Vélemények</h2>
                <div></div>
            </Title>

            <Info>
                Számunkra nagyon fontos vendégeink elégedettsége, ezért mindig örömmel tölt el,
                amikor elutazásuk után pozitív visszajelzést kapunk:
            </Info>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 10 * 1000 }}
                    /* loop */
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        testimonials.map(({ id, text, name }) => (
                            <SwiperSlide key={id}>
                                <SlideItem>
                                    <div>
                                        "{text}"
                                    </div>
                                    <p>
                                        {name}
                                    </p>
                                </SlideItem>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </SwiperContainer>

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
    font-size: 1rem;
    color: var(--light-night);
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: 0.125rem;
`;

const SwiperContainer = styled.div`
    width: 100%;
`;

const SlideItem = styled.div`
    background-color: var(--day);
    padding: 0 1rem 2rem 1rem;

    >div {
        font-size: 1rem;
        font-style: italic;
        color: var(--light-night);
        margin-bottom: 1rem;
    }

    >p {
        font-size: 1rem;
        color: var(--light-night);
        margin-bottom: 1rem;
        letter-spacing: 0.125rem;
    }
`;