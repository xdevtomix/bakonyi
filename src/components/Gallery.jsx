import { useRef, useEffect } from "preact/hooks";
import styled from "styled-components";

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
import bufe_4_m from '../images/bufe_4_m.jpg';
import bufe_5_m from '../images/bufe_5_m.jpg';

import udvar_1_m from '../images/udvar_1_m.jpg';
import udvar_2_m from '../images/udvar_2_m.jpg';
import udvar_3_m from '../images/udvar_3_m.jpg';
import udvar_4_m from '../images/udvar_4_m.jpg';
import udvar_5_m from '../images/udvar_5_m.jpg';
import udvar_6_m from '../images/udvar_6_m.jpg';
import udvar_7_m from '../images/udvar_7_m.jpg';
import udvar_8_m from '../images/udvar_8_m.jpg';
import udvar_9_m from '../images/udvar_9_m.jpg';
import udvar_10_m from '../images/udvar_10_m.jpg';
import udvar_11_m from '../images/udvar_11_m.jpg';
import udvar_teli_1_m from '../images/udvar_teli_1_m.jpg';
import udvar_teli_2_m from '../images/udvar_teli_2_m.jpg';

import epleny_1_m from '../images/epleny_1_m.jpg';

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

    { id: 'bufe_1_m', which: 'Büfé (jelenleg zárva)', what: 'Belső tér', imageUrl: bufe_1_m },
    { id: 'bufe_2_m', which: 'Büfé (jelenleg zárva)', what: 'Belső tér', imageUrl: bufe_2_m },
    { id: 'bufe_3_m', which: 'Büfé (jelenleg zárva)', what: 'Gyereksarok', imageUrl: bufe_3_m },
    { id: 'bufe_4_m', which: 'Büfé (jelenleg zárva)', what: 'Pihenő', imageUrl: bufe_4_m },
    { id: 'bufe_5_m', which: 'Büfé (jelenleg zárva)', what: 'Fedett pihenő', imageUrl: bufe_5_m },

    { id: 'udvar_1_m', which: 'Udvar', what: 'Kisház', imageUrl: udvar_1_m },
    { id: 'udvar_2_m', which: 'Udvar', what: 'Pihenő', imageUrl: udvar_2_m },
    { id: 'udvar_3_m', which: 'Udvar', what: 'Bejárat', imageUrl: udvar_3_m },
    { id: 'udvar_4_m', which: 'Udvar', what: 'Büfé (jelenleg zárva) bejárat', imageUrl: udvar_4_m },
    { id: 'udvar_5_m', which: 'Udvar', what: 'Fedett pihenő', imageUrl: udvar_5_m },
    { id: 'udvar_6_m', which: 'Udvar', what: 'Fedett pihenő', imageUrl: udvar_6_m },
    { id: 'udvar_7_m', which: 'Udvar', what: 'Pihenő', imageUrl: udvar_7_m },
    { id: 'udvar_8_m', which: 'Udvar', what: 'Parkoló', imageUrl: udvar_8_m },
    { id: 'udvar_9_m', which: 'Udvar', what: 'Kisház belül', imageUrl: udvar_9_m },
    { id: 'udvar_10_m', which: 'Udvar', what: 'Kisház belül', imageUrl: udvar_10_m },
    { id: 'udvar_11_m', which: 'Udvar', what: 'Hintaágy', imageUrl: udvar_11_m },
    { id: 'udvar_teli_1_m', which: 'Udvar', what: 'Bejárat télen', imageUrl: udvar_teli_1_m },
    { id: 'udvar_teli_2_m', which: 'Udvar', what: 'Télen távolabbról', imageUrl: udvar_teli_2_m },

    { id: 'epleny_1_m', which: 'Eplény', what: 'Templomtorony', imageUrl: epleny_1_m },
];

export default function Gallery() {
    const slidesHoleRef = useRef(null);

    useEffect(() => {
        slidesHoleRef.current.scrollLeft = 50;
    }, []);

    return (
        <Container data-component="gallery" id="galeria">

            <Title>
                <div></div>
                <h2>Galéria</h2>
                <div></div>
            </Title>

            <SlidesHole ref={slidesHoleRef}>
                <SlidesContainer>
                    {
                        images.map(({ id, which, what, imageUrl }) => (
                            <Slide key={id}>
                                <img src={imageUrl} alt={`${which} - ${what}`} loading="lazy" />
                                <h2>{which}</h2>
                                <p>{what}</p>
                            </Slide>
                        ))
                    }
                </SlidesContainer>
            </SlidesHole>

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

const SlidesHole = styled.div`
    width: 100%;
    overflow-x: auto;
`;

const SlidesContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: max-content;
`;

const Slide = styled.div`
    padding-bottom: 4rem;
    width: calc(100vw - 2rem);

    @media(min-width: 768px) {
        width: calc((100vw - 2rem) / 2);
    }
    @media(min-width: 1024px) {
        width: calc((100vw - 2rem) / 3);
    }

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