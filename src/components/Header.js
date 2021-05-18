import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
           menuIcon: 'fa fa-bars',
           menuShow:false,
        }
    }
    render() {
        const menuToggle = (e) => {
            var toggleBtn = e.currentTarget;
            var menuParent = toggleBtn.closest( '.site-menu' );
            e.target.classList.add('click-state');
            
            if ( menuParent.matches( '.menu-show' ) ) {
                jQuery( 'body' ).removeClass( 'overflow-hidden' );
                this.setState({menuIcon: 'fa fa-bars', menuShow:false});
            } else {
                jQuery( 'body' ).addClass( 'overflow-hidden' );
                this.setState({menuIcon: 'fa fa-times', menuShow:true});

            }
        };
        const scrollIntoViewSection = (e) => {
            let menuItem = e.currentTarget;
            if( '#contact-us' == jQuery( menuItem ).attr('href') ) {
                e.preventDefault();
                jQuery('.eapps-form-floating-button').click();
                return;
            }
            jQuery('html, body').animate({
                scrollTop: jQuery( jQuery.attr(menuItem, 'href') ).offset().top-70
            }, 500);
            if( window.innerWidth <=  992 )  {
                jQuery( 'body' ).removeClass( 'overflow-hidden' );
                this.setState({menuIcon: 'fa fa-bars', menuShow:false});
            }
            
        };
        return (
            <header className="site-header">
                <div className="container">
                    <div className="header-wrap d-flex flex-content">
                        <a title="Fire & Safety" className="site-logo">
                            <img src="./images/logo+text.png" alt="Fire & Safety" />
                        </a>
                        <div className={this.state.menuShow ? 'site-menu menu-show' : 'site-menu'}>
                            <span className="menu-toogle" onClick={menuToggle}><i className={this.state.menuIcon} aria-hidden="true"></i></span>
                            <div className="menu-wrapper">
                                <ul className="menu-list d-flex" __props="center">
                                    <li><a href="#about-us" className="menu-item" onClick={scrollIntoViewSection}>About Us</a></li>
                                    <li><a href="#services" className="menu-item" onClick={scrollIntoViewSection}>Services</a></li>
                                    <li><a href="#our-product" className="menu-item" onClick={scrollIntoViewSection}>Our Product</a></li>
                                    <li><a href="#our-team" className="menu-item" onClick={scrollIntoViewSection}>Our Team</a></li>
                                    <li><a href="#contact-us" className="btn" onClick={scrollIntoViewSection}>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
