import React, { Component } from 'react'

export default class Banner extends Component {
    componentDidMount() {
        jQuery('.banner-wrapper').owlCarousel({
            loop:true,
            nav:true,
            lazyLoad: true,
            items:1,
            autoplay:false,
            autoplayTimeout:5000,
        })
    }
    render() {
        return (
            <div className="site-banner">
                <div className="banner-wrapper owl-carousel owl-theme">
                    <div className="slider-wrapper item">
                        <img className="owl-lazy" data-src="./images/slider1.jpg" alt="Slider 1" />
                    </div>
                    <div className="slider-wrapper item">
                        <div className="content">
                            <h2>Fire/Safety/EHS Auditing and consulting.</h2>
                        </div>
                        <img className="owl-lazy" data-src="./images/slider3.jpg" alt="Fire/Safety/EHS Auditing and consulting." />
                    </div>
                    <div className="slider-wrapper item">
                        <div className="content">
                            <h2>FIRE/SAFETY/EHS Training</h2>
                        </div>
                        <img className="owl-lazy" data-src="./images/slider4.jpg" alt="FIRE/SAFETY/EHS Training" />
                    </div>
                    <div className="slider-wrapper item">
                        <div className='content alt'>
                            <h2 >FIRE Fighting Equipment</h2>
                        </div>
                        <img className="owl-lazy" data-src="./images/slider5.jpg" alt="Slider 5" />
                    </div>
                    <div className="slider-wrapper item">
                        <div className='content'>
                            <h2 className="dark">VISUAL SAFETY as per Indian standards</h2>
                        </div>
                        <img className="owl-lazy" data-src="./images/slider2.jpg" style={{objectFit: "contain"}} alt="VISUAL SAFETY as per Indian standards" />
                    </div>
                </div>
            </div>
        )
    }
}
