import React, { Component } from 'react'
    
export default class Team extends Component {
    componentDidMount() {
        jQuery('.team-wrap').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            lazyLoad: true,
            items:1,
            autoplay:false,
            autoplayTimeout:5000,
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="section--team section-space section-alter" id="our-team">
                    <div className="container">
                        <h2 className="section--title">Our Team</h2>
                        <div className="team-wrap owl-carousel">

                            {/* Bipin */}
                            <div className="team">
                                <div className="img">
                                    <img className="owl-lazy" data-src="./images/team/bipin.jpg" alt="Rakesh KUmar Meena" title="Bipin Kumar"/>
                                </div>
                                <div className="content">
                                    <span className="name">Mr. Bipin Kumar</span>
                                    <span>14 years of passinate experience in managing EHS & Fire Safety.</span>
                                    <span>Alumni at <strong><i>National fire service college</i></strong>, Regional labour Institute and Kanpur university.</span>
                                    <span><strong><i>Certified Auditor</i></strong>, RLI Faridabad.</span>
                                    <span>IA:ISO 45001 : 2018</span>
                                    <span>IA : ISO 14001 : 2015</span>
                                </div>
                            </div>

                            {/* Rakesh */}
                            <div className="team">
                                <div className="img">
                                    <img className="owl-lazy" data-src="./images/team/rakesh.jpg" alt="Rakesh KUmar Meena" title="Rakesh Kumar Meena"/>
                                </div>
                                <div className="content">
                                    <span className="name">Mr. Rakesk Kumar Meena</span>
                                    <span>Certified Fire Protection Specialist (NFPA, USA)</span>
                                    <span>Certified Trainer (Nebosh & DuPont), GIFireE, MIFire(IFE, UK),</span>
                                    <span>GradIOSH, IDipOSH (British Safety Council), Lead Auditor (IRCA)</span>
                                    <span>Master in Disaster Management, PGDISM,</span>
                                    <span>Certification in NFPA 72, 101, 13, 20, 25</span>
                                </div>
                            </div>

                            <div className="team alt">
                                <div className="content">
                                    <span className="name">Mr. G.D. Devgan</span>
                                    <span>He is enriched with more than 20 years of experience in Fire & Safety industry. He is holding Ph.D. in Fire Safety and worked upon “Performance Based Approach for improving Fire Safety Standards.”</span>
                                    <span>His credentials are as under: -</span>
                                    <ul>
                                        <li>N.F.S.C. - S.O. Course (Gold Medallist).</li>
                                        <li>Grade I. Fire Engg. (U.K.),</li>
                                        <li>M.Sc. in Disaster Management</li>
                                        <li>M.Phil.</li>
                                        <li>Ph.D.</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </React.Fragment>
        )
    }
}
