import React from 'react';
// import { Helmet } from 'react-helmet';
import {Helmet} from 'react-helmet';
const FaqSchema = () => {
    const faqs = [
        {
            question: 'How long does it take to get a Saudi Arabia Visit Visa?',
            answer: 'Saudi Arabia Visit Visa can be obtained in 3-4 business days, if applied through the consulate, but an e-Visa process is fast and can issue you visa in 5-30 minutes.'
        },
        {
            question: 'Can my Saudi Arabia Visa be rejected?',
            answer: 'Yes, it can be rejected based on certain grounds, of which you will be notified via email, about the reason for rejection and last date of submission of an appeal.'
        },
        {
            question: 'Can I get my visa fee back in case my visa gets rejected? ',
            answer: 'No, visa fee is non-refundable in any case.'
        }, {
            question: 'Can I get a multiple-entry tourist visa to Saudi Arabia?',
            answer: 'Yes, it is possible to submit an application for a multiple-entry tourist visa, which will be evaluated further based on the frequency and reason of your travel. You might be called for an interview at the later stage of visa processing.\n'
        },
        {
            question: 'Which is the biggest shopping mall in Saudi Arabia?',
            answer: ' Mall of Arabia in Jeddah is the biggest shopping mall in Saudi Arabia.'
        } ,{
            question: 'How far is the ‘Mall of Arabia’ from the airport?',
            answer: 'Mall of Arabia is 9.3 km away from King Abdulaziz International Airport.'
        },

    ];

    // return (
    //     <div className="container py-3">
    //         <div className="row">
    //             <div className="col-md-12">
    //                 <div className="accordion" id="faqExample">
    //                     {faqs.map((faq, index) => (
    //                         <div className="card" key={index}>
    //                             <div className="card-header p-2" id={`heading${index}`}>
    //                                 <div itemScope itemType="https://schema.org/Question">
    //                                     <h5 className="mb-0">
    //                                         <button className="btn btn-link" type="button"
    //                                                 data-toggle="collapse"
    //                                                 data-target={`#collapse${index}`}
    //                                                 aria-expanded="false"
    //                                                 aria-controls={`collapse${index}`}>
    //                                             {faq.question}
    //                                         </button>
    //                                     </h5>
    //                                 </div>
    //                             </div>
    //                             <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`}
    //                                  data-parent="#faqExample">
    //                                 <div className="card-body" itemProp="acceptedAnswer" itemScope
    //                                      itemType="https://schema.org/Answer">
    //                                     {faq.answer}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );


    return (
        <div>
            <Helmet>
                <script type="application/ld+json">
                    {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ${JSON.stringify(faqs)}
          }`}
                </script>
            </Helmet>
            {/*{faqMarkup}*/}
        </div>
    );
};

export default FaqSchema;