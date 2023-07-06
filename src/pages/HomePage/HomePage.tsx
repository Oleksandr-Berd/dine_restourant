import React from 'react';

import Hero from "components/Hero/Hero";
import EnjoyablePlace from 'components/EnjoyablePlace/EnjoyablePlace';
import LocalFood from 'components/EnjoyablePlace/LocalFood';
import DeviMenu from 'components/Menu/DeviMenu';
import Events from 'components/Events/Events';
import Ready from 'components/Ready/Ready';
import Footer from 'components/Footer/Footer';

const HomePage = (): JSX.Element => {

    return (<div>
        <Hero />
        <EnjoyablePlace />
        <LocalFood />
        <DeviMenu />
        <Events />
        <Ready />
        <Footer/>
    </div>);
}

export default HomePage;