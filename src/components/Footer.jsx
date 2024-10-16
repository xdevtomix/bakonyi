import styled from "styled-components";

export default function Footer() {
    return (
        <Container data-component="footer" id="kapcsolat">

            <div>
                <h2>Gyors linkek</h2>
                <ul>
                    <li>
                        <a href="#fooldal">Főoldal</a>
                    </li>
                    <li>
                        <a href="#szolgaltatasaink">Szolgáltatásaink</a>
                    </li>
                    <li>
                        <a href="#araink">Áraink</a>
                    </li>
                    <li>
                        <a href="#latnivalok">Látnivalók</a>
                    </li>
                    <li>
                        <a href="#velemenyek">Vélemények</a>
                    </li>
                    <li>
                        <a href="#galeria">Galéria</a>
                    </li>
                    <li>
                        <a href="#kapcsolat">Kapcsolat</a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Kattintson elérhetőségeinkre</h2>
                <ul>
                    <li>
                        <ion-icon name="call"></ion-icon>
                        <a href="tel:+36-70-31-22-091">
                            <span>+36 70 31 22 091</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="call"></ion-icon>
                        <a href="tel:+36-88-453-122">
                            <span>+36 88 453 122</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="mail"></ion-icon>
                        <a href="mailto:dreissiger@gmail.com">
                            <span>dreissiger@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="location"></ion-icon>
                        <a href="https://bakonyi-apartmanhaz.business.site" target="_blank" rel="noopener">
                            <span>8413 Eplény Veszprémi utca 41</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="home"></ion-icon>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vTyG6rCnktFRNjxMur0NCeREYn6EEIOSzxnMaEBUX3yAKL0ag_CBK5pqNGGETLgA1wuSE8h3BDy9u7r/pub" target="_blank" rel="noopener">
                            <span>Házirend</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="podium"></ion-icon>
                        <span>NTAK: MA19006009</span>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Partnereink</h2>
                <ul>
                    <li>
                        <a href="https://kisfaludyprogram.hu" target="_blank" rel="noopener">
                            A 2021-es felújítás a Kisfaludy Program támogatásával valósult meg
                        </a>
                    </li>
                    <li>
                        <a href="https://siarena.hu" target="_blank" rel="noopener">
                            siarena.hu
                        </a>
                    </li>
                    <li>
                        <a href="https://bakonyi-apartmanhaz.business.site" target="_blank" rel="noopener">
                            Google útvonaltervező
                        </a>
                    </li>
                </ul>
            </div>

        </Container>
    );
}

const Container = styled.div`
    display: grid;
    gap: 4rem;
    margin-top: 8rem;
    padding: 4rem 1rem;
    background: var(--light-day);

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 8rem 2rem;
    }

    @media(min-width: 1024px) {
        grid-template-columns: 0.75fr 1.25fr 0.75fr;
    }

    >div {

        h2 {
            font-size: 1rem;
            color: var(--night);
            margin-bottom: 1rem;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {

                a {
                    font-size: 1rem;
                    color: var(--light-night);
                    text-decoration: none;
                }

                ion-icon {
                    font-size: 1rem;
                    color: var(--night);
                    margin-right: 0.5rem;
                }

                span {
                    font-size: 1rem;
                    color: var(--night);
                    letter-spacing: 0.125rem;
                }
            }
        }
    }
`;