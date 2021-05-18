import React, { Component, Lazy } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
           submitStatus: false,
        }
    }
    componentDidMount() {
        jQuery(function(){
            jQuery("#recaptcha-group").append('<script src="https://www.google.com/recaptcha/api.js" async defer></script>');
            jQuery("#recaptcha-group").append('<script src="https://smtpjs.com/v3/smtp.js"></script>');
        });
    }
    submitForm(e) {
        e.preventDefault();
        const { mailName, mailAddress, mailPhone, mailMessage } = e.currentTarget;
        
        jQuery( ".errMsg" ).remove();

        // Check mail address is valid !
        if( mailAddress.value.length < 1 ) {
            jQuery( mailAddress ).parent().append( '<span class="errMsg">Email address is required.</span>' );
            mailAddress.focus();
            return;

        } else if( mailAddress.value.length > 1 ) {
            if ( ! ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( mailAddress.value ) ) ) {

                jQuery( mailAddress ).parent().append( '<span class="errMsg">Invalid, Email Address</span>' );
                mailAddress.focus();
                return;
            }
        }

        // Check phone is valid !
        if( mailPhone.value.length > 1 ) {
            if( ! ( /^\d{10}$/.test( mailPhone.value ) ) ) {

                jQuery( mailPhone ).parent().append( '<span class="errMsg">Invalid Phone Number, Use 10 digit</span>' );
                mailPhone.focus();
                return;
            }
        }

        // Check message is not empty !
        if( mailMessage.value.length < 1 ) {
            jQuery( mailMessage ).parent().append( '<span class="errMsg">Enter Your Message</span>' );
            mailMessage.focus();

            return;
        }

         // Check g-recaptcha is valid !
         if( grecaptcha.getResponse().length < 1 ) {
            jQuery('#recaptcha-group').parent().append( '<span class="errMsg">Verify, You are not a robot !</span>' );
            return;
        }
        jQuery( '#contact-form-wrap' ).find('form').addClass('sending');
        Email.send({
            SecureToken : "30168c97-0c85-4140-b228-c4fc77865230 ",
            To : 'mkn1202@gmail.com',
            From : "test@hrtdesign.online",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => {
              if( 'OK' == message ) {
                  jQuery( '#contact-form-wrap' ).find('form').remove();
                  jQuery( '#contact-form-wrap' ).find('.success-msg').addClass( 'sent' );
              }
          }
        );


    }
    render() {
        return (
            <div className="section--contact-us section-space" id="contact-us">
                <div className="container-sm">
                    <h2>Contact Us - </h2>
                    <br />
                    <div id="contact-form-wrap">
                        <form method="post" onSubmit={this.submitForm}>
                            <div className="input-group">
                                <label htmlFor="mail-name">Name</label>
                                <input type="text" name="mailName" id="mail-name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="mail-address">Email</label>
                                <input type="email" name="mailAddress" id="mail-address"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="mail-phone">Phone Number</label>
                                <input type="text" name="mailPhone" id="mail-phone"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="mail-message">Query</label>
                                <textarea type="text" name="mailMessage" id="mail-message" rows="5"></textarea>
                            </div>
                            <div className="input-group" id="recaptcha-group">
                                {/* <div className="g-recaptcha" data-sitekey="6LfyN74ZAAAAAA3YowSQCdig-2PyK-EM7wy6UIj8"></div> */}
                                <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
                            </div>
                            <div className="input-group">
                                <button type="submit" className="submit-form btn">Send</button>
                            </div>
                        </form>
                        <div className="success-msg">
                            <img src="./images/success-icon.svg" alt="Form Submitted Successfully"/>
                            <p>Your query has has been successfully submitted.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
