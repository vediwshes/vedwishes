import React, { Component } from 'react'

export default class FAQs extends Component {
    
    toggleFAQ(e) {
        let ele = e.currentTarget;
        jQuery( ele ).siblings().slideToggle();
        jQuery( ele ).find('span').toggleClass('fa-minus');
        
    }
    render() {
        
        // const faqData = [
        //     {
        //         'ques' : 'Do you also take care of after sales service?',
        //         'answ' : 'Yes, very much rather we proactively remind, follow people for two things - due services before time and getting people trained.'
        //     },
        //     {
        //         'ques' : 'Do you also take care of after sales service?',
        //         'answ' : 'Yes, very much rather we proactively remind, follow people for two things - due services before time and getting people trained.'
        //     },
        //     {
        //         'ques' : 'Do you also take care of after sales service?',
        //         'answ' : 'Yes, very much rather we proactively remind, follow people for two things - due services before time and getting people trained.'
        //     },
        //     {
        //         'ques' : 'Do you also take care of after sales service?',
        //         'answ' : 'Yes, very much rather we proactively remind, follow people for two things - due services before time and getting people trained.'
        //     },
        //     {
        //         'ques' : 'Do you also take care of after sales service?',
        //         'answ' : 'Yes, very much rather we proactively remind, follow people for two things - due services before time and getting people trained.'
        //     },
        // ]
        // var ldJsonFAQ = '';
        // ldJsonFAQ = faqData.map(( faq, inx ) => {
        //     return (
        //         '{ "@type": "Question", "name": "'+ faq.ques +'", "acceptedAnswer": { "@type": "Answer", "text": "'+ faq.answ +'" } }'
                
        //     )
        // })
        
        return (
            <React.Fragment>
                {/* <div className="section--faqs section-space">
                    <div className="container-cp">
                        <div className="faqs-wrapper">
                            <h2 className="text-center">Frequently Asked Questions?</h2>
                            { faqData.map(( faq, inx ) => {
                                return (
                                    <div className="faq-block" key={inx}>
                                        <div className="faq-ques" onClick={this.toggleFAQ}>
                                            <h4>{faq.ques}</h4>
                                            <span className="fa fa-plus"></span>
                                        </div>
                                        <div className="faq-ans">
                                            <p>{faq.answ}</p>
                                        </div>
                                    </div>
                                )
                            }) }
                            

                        </div>
                    </div>
                </div>
                <script type="application/ld+json">
                    {'{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": ['+ ldJsonFAQ.toString() +'] }'}

                </script> */}

            </React.Fragment>
        )
    }
}
