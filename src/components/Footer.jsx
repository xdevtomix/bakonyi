import styled from "styled-components";

export default function Footer() {
    return (
        <Container data-component="footer" id="kapcsolat">
            <GridContainer>

                <div>
                    <h2>Gyors linkek</h2>
                    <ul>
                        <li>
                            <a href="#fooldal">Főoldal</a>
                        </li>
                        <li>
                            <a href="#araink">Áraink</a>
                        </li>
                        <li>
                            <a href="#velemenyek">Vélemények</a>
                        </li>
                        <li>
                            <a href="#kapcsolat">Kapcsolat</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Elérhetőségeink</h2>
                    <ul>
                        <li>
                            <ion-icon name="call"></ion-icon><span>+36 88 453 122</span>
                        </li>
                        <li>
                            <ion-icon name="call"></ion-icon><span>+36 70 31 22 091</span>
                        </li>
                        <li>
                            <ion-icon name="mail"></ion-icon><span>dreissiger@gmail.com</span>
                        </li>
                        <li>
                            <ion-icon name="location"></ion-icon><span>8413 Eplény Veszprémi utca 41</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Írjon nekünk</h2>
                    <p>Számunka fontos a véleménye, visszajelzése</p>
                    <textarea placeholder="Kedves Bakonyi Apartmanház..."></textarea>
                    <button>Elküldöm</button>
                </div>

            </GridContainer>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem 8rem 1rem;

    @media(min-width: 768px) {
        padding: 0 4rem 8rem 4rem;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1366px) {
        grid-template-columns: 1fr 2fr 1.5fr 1.5fr;
    }

    >div:nth-child(1) {

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
            }
        }
    }

    >div:nth-child(2) {

        h2 {
            font-size: 1rem;
            color: var(--white);
            margin-bottom: 1rem;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
                
                >ion-icon {
                    font-size: 1rem;
                    color: var(--night);
                    margin-right: 0.5rem;
                }

                span {
                    font-size: 1rem;
                    color: var(--light-white);
                    letter-spacing: 0.125rem;
                }
            }
        }
    }

    >div:nth-child(3) {
        
        h2 {
            font-size: 1rem;
            color: var(--white);
            margin-bottom: 1rem;
            letter-spacing: 0.25rem;
        }

        p {
            font-size: 1rem;
            color: var(--light-white);
            margin-bottom: 1rem;
        }

        input {
            font-size: 1rem;
            color: var(--light-white);
            background: #333;
            border: none;
            outline: none;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            display: block;
            margin-bottom: 1rem;
        }

        button {
            cursor: pointer;
            background: var(--red);
            color: var(--white);
            width: max-content;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            letter-spacing: 0.1rem;
            font-size: 1rem;
        }
    }
`;