import styled from "styled-components";

const data = [
    {
        id: 1,
        icon: 'fast-food-outline',
        header: 'Reggeli',
        text: `
            Szerezze be a reggelihez valót a szállás melletti kisboltban, vagy Eplény új, vasárnap is nyitvatartó üzletében!
        `
    },
    {
        id: 2,
        icon: 'pizza-outline',
        header: 'Ebéd, vacsora',
        text: 'Szállóvendégeink részére a legnagyobb múltú eplényi étterem, a 82-es Kisvendéglő 10%-os kedvezményt kínál az ételek árából.'
    },
    {
        id: 3,
        icon: 'car-sport-outline',
        header: 'Belső és külső parkoló',
        text: `
            Zárt parkolót biztosítunk, hogy nyugodt lehessen: az autójával éjjel is minden rendben lesz. 
            Ha a benti parkoló megtelt, vagy éppen nem szeretne beállni, a ház melletti ingyenes parkolóban hagyhatja autóját.
        `
    },
    {
        id: 4,
        icon: 'wifi-outline',
        header: 'Wifi',
        text: 'Telefon? Tablet? Laptop? Nem probléma: a wifi ingyenes és 24 órában a rendelkezésére áll.'
    },
    {
        id: 5,
        icon: 'planet-outline',
        header: 'Műholdas tv',
        text: 'Ha este tévézne, távirányító és műholdas csatornák várják.'
    },
    {
        id: 6,
        icon: 'beer-outline',
        header: 'Hűtő és mikró',
        text: 'Minden szobához és apartmanhoz hűtőszekrény és mikró is tartozik.'
    },
    {
        id: 7,
        icon: 'bed-outline',
        header: 'Ágynemű, törölköző',
        text: 'Törölközőt sem kell magával hoznia. Akár több méretben is biztosítunk.'
    },
    {
        id: 8,
        icon: 'card-outline',
        header: 'SZÉP kártya',
        text: 'A szállás díját SZÉP kártyával is rendezheti.'
    },
    {
        id: 9,
        icon: 'storefront-outline',
        header: 'Különterem',
        text: 'Az apartmanházban igény esetén 20 főt befogadni képes különterem bérelhető.'
    },
    {
        id: 10,
        icon: 'paw-outline',
        header: 'Kisállat',
        text: 'A szállásunk állatbarát. Minden amúgy is lakásban élő kisállatot szívesen látunk. Az ár: 2500 Ft / kisállat / nap.'
    },
    {
        id: 11,
        icon: 'people-outline',
        header: 'Csoportos foglalás',
        text: 'Csoportos foglalás esetén egyedi árak!'
    },
    {
        id: 12,
        icon: 'wallet-outline',
        header: 'Síbérlet',
        text: 'Szállóvendégeink részére a sípálya 10%-os kedvezményt biztosít a bérletek árából.'
    },
];

export default function Services() {
    return (
        <Container data-component="services" id="szolgaltatasaink">

            <Content>
                <span>Egy pár gondolat rólunk</span>
                <h2>Arra törekszünk, hogy Ön jól érezze magát</h2>
                <p>Íme néhány a szolgáltatásaink listájából:</p>

                <BoxesContainer>
                    {data.map((item) => (
                        <Box key={item.id}>
                            <div>
                                <ion-icon name={item.icon}></ion-icon>
                                <h2>{item.header}</h2>
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
        text-align: center;
        display: block;
        margin-bottom: 0.5rem;
    }

    >h2 {
        color: var(--night);
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    >p {
        color: var(--light-night);
        font-size: 1rem;
        text-align: center;
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

    @media(min-width: 1366px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        ion-icon {
            color: var(--decor);
            font-size: 1.5rem;
        }
    
        h2 {
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