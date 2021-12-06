import styled from "styled-components";

const data = [
    {
        id: 1,
        icon: 'wifi-outline',
        header: 'Wifi',
        text: 'Telefon? Tablet? Laptop? Nem probléma: a wifi ingyenes és 24 órában a rendelkezésére áll.'
    },
    {
        id: 2,
        icon: 'car-outline',
        header: 'Belső parkoló',
        text: 'Zárt parkolót biztosítunk, hogy nyugodt lehessen: az autójával éjjel is minden rendben lesz.'
    },
    {
        id: 3,
        icon: 'car-sport-outline',
        header: 'Külső parkoló',
        text: 'Ha a benti parkoló megtelt, vagy éppen nem szeretne beállni, a ház melletti ingyenes parkolóban hagyhatja autóját.'
    },
    {
        id: 4,
        icon: 'fast-food-outline',
        header: 'Reggeli',
        text: `
            Fogyassza el reggelijét a csak vendégeink számára fenntartott büfénkben, vagy épp a szobájában, ha úgy kényelmesebb. Felvisszük!
            Sőt, akár el is csomaguljuk, ha magával vinné kiránduláskor, síeléskor.
            Válasszon az étlapunkról!`
    },
];

export default function About() {
    return (
        <Container data-component="about" id="rolunk">

            <Content>
                <span>Egy pár gondolat rólunk</span>
                <h2>Arra törekszünk, hogy Ön jól érezze magát</h2>
                <p>Íme néhány a szolgáltatásink listájából:</p>

                <BoxesContainer>
                    {data.map((item) => (
                        <Box key={item.id}>
                            <div>
                                <ion-icon name={item.icon}></ion-icon>
                                <h5>{item.header}</h5>
                            </div>
                            <p>{item.text}</p>
                        </Box>
                    ))}
                </BoxesContainer>

                <a href="#kapcsolat">Keressen a részletekért</a>
            </Content>

        </Container>
    );
}

const Container = styled.section`
    padding: 0 1rem;
    margin-top: 8rem;
`;

const Content = styled.div`

    >span {
        color: var(--decor);
        font-size: 1.25rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    >h2 {
        color: var(--night);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    >p {
        color: var(--light-night);
        font-size: 1rem;
    }

    a {
        background: var(--decor);
        color: var(--day);
        font-size: 1rem;
        text-decoration: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
    }
`;

const BoxesContainer = styled.div`
    margin: 4rem 0;
    display: grid;
    gap: 2rem;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        ion-icon {
            color: var(--decor);
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
    
        h5 {
            color: var(--night);
            font-size: 1rem;
        }
    }
    
    p {
        color: var(--light-night);
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;