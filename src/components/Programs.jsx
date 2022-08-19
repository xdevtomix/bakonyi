import { useRef, useEffect } from "preact/hooks";
import styled from "styled-components";

import bakonyiLatnivalo1 from '../images/bakonyi_latnivalo_1.jpeg';
import bakonyiLatnivalo2 from '../images/bakonyi_latnivalo_2.jpeg';
import bakonyiLatnivalo3 from '../images/bakonyi_latnivalo_3.jpeg';
import bakonyiLatnivalo4 from '../images/bakonyi_latnivalo_4.jpeg';
import bakonyiLatnivalo5 from '../images/bakonyi_latnivalo_5.jpeg';

const programs = [
    {
        id: 1,
        author: 'trekhunt',
        date: '2021.07.23',
        header: 'Kirándulás. Utazás. Természet.',
        text: 'Bakonyi látnivalók - TOP 40 hely képekkel és térképpel',
        imageUrl: bakonyiLatnivalo1,
        href: 'https://trekhunt.com/hu/article/bakony-latnivalok',
    },
    {
        id: 2,
        author: 'csodahelyek',
        date: '2021.01.22',
        header: 'Csodahelyek Magyarországon',
        text: '20+ bakancslistás látnivaló és kirándulás a Bakonyban',
        imageUrl: bakonyiLatnivalo2,
        href: 'https://csodahelyek.hu/2021/01/22/bakancslistas-latnivalo-kirandulas-bakony',
    },
    {
        id: 3,
        author: 'csodalatosbakony',
        date: '2022.01.12',
        header: 'Fedezd fel a Bakony szépségét!',
        text: 'Programok, rendezvények, látnivalók a csodálatos Bakonyban',
        imageUrl: bakonyiLatnivalo3,
        href: 'https://www.csodalatosbakony.hu',
    },
    {
        id: 4,
        author: 'orszagjaro',
        date: '2022.01.13',
        header: 'Bakonyi látnivalók',
        text: 'A Bakonyba látogatókat rengeteg látnivaló és program várja',
        imageUrl: bakonyiLatnivalo4,
        href: 'https://www.orszagjaro.net/bakonyi-latnivalok',
    },
    {
        id: 5,
        author: 'utazaskatalogus',
        date: '2020.05.09',
        header: 'Bakonyi kirándulások',
        text: 'Aki szeret kirándulni, túrázni, annak igazi paradicsom ez a hegység',
        imageUrl: bakonyiLatnivalo5,
        href: 'https://utazaskatalogus.hu/bakony-latnivaloi-kirandulasi-lehetosegek',
    }
];

export default function Programs() {
    const slidesHoleRef = useRef(null);

    useEffect(() => {
        slidesHoleRef.current.scrollLeft = 50;
    }, []);

    return (
        <Container data-component="programs" id="latnivalok">

            <Title>
                <div></div>
                <h2>Látnivalók</h2>
                <div></div>
            </Title>

            <SlidesHole ref={slidesHoleRef}>
                <SlidesContainer>
                    {
                        programs.map(({ id, author, date, header, text, imageUrl, href }) => (
                            <Slide key={id}>
                                <img src={imageUrl} alt={header} loading="lazy" />
                                <div>
                                    <span>{author}</span>
                                    <div></div>
                                    <span>{date}</span>
                                </div>
                                <h2>{header}</h2>
                                <p>{text}</p>
                                <a href={href} target="_blank" rel="noopener">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                    <span>Bővebben</span>
                                </a>
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
    padding-bottom: 5rem;
    width: calc(100vw - 2rem);

    @media(min-width: 768px) {
        width: calc((100vw - 2rem) / 2);
    }
    @media(min-width: 1366px) {
        width: calc((100vw - 2rem) / 3);
    }

    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        margin-bottom: 1rem;
        object-fit: cover;
        border-radius: 0.25rem;
    }

    >div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        span {
            font-size: 1rem;
            color: var(--decor);
        }

        div {
            height: 0.75rem;
            border: 0.5px solid var(--light-night);
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--night);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: var(--light-night);
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        background: var(--decor);
        color: var(--day);
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: fit-content;

        ion-icon {
            font-size: 1.25rem;
        }
    }
`;