import styled from "styled-components";

export default function Footer() {
    return (
        <Container data-component="footer">
            <GridContainer>

                <div>
                    <h5>Quick Links</h5>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Trainers</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div>
                    <h5>Opening Hours</h5>
                    <ul>
                        <li>
                            <span>Monday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Tuesday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Wednesday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Thursday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Friday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Saturday:</span><span>7.00am - 10.30pm</span>
                        </li>
                        <li>
                            <span>Sunday:</span><span>7.00am - 10.30pm</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5>Reach Us</h5>
                    <ul>
                        <li>
                            <ion-icon name="call"></ion-icon><span>+456 643 345</span>
                        </li>
                        <li>
                            <ion-icon name="call"></ion-icon><span>+456 643 355</span>
                        </li>
                        <li>
                            <ion-icon name="mail"></ion-icon><span>kukac@kukac.com.co.uk</span>
                        </li>
                        <li>
                            <ion-icon name="location"></ion-icon><span>Indiana, Main street</span>
                        </li>
                        <li>
                            <div>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5>NEWSLETTER</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita?</p>
                    <input placeholder="you know what..." />
                    <button>Subscribe</button>
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

        h5 {
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
                font-size: 1rem;
                color: var(--light-white);
                cursor: pointer;
            }
        }
    }

    >div:nth-child(2) {

        h5 {
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
                
                span:nth-child(1) {
                    font-size: 1rem;
                    color: var(--light-white);
                    display: inline-block;
                    margin-right: 0.5rem;
                }

                span:nth-child(2) {
                    font-size: 1rem;
                    color: var(--red);
                }
            }
        }
    }

    >div:nth-child(3) {

        h5 {
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
                    color: var(--red);
                    margin-right: 0.5rem;
                }

                span {
                    font-size: 1rem;
                    color: var(--light-white);
                }

                div {
                    display: flex;
                    gap: 1.5rem;

                    ion-icon {
                        font-size: 1.5rem;
                        color: var(--light-white);
                        cursor: pointer;
                    }
                }
            }
        }
    }

    >div:nth-child(4) {
        
        h5 {
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