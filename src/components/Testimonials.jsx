import styled from "styled-components";

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
    {
        id: 6,
        text: `
            Tiszta, kényelmes szállás. Barátságos, figyelmes vendégfogadás.
        `,
        name: 'Gyöngyi'
    },
    {
        id: 7,
        text: `
            Nagyon sok helyen jártam már, de itt találkoztam a legeslegkedvesebb vendéglátókkal mind közül!
            Emellett a szoba tiszta volt, jól felszerelt és az egész hely rendkívül hagulatos. 
        `,
        name: 'Anita'
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

            <SlidesHole>
                <SlidesContainer>
                    {
                        testimonials.map(({ id, text, name }) => (
                            <Slide key={id}>
                                <div>
                                    "{text}"
                                </div>
                                <p>
                                    {name}
                                </p>
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

const Info = styled.div`
    font-size: 1rem;
    color: var(--light-night);
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: 0.125rem;
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
    background-color: var(--day);
    padding: 0 1rem 2rem 1rem;
    width: calc(100vw - 2rem);

    @media(min-width: 768px) {
        width: calc((100vw - 2rem) / 2);
    }
    @media(min-width: 1024px) {
        width: calc((100vw - 2rem) / 4);
    }

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