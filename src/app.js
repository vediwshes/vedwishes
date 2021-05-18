import React, { Component, lazy } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Form from './components/Form';
import Footer from './components/Footer';

export default class App extends Component {
    constructor( props ) {
        super(props);
    }
    render() {
        const socialLinks = [
            {
                icon:'fa fa-facebook-official',
                link:'https://www.facebook.com/Vedwishes-Enterprise-113787163659297/',
                title:'Facebook',
            },
            {
                icon:'fa fa-instagram',
                link:'https://www.instagram.com/vedwishesenterprise/',
                title:'Instagram',
            },
        ];
        const contactDetails = [
            {
                icon:'fa fa-phone',
                link:'tel:+919953455052',
                text:'+91-9953455052',
            },
            {
                icon:'fa fa-phone',
                link:'tel:+919871336101',
                text:'+91-9871336101',
            },
            {
                icon:'fa fa-envelope',
                link:'mailto:info@vedwishes.com',
                text:'info@vedwishes.com'
            },
            {
                icon:'fa fa-envelope',
                link:'mailto:contact@vedwishes.com',
                text:'contact@vedwishes.com'
            },
        ];
      
        return (
            <React.Fragment>
                <Navbar
                    socialLinks={socialLinks}
                    contactDetails={contactDetails}
                />
                <Header />
                <Banner />
                <Content />
                {/* <Form /> */}
                {/* <FAQs /> */}
                <Footer
                    socialLinks={socialLinks}
                    contactDetails = {contactDetails}
                />
            </React.Fragment>
        )
    }
}