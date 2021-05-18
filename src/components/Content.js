import React, { Component, lazy } from 'react';
import Team from './Team';
import Fade from 'react-reveal/Fade';
import Customer from './Customer';


export default class Content extends Component {
    componentDidMount() {
        // jQuery('.gallery-brick').owlCarousel({
        //     loop:true,
        //     nav:true,
        //     lazyLoad: true,
        //     items:4,
        //     autoplay:false,
        //     autoplayTimeout:5000,
        // })
    }
    render() {
        return (
            <React.Fragment>
                <div className="section--about-site section-space-0B fd" id="about-us">
                    <Fade>
                        <div className="container-sm">
                            <p>Vedwishes enterprise as a one of imminent & promising fire & life safety service provider(equipment supply, AMC of fire system, anticovid solution, Visual safety, PPEs and audit & training). We believe in a strong safety culture and we put our continuous efforts to provide our clients with a safe & healthy working environment. We offer customized and comprehensive fire life safety & risk management services for commercial/multi-storey buildings, hotels, hospitals, manufacturing units, industrial plants, office premises & leading educational institutions.</p>
                            <p>We have the capacity to present a powerful blend of technical, operational & business know-how integrated with sector specific regulatory risk management skills.</p>
                            <p>Our experience is available to support our client on-going safe and sustainable operation. Our team has extensive experience and technical expertise that is highly valued across the industries.</p>

                        </div>
                    </Fade>
                </div>

                <Fade>
                    {/* section--serveices 1 */}
                    <div className="section--services1 section-space-0B fd" id="services">
                        <div className="container">
                            <h2 className="section--title">We provide various services :</h2>
                            <div className="table-responsive">
                                
                                <table className="table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>TRAINING</th>
                                            <th>AUDIT</th>
                                            <th>CONSULTING</th>
                                            <th>OTHERS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Basic Fire Fighting</td>
                                            <td>Covid19</td>
                                            <td>NBC-(Part 4 Fire & Lifesafety)</td>
                                            <td>Pump Performance Test</td>
                                        </tr>
                                        <tr>
                                            <td>Safety Warden</td>
                                            <td>Fire Safety(Building & manufacturing industries)</td>
                                            <td>Fire Safety</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Mock drill (Fire/Execution)</td>
                                            <td>General safety (Customized)</td>
                                            <td>Fire NOC (Assist in prepration)</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Electric safety</td>
                                            <td>Office safety</td>
                                            <td>Developing SOP/Guidelines of variuos functions</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>PTW</td>
                                            <td>Plumbing</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Work at height</td>
                                            <td>Energy Audit</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Ladder safety</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>First aid training</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* section--serveices 1 */}
                </Fade>

                {/* Section--product */}
                <div className="section--services section-space fd" id="our-product">
                    <div className="container">
                        <h2 className="section--title">Our Products</h2>
                        <div>

                            <div className="product-brick section-space-0T">
                                <h3>Fire Fighting</h3>
                                <div className="product-wrap">
                                    <div className="product">
                                        <h4>Hydrant Fittings & Accessories</h4>
                                        <div className="img">
                                            <img src="./images/products/hydrant.jpg" loading="lazy" alt="Hydrant Fittings & Accessories"/>
                                        </div>
                                    </div>
                                    
                                    <div className="product">
                                        <h4>Fire Extinguishers & accessories</h4>
                                        <div className="img">
                                            <img className="cover" src="./images/products/fire-extinguisher.jpg"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>First Aid Hosereel <br />& spares</h4>
                                        <div className="img">
                                            <img src="./images/products/hose-reel.jpg" loading="lazy" alt="First Aid Hosereel <br />& spares"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Sprinklers</h4>
                                        <div className="img">
                                            <img src="./images/products/sprinkler.jpg" loading="lazy" alt="Sprinklers"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Delivery Hosepipe</h4>
                                        <div className="img">
                                        <img src="./images/products/hose-pipe.jpg" loading="lazy" alt="Delivery Hosepipe"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Fire Alarm System, R & M</h4>
                                        <div className="img">
                                        <img src="./images/products/fire-alarm.jpg" loading="lazy" alt="Fire Alarm System, R & M"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //Head Protection */}

                            {/* Ear Protection */}
                            <div className="product-brick section-space-0T">
                                <h3>PPEs</h3>
                                <div className="product-wrap">
                                    <div className="product">
                                        <h4>Head Protection(Helmets)</h4>
                                        <div className="img">
                                        <img src="./images/products/head-protection.jpg" loading="lazy" alt="Head Protection(Helmets)"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Ear Protection</h4>
                                        <div className="img">
                                            <img src="./images/products/ear-protection.jpg" loading="lazy" alt="Ear Protection"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Eye Protection</h4>
                                        <div className="img">
                                            <img src="./images/products/eye-protection.jpg" loading="lazy" alt="Eye Protection"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Hand Protection</h4>
                                        <div className="img">
                                            <img src="./images/products/hand-protection.jpg" loading="lazy" alt="Hand Protection"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Foot Protection</h4>
                                        <div className="img">
                                            <img src="./images/products/foot-protection.jpg" loading="lazy" alt="Foot Protection"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Full Body Protection</h4>
                                        <div className="img">
                                        <img src="./images/products/full-body.jpg" loading="lazy" alt="Full Body Protection"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Respiration</h4>
                                        <div className="img">
                                        <img src="./images/products/respiration.jpg" loading="lazy" alt="Respiration"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //Ear Protection */}

                            <div className="product-brick passive-fire section-space-0T">
                                <h3>Passive Fire System</h3>
                                <div className="product-wrap">
                                    <div className="product">
                                        <h4>Fire Door</h4>
                                        <div className="img">
                                        <img src="./images/products/fire-door.jpg" loading="lazy" alt="Fire Door"/>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <h4>Fire Seal</h4>
                                        <div className="img">
                                        <img src="./images/products/fire-seal.jpg" loading="lazy" alt="Fire Seal"/>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                        </div>                        
                    </div>
                </div>
                {/* Section--product */}

                <Fade>
                    {/* section--brands */}
                    <div className="section--brands section-space section-alter fd">
                        <div className="container">
                            <h2 className="section--title">Brand Patners</h2>
                            <div className="brands-wrap">
                                <span className="brand">Ceasefire</span>
                                <span className="brand">Kanex</span>
                                <span className="brand">Kalpataru</span>
                                <span className="brand">Palex</span>
                            </div>
                        </div>
                    </div>
                    {/* //section--brands */}
                </Fade>

                {/* section--customer */}
                  <Fade>
                    <Customer />
                </Fade>
                {/* //section--customer */}

                {/* section--team */}
                <Fade>
                    <Team />
                </Fade>
                {/* //section--team */}

                <Fade>
                    {/* section--Gallery */}
                    <div className="section--gallery section-space fd">
                        <div className="container">
                            <h2 className="section--title">Safety Gallery</h2>
                            <div className="gallery-wrap">
                                <div className="gallery-brick">
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/1.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/2.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/3.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/4.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/5.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/6.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/7.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/8.jpg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/9.jpeg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/10.jpeg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/11.jpeg" alt="Ved Wishes Gallery" />
                                    <img className="owl-lazy" loading="lazy" src="./images/gallery/12.jpeg" alt="Ved Wishes Gallery" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //section--Gallery */}
                </Fade>

            </React.Fragment>
        )
    }
}
