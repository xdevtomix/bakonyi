import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import szoba2_1_m from '../images/szoba2_1_m.jpg';
import szoba2_2_m from '../images/szoba2_2_m.jpg';
import szoba2_3_m from '../images/szoba2_3_m.jpg';

import szoba3_1_m from '../images/szoba3_1_m.jpg';
import szoba3_2_m from '../images/szoba3_2_m.jpg';
import szoba3_3_m from '../images/szoba3_3_m.jpg';
import szoba3_4_m from '../images/szoba3_4_m.jpg';

import apartman5_1_m from '../images/apartman5_1_m.jpg';
import apartman5_2_m from '../images/apartman5_2_m.jpg';
import apartman5_3_m from '../images/apartman5_3_m.jpg';

import apartman7_1_m from '../images/apartman7_1_m.jpg';
import apartman7_2_m from '../images/apartman7_2_m.jpg';
import apartman7_3_m from '../images/apartman7_3_m.jpg';
import apartman7_4_m from '../images/apartman7_4_m.jpg';

import bufe_1_m from '../images/bufe_1_m.jpg';
import bufe_2_m from '../images/bufe_2_m.jpg';
import bufe_3_m from '../images/bufe_3_m.jpg';

import udvar_1_m from '../images/udvar_1_m.jpg';
import udvar_2_m from '../images/udvar_2_m.jpg';
import udvar_3_m from '../images/udvar_3_m.jpg';
import udvar_4_m from '../images/udvar_4_m.jpg';
import udvar_5_m from '../images/udvar_5_m.jpg';
import udvar_6_m from '../images/udvar_6_m.jpg';
import udvar_teli_1_m from '../images/udvar_teli_1_m.jpg';
import udvar_teli_2_m from '../images/udvar_teli_2_m.jpg';

import epleny_1_m from '../images/epleny_1_m.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [
    { id: 'szoba2_1_m', which: 'Szoba 2', what: 'Ágy', imageUrl: szoba2_1_m },
    { id: 'szoba2_2_m', which: 'Szoba 2', what: 'Belső tér', imageUrl: szoba2_2_m },
    { id: 'szoba2_3_m', which: 'Szoba 2', what: 'Étkező', imageUrl: szoba2_3_m },

    { id: 'szoba3_1_m', which: 'Szoba 3', what: 'Belső tér', imageUrl: szoba3_1_m },
    { id: 'szoba3_2_m', which: 'Szoba 3', what: 'Ágyak', imageUrl: szoba3_2_m },
    { id: 'szoba3_3_m', which: 'Szoba 3', what: 'Szekrénysor', imageUrl: szoba3_3_m },
    { id: 'szoba3_4_m', which: 'Szoba 3', what: 'Fürdőszoba', imageUrl: szoba3_4_m },

    { id: 'apartman5_1_m', which: 'Apartman 5', what: 'Konyha', imageUrl: apartman5_1_m },
    { id: 'apartman5_2_m', which: 'Apartman 5', what: 'Nappali', imageUrl: apartman5_2_m },
    { id: 'apartman5_3_m', which: 'Apartman 5', what: 'Szoba', imageUrl: apartman5_3_m },

    { id: 'apartman7_1_m', which: 'Apartman 7', what: 'Nappali', imageUrl: apartman7_1_m },
    { id: 'apartman7_2_m', which: 'Apartman 7', what: 'Két ágyas szoba', imageUrl: apartman7_2_m },
    { id: 'apartman7_3_m', which: 'Apartman 7', what: 'Fürdőszoba', imageUrl: apartman7_3_m },
    { id: 'apartman7_4_m', which: 'Apartman 7', what: 'Három ágyas szoba', imageUrl: apartman7_4_m },

    { id: 'bufe_1_m', which: 'Büfé', what: 'Belső tér', imageUrl: bufe_1_m },
    { id: 'bufe_2_m', which: 'Büfé', what: 'Belső tér', imageUrl: bufe_2_m },
    { id: 'bufe_3_m', which: 'Büfé', what: 'Gyereksarok', imageUrl: bufe_3_m },

    { id: 'udvar_1_m', which: 'Udvar', what: 'Kisház', imageUrl: udvar_1_m },
    { id: 'udvar_2_m', which: 'Udvar', what: 'Pihenő', imageUrl: udvar_2_m },
    { id: 'udvar_3_m', which: 'Udvar', what: 'Bejárat', imageUrl: udvar_3_m },
    { id: 'udvar_4_m', which: 'Udvar', what: 'Büfé bejárat', imageUrl: udvar_4_m },
    { id: 'udvar_5_m', which: 'Udvar', what: 'Fedett pihenő', imageUrl: udvar_5_m },
    { id: 'udvar_6_m', which: 'Udvar', what: 'Fedett pihenő', imageUrl: udvar_6_m },
    { id: 'udvar_teli_1_m', which: 'Udvar', what: 'Bejárat télen', imageUrl: udvar_teli_1_m },
    { id: 'udvar_teli_2_m', which: 'Udvar', what: 'Télen távolabbról', imageUrl: udvar_teli_2_m },

    { id: 'epleny_1_m', which: 'Eplény', what: 'Templomtorony', imageUrl: epleny_1_m },
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
                    autoplay={{ delay: 20 * 1000 }}
                    /* loop */
                    speed={300}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {
                        images.map(({ id, which, what, imageUrl }) => (
                            <SwiperSlide key={id}>
                                <SlideItem>
                                    <img src={imageUrl} alt={`${which} - ${what}`} loading="lazy" />
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