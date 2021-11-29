import styled from "styled-components";

export default function Pricing() {
    return (
        <Container data-component="pricing" id="araink">

            <Title>
                <div></div>
                <h2>Áraink</h2>
                <div></div>
            </Title>

            <BoxesContainer>

                <Box>
                    <h2>Kisszoba 2</h2>
                    <p>Akár <span>4500 Ft</span> / éj</p>
                    <ul>
                        <li>
                            <span>1 fő</span>
                            <span>7000 Ft</span>
                        </li>
                        <li>
                            <span>2 fő</span>
                            <span>9000 Ft</span>
                        </li>
                    </ul>
                </Box>

                <Box>
                    <h2>Kisszoba 1 + 1</h2>
                    <p>Akár <span>3300 Ft</span> / éj</p>
                    <ul>
                        <li>
                            <span>1 fő</span>
                            <span>7000 Ft</span>
                        </li>
                        <li>
                            <span>2 fő</span>
                            <span>9000 Ft</span>
                        </li>
                        <li>
                            <span>3 fő</span>
                            <span>11000 Ft</span>
                        </li>
                    </ul>
                </Box>

                <Box>
                    <h2>Apartman 5</h2>
                    <p>Akár <span>4000 Ft</span> / éj</p>
                    <ul>
                        <li>
                            <span>1 fő</span>
                            <span>8000 Ft</span>
                        </li>
                        <li>
                            <span>2 fő</span>
                            <span>12000 Ft</span>
                        </li>
                        <li>
                            <span>3 fő</span>
                            <span>15000 Ft</span>
                        </li>
                        <li>
                            <span>4 fő</span>
                            <span>17000 Ft</span>
                        </li>
                        <li>
                            <span>5 fő</span>
                            <span>19000 Ft</span>
                        </li>
                    </ul>
                </Box>

                <Box>
                    <h2>Apartman 7</h2>
                    <p>Akár <span>4000 Ft</span> / éj</p>
                    <ul>
                        <li>
                            <span>1 fő</span>
                            <span>10000 Ft</span>
                        </li>
                        <li>
                            <span>2 fő</span>
                            <span>12000 Ft</span>
                        </li>
                        <li>
                            <span>3 fő</span>
                            <span>16000 Ft</span>
                        </li>
                        <li>
                            <span>4 fő</span>
                            <span>18000 Ft</span>
                        </li>
                        <li>
                            <span>5 fő</span>
                            <span>22000 Ft</span>
                        </li>
                        <li>
                            <span>6 fő</span>
                            <span>25000 Ft</span>
                        </li>
                        <li>
                            <span>7 fő</span>
                            <span>28000 Ft</span>
                        </li>
                    </ul>
                </Box>
            </BoxesContainer>
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

    div:nth-child(1) {
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

    div:nth-child(3) {
        width: 25%;
        border: 0.5px solid var(--light-night);
    }
`;

const BoxesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media(min-width: 1024px) {
        gap: 4rem;
    }
`;

const Box = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--light-night);
    border-radius: 0.25rem;
    padding: 1rem 2rem 0 2rem;

    h2 {
        color: var(--night);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: var(--night);
        font-size: 1rem;
        margin-bottom: 1rem;

        span {
            color: var(--decor);
            font-size: 1.5rem;
        }
    }

    ul {
        width: 80%;
        list-style-type: none;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
    
            span {
                color: var(--light-white);
                font-size: 1rem;
            }
        }
    }
`;