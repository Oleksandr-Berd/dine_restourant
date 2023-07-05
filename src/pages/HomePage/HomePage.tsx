import React from 'react';

import Hero from "components/Hero/Hero";
import EnjoyablePlace from 'components/EnjoyablePlace/EnjoyablePlace';
import LocalFood from 'components/EnjoyablePlace/LocalFood';

const HomePage = (): JSX.Element => {

    return (<div>
        <Hero />
        <EnjoyablePlace />
        <LocalFood/>
    </div>);
}

export default HomePage;