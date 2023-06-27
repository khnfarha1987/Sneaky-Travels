import React from 'react';
import Icon1 from '../../images/Gennadi Grand Resort.jpg';
import Icon2 from '../../images/aquaworld-belek-by-mp-hotels-0.avif';
import Icon3 from '../../images/secrets-lanzarote-resort-and-spa-adults-only-2.avif';
import Icon4 from '../../images/spain.jpeg';
import Icon5 from '../../images/malta.jpeg';
import Icon6 from '../../images/iberostar-selection-jardin-del-sol-suites-0.avif';

import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP,
        btn
        } from './ServicesElements';
import { Button } from 'react-scroll';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Hot Offers</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Gennadi Grand Resort
                    </ServicesH2>
                    <ServicesP>The lovely 5-star Gennadi Grand Resort is situated on the coast of the picturesque Gennadi resort, Rhodes. </ServicesP>
                    <button className='sc-cPiKLX dvWfFG'> <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/rhodes/gennadi/gennadi-grand-resort.html'> Book Now! </a> </button>
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Aquaworld Belek MP Hotels</ServicesH2>
                    <ServicesP>Have you ever been to a resort with 11 swimming pools? Anyone who has can tell you it’s awesome. </ServicesP>
                    <button className='sc-cPiKLX dvWfFG' > <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/turkey/antalya/belek/aquaworld-belek-by-mp-hotels.html'> Book Now! </a> </button>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Secrets Lanzarote Resort</ServicesH2>
                    <ServicesP>The 5-star Secrets Lanzarote Resort & Spa (Adults Only) is located on the coast of the majestic Puerto Calero resort, Lanzarote.</ServicesP>
                    <button className='sc-cPiKLX dvWfFG' > <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/turkey/antalya/belek/aquaworld-belek-by-mp-hotels.html'> Book Now! </a> </button>

                </ServicesCard>
					<ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Spectacular Spain</ServicesH2>
                    <ServicesP>Check out our great range of holidays with deposits from £25pp.</ServicesP>
                    <button className='sc-cPiKLX dvWfFG' > <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/?destinationIds=987'> Book Now! </a> </button>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Majestic Malta</ServicesH2>
                    <ServicesP>Save big on sun-soaked getaways to Malta.</ServicesP>
                    <button className='sc-cPiKLX dvWfFG' > <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/?destinationIds=897'> Book Now! </a> </button>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Iberostar Hotels & Resorts</ServicesH2>
                    <ServicesP>Sunshine escapes await with Iberostar Hotels & Resorts.</ServicesP>
                    <button className='sc-cPiKLX dvWfFG' > <a target="_blank" rel="noreferrer" href='https://www.loveholidays.com/holidays/?destinationIds=897'> Book Now! </a> </button>

                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
