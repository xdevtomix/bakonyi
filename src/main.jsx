import { render } from 'preact';
import { addIcons } from 'ionicons';
import { defineCustomElements } from 'ionicons/loader';
import {
    bedOutline,
    beerOutline,
    call,
    cardOutline,
    carSportOutline,
    checkmarkOutline,
    closeOutline,
    home,
    informationCircleOutline,
    locateOutline,
    location,
    logInOutline,
    logOutOutline,
    mail,
    menu,
    moonOutline,
    pawOutline,
    peopleOutline,
    planetOutline,
    podium,
    pizzaOutline,
    storefrontOutline,
    walletOutline,
    wifiOutline,
} from 'ionicons/icons';

import App from './App';

addIcons({
    bedOutline,
    beerOutline,
    call,
    cardOutline,
    carSportOutline,
    checkmarkOutline,
    closeOutline,
    home,
    informationCircleOutline,
    locateOutline,
    location,
    logInOutline,
    logOutOutline,
    mail,
    menu,
    moonOutline,
    pawOutline,
    peopleOutline,
    planetOutline,
    podium,
    pizzaOutline,
    storefrontOutline,
    walletOutline,
    wifiOutline,
});

defineCustomElements().then(() => {
    render(<App />, document.getElementById('root'));
});
