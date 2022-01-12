import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const programs = [
    {
        id: 1,
        author: 'trekhunt',
        date: '2021.07.23',
        header: 'Kirándulás. Utazás. Természet.',
        text: 'Bakonyi látnivalók - TOP 40 hely képekkel és térképpel',
        imageUrl: '/src/images/bakony_latnivalo_1.jpeg',
        href: 'https://trekhunt.com/hu/article/bakony-latnivalok',
    },
    {
        id: 2,
        author: 'csodahelyek',
        date: '2021.01.22',
        header: 'Csodahelyek Magyarországon',
        text: '20+ bakancslistás látnivaló és kirándulás a Bakonyban',
        imageUrl: '/src/images/bakony_latnivalo_2.jpeg',
        href: 'https://csodahelyek.hu/2021/01/22/bakancslistas-latnivalo-kirandulas-bakony',
    },
    {
        id: 3,
        author: 'csodalatosbakony',
        date: '2022.01.12',
        header: 'Fedezd fel a Bakony szépségét!',
        text: 'Programok, rendezvények, látnivalók a csodálatos Bakonyban',
        imageUrl: '/src/images/bakony_latnivalo_3.jpeg',
        href: 'https://www.csodalatosbakony.hu',
    }
];

export default function Programs() {
    return (
        <Container data-component="programs" id="latnivalok">

            <Title>
                <div></div>
                <h2>Látnivalók</h2>
                <div></div>
            </Title>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 60 * 1000 }}
                    loop
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
                        programs.map(({ id, author, date, header, text, imageUrl, href }) => (
                            <SwiperSlide key={id}>
                                <SlideItem>
                                    <img src={imageUrl} alt={header} loading="lazy" />
                                    <div>
                                        <span>{author}</span>
                                        <div></div>
                                        <span>{date}</span>
                                    </div>
                                    <h2>{header}</h2>
                                    <p>{text}</p>
                                    <a href={href} target="_blank" rel="noopener">
                                        <ion-icon name="log-in-outline"></ion-icon>
                                        <span>Bővebben</span>
                                    </a>
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
    padding-bottom: 3rem;

    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        margin-bottom: 1rem;
        object-fit: cover;
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