import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props)
    }
    scroll2Top() {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    }
    render() {
        return (
            <footer className="site-footer">
                <div className="mega-footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-about">
                                <div className="footer-logo">
                                    <img src="./images/logo.png"/>
                                    <span>Ved Wishes</span>
                                </div>
                            </div>
                            <div className="footer-loc">
                                <i className="fa fa-map-marker"></i>
                                <p>RajNagar Extension,<br />Ghaziabad – 201017</p>
                            </div>
                            <div className="footer-contact">
                                {
                                    this.props.contactDetails.map( (cd, inx) => {
                                        return (
                                            <a key={inx} href={cd.link}><span className={cd.icon}></span>{cd.text}</a>
                                        )
                                    } )
                                }
                                <div className="footer-icons">
                                    {
                                        this.props.socialLinks.map( (sl, inx) => {
                                            return (
                                                <a key={inx} href={sl.link} target="_blank" rel="noopener noreferrer" title={sl.title}><span className={sl.icon}></span></a>
                                            )

                                        } )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mini-footer">
                    <div className="container">
                        <p>© Copyright {new Date().getFullYear()}, VedWishes Enterprise. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="scroll2top" onClick={this.scroll2Top}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
            </footer>
        )
    }
}
