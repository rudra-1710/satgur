import React, { useEffect, useRef } from 'react';

const CareerAccordion = ({ content, activeIndex }) => {

    const item = useRef(null);

    const on_hide = (e) => {
        const target = e.target;
        const header = target.previousElementSibling;
        const teaser_element = header.querySelector('.teaser');

        target.parentElement.classList.remove('shown');

        header.querySelector('div[data-bs-toggle="collapse"] a').classList.remove('button-bg');
        header.querySelector('div[data-bs-toggle="collapse"] i').classList.add('fa-arrow-down');
        header.querySelector('div[data-bs-toggle="collapse"] i').classList.remove('fa-times');

        teaser_element.innerHTML = teaser_element.innerHTML.replace(teaser_element.dataset.remaining, '...');
    }

    const on_show = (e) => {
        const target = e.target;
        const header = target.previousElementSibling;
        const teaser_element = header.querySelector('.teaser');

        e.target.parentElement.classList.add('shown');

        header.querySelector('div[data-bs-toggle="collapse"] a').classList.add('button-bg');
        header.querySelector('div[data-bs-toggle="collapse"] i').classList.remove('fa-arrow-down');
        header.querySelector('div[data-bs-toggle="collapse"] i').classList.add('fa-times');

        teaser_element.innerHTML = 
        teaser_element.innerHTML.replace('...', teaser_element.dataset.remaining);
    }

    useEffect(() => {

        const career_accordion = item.current;

        // separate the teaser text
        career_accordion.querySelectorAll('.career-accordion-item').forEach((parent, parent_index) => {
            const element = parent.querySelector('.teaser');
    
            const teased_content = element.innerHTML.replace(/^(.{166}[^\s]*).*/, "$1");
        
            element.dataset.remaining = element.innerHTML.substr(teased_content.length, element.innerHTML.length);
    
            element.innerHTML = teased_content + '...';
        });

        // add shown className to the parent
        career_accordion.querySelectorAll('.accordion-collapse.show').forEach((element, index) => {
            const parent = element.parentElement;
            parent.classList.add('shown');

            parent.querySelector('div[data-bs-toggle="collapse"] a').classList.add('button-bg');
            parent.querySelector('div[data-bs-toggle="collapse"] i').classList.remove('fa-arrow-down');
            parent.querySelector('div[data-bs-toggle="collapse"] i').classList.add('fa-times');


            const teaser_element = parent.querySelector('.teaser');
            teaser_element.innerHTML = teaser_element.innerHTML.replace('...', teaser_element.dataset.remaining);
        });

        career_accordion.addEventListener('hide.bs.collapse', on_hide);

        // execute when tab-pane opens
        career_accordion.addEventListener('show.bs.collapse', on_show);

        Array.from(career_accordion.querySelectorAll('.button-group > a')).forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
            })
        })

        return (() => {
            career_accordion.removeEventListener('hide.bs.collapse', on_hide);
            career_accordion.removeEventListener('show.bs.collapse', on_show);
            Array.from(career_accordion.querySelectorAll('.button-group > a')).forEach((button) => {
                button.removeEventListener('click', (e) => {
                    e.preventDefault();
                })
            })
        });
    }, []);

    return (
        <div className="career-accordion" id="careeerAccordion" ref={item}>
            { content.map((item, index) => {
                return (
                    <div className="career-accordion-item accordion-item" key={index}>
                        {/* accordion heading - start */}
                        <div 
                        className="career-accordion-item-header accordion-header" 
                        id={`heading${index}`}>
                            <div className="career-accordion-heading">
                                <div className="content">
                                    {item.heading}
                                </div>
                                <div 
                                className={`button-group ${index !== activeIndex ? 'collapsed': '' }`} 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === activeIndex ? 'true': 'false'}
                                aria-controls={`collapse${index}`}
                                >
                                    <a href="/#" className="button button-3 txt-upper">
                                        <div>
                                            <i className="fas fa-arrow-down"></i>
                                            <span>apply</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* accordion heading - end */}
                        {/* accordion content - start */}
                        <div 
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === activeIndex ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#careeerAccordion">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-lg-10">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* accordion content - end */}
                    </div>
                );
            }) }
        </div>
    );
};

export default CareerAccordion;
