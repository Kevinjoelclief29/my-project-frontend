import React, { useEffect } from 'react';

const Index = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.purecounter');

        const options = {
        threshold: 1,
        rootMargin: '0px 0px -50px 0px',
        };

        const runCounter = () => {
        counters.forEach((counter) => {
            const endValue = parseInt(counter.getAttribute('data-purecounter-end'));
            const duration = parseInt(counter.getAttribute('data-purecounter-duration'));
            const increment = Math.ceil(endValue / (duration * 60)); // Increment value per frame (assuming 60 frames per second)

            let currentValue = 0;
            let frame = 0;

            const incrementCounter = () => {
            frame++;
            currentValue += increment;

            if (currentValue >= endValue) {
                counter.textContent = endValue;
            } else {
                counter.textContent = currentValue;
                if (frame < duration * 60) {
                setTimeout(incrementCounter, 16); // Run the incrementCounter function every 16ms (approximately 60 frames per second)
                }
            }
            };

            incrementCounter();
        });
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            runCounter();
            observer.unobserve(entry.target);
            }
        });
        }, options);

        counters.forEach((counter) => {
        observer.observe(counter);
        });

        return () => {
        observer.disconnect();
        };
    }, []);

    return (
        <section id="facts" className="facts">
        <div className="container">
            <div className="section-title">
            <h2>Facts</h2>
            <p>
                Fakta adalah segala hal yang bisa ditangkap oleh indra manusia berupa data dari keadaan nyata yang telah terbukti kebenarannya. Berikut adalah Fakta diri saya:
            </p>
            </div>
            <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span data-purecounter-start={0} data-purecounter-end={1000} data-purecounter-duration={1} className="purecounter" />
                <p>
                    <strong />Ganteng
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span data-purecounter-start={0} data-purecounter-end={145} data-purecounter-duration={1} className="purecounter" />
                <p>
                    <strong />IQ
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
                <div className="count-box">
                <i className="bi bi-headset" />
                <span data-purecounter-start={0} data-purecounter-end={1000} data-purecounter-duration={1} className="purecounter" />
                <p>
                    <strong />Music
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
                <div className="count-box">
                <i className="bi bi-people" />
                <span data-purecounter-start={0} data-purecounter-end={0} data-purecounter-duration={1} className="purecounter" />
                <p>
                    <strong /> cewe
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Index;
