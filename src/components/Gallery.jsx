import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import szoba2_1_m from '../images/szoba2_1_m.jpg';
import szoba2_1_i from '../images/szoba2_1_i.jpg';
import szoba2_2_m from '../images/szoba2_2_m.jpg';
import szoba2_2_i from '../images/szoba2_2_i.jpg';

import szoba3_1_m from '../images/szoba3_1_m.jpg';
import szoba3_1_i from '../images/szoba3_1_i.jpg';

/* apartman5 helye */

import apartman7_1_m from '../images/apartman7_1_m.jpg';
import apartman7_1_i from '../images/apartman7_1_i.jpg';

import bufe_1_m from '../images/bufe_1_m.jpg';
import bufe_1_i from '../images/bufe_1_i.jpg';

import udvar_1_m from '../images/udvar_1_m.jpg';
import udvar_1_i from '../images/udvar_1_i.jpg';
import udvar_2_m from '../images/udvar_2_m.jpg';
import udvar_2_i from '../images/udvar_2_i.jpg';
import udvar_3_m from '../images/udvar_3_m.jpg';
import udvar_3_i from '../images/udvar_3_i.jpg';
import udvar_4_m from '../images/udvar_4_m.jpg';
import udvar_4_i from '../images/udvar_4_i.jpg';
import udvar_teli_1_m from '../images/udvar_teli_1_m.jpg';
import udvar_teli_1_i from '../images/udvar_teli_1_i.jpg';
import udvar_teli_2_m from '../images/udvar_teli_2_m.jpg';
import udvar_teli_2_i from '../images/udvar_teli_2_i.jpg';

import epleny_1_m from '../images/epleny_1_m.jpg';
import epleny_1_i from '../images/epleny_1_i.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [
    { id: 1, which: 'Szoba 2', what: 'Ágy', smallImageUrl: szoba2_1_m, bigImageUrl: szoba2_1_i, },
    { id: 2, which: 'Szoba 2', what: 'Belső tér', smallImageUrl: szoba2_2_m, bigImageUrl: szoba2_2_i, },

    { id: 3, which: 'Szoba 3', what: 'Belső tér', smallImageUrl: szoba3_1_m, bigImageUrl: szoba3_1_i, },

    /* apartman5 helye */

    { id: 4, which: 'Apartman 7', what: 'Konyha', smallImageUrl: apartman7_1_m, bigImageUrl: apartman7_1_i, },

    { id: 5, which: 'Büfé', what: 'Belső tér', smallImageUrl: bufe_1_m, bigImageUrl: bufe_1_i, },

    { id: 6, which: 'Udvar', what: 'Kisház', smallImageUrl: udvar_1_m, bigImageUrl: udvar_1_i, },
    { id: 7, which: 'Udvar', what: 'Pihenő', smallImageUrl: udvar_2_m, bigImageUrl: udvar_2_i, },
    { id: 8, which: 'Udvar', what: 'Bejárat', smallImageUrl: udvar_3_m, bigImageUrl: udvar_2_i, },
    { id: 9, which: 'Udvar', what: 'Büfé bejárat', smallImageUrl: udvar_4_m, bigImageUrl: udvar_4_i, },
    { id: 10, which: 'Udvar', what: 'Bejárat télen', smallImageUrl: udvar_teli_1_m, bigImageUrl: udvar_teli_1_i, },
    { id: 11, which: 'Udvar', what: 'Télen távolabbról', smallImageUrl: udvar_teli_2_m, bigImageUrl: udvar_teli_2_i, },

    { id: 12, which: 'Eplény', what: 'Templomtorony', smallImageUrl: epleny_1_m, bigImageUrl: epleny_1_i, },
];

export default function Gallery() {
    return (
        <Container data-component="gallery" id="galeria">

            <Title>
                <div></div>
                <h2>Galéria</h2>
                <div></div>
            </Title>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    /* autoplay={{ delay: 60 * 1000 }} */
                    /* loop */
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {
                        images.map(({ id, which, what, smallImageUrl, bigImageUrl }) => (
                            <SwiperSlide key={id}>
                                <SlideItem>
                                    <img src={smallImageUrl} alt={`${which} - ${what}`} loading="lazy" />
                                    <h2>{which}</h2>
                                    <p>{what}</p>
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

const SwiperContainer = styled.div`
    width: 100%;
`;

const SlideItem = styled.div`
    padding-bottom: 4rem;

    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        margin-bottom: 1rem;
        object-fit: cover;
        border-radius: 0.25rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: bold;
        color: var(--night);
    }

    p {
        font-size: 1rem;
        color: var(--light-night);
    }
`;