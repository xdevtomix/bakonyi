import styled from "styled-components";

export default function Introduction() {
    return (
        <Container data-component="introduction">
            <h2>A Bakonyi Apartmanház a 82-es számú út mellett Eplény központjában található.</h2>

            <p>
                Ide minden közel van!
            </p>

            <p>
                A környékbeli erdőkben jelzett túraútvonalak és kerékpárutak várják a kirándulni, kikapcsolódni, sportolni vágyókat.
            </p>

            <p>
                A sportpálya, játszótér, kondipark és szabadtéri bográcsozó 100 méterre,
                a hétüléses felvonó 600-700 méterre,
                a síközpont 2500 méterre van.
            </p>

            <p>
                A legközelebbi város - Zirc - csak 5km,
                Veszprém 15km,
                de a Balaton is csak 30 perc autóval.
            </p>

            <h2>
                Várjuk Önöket!
            </h2>

            <span>
                Segítünk ajánlatainkkal felfedezni a környék szépségeit, a táj adta lehetőségeket!
            </span>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem;
    text-align: center;
    color: var(--night);

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1rem;
    }
`;