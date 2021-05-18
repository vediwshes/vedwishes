import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="site-nav border-bottom">
                <div className="container">
                    <div className="site-nav-wrap d-flex flex-content">
                        <div className="direct-contact">
                            {
                                this.props.contactDetails.map( (cd, inx) => {
                                    return (
                                        <a key={inx} href={cd.link}><span className={cd.icon}></span>{cd.text}</a>
                                    )
                                } )
                            }
                        </div>
                        <div className="keep-in-touch">
                            <span className="find">Find us on</span>
                            {
                                this.props.socialLinks.map( (sl, inx) => {
                                    return (
                                        <a key={inx} href={sl.link} target="_blank" rel="noopener noreferrer" title={sl.title}><span className={sl.icon} ></span></a>
                                    )

                                } )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
