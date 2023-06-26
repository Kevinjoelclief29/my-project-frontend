import React, { useEffect } from 'react';

const Index = () => {
    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress-bar');

        const options = {
        threshold: 1,
        rootMargin: '0px 0px -50px 0px',
        };

        const runProgressBars = () => {
        progressBars.forEach((progressBar) => {
            const targetWidth = parseInt(progressBar.getAttribute('aria-valuenow'));
            const duration = 1; // Duration in seconds
            const frameCount = duration * 60; // Assuming 60 frames per second
            const increment = targetWidth / frameCount;

            let currentWidth = 0;
            let frame = 0;

            const incrementProgressBar = () => {
            frame++;
            currentWidth += increment;

            if (currentWidth >= targetWidth) {
                progressBar.style.width = `${targetWidth}%`;
            } else {
                progressBar.style.width = `${currentWidth}%`;
                if (frame < frameCount) {
                setTimeout(incrementProgressBar, 16); // Run the incrementProgressBar function every 16ms (approximately 60 frames per second)
                }
            }
            };

            incrementProgressBar();
        });
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            runProgressBars();
            observer.unobserve(entry.target);
            }
        });
        }, options);

        progressBars.forEach((progressBar) => {
        observer.observe(progressBar);
        });

        return () => {
        observer.disconnect();
        };
    }, []);

    return (
        <section id="skills" className="skills section-bg">
        <div className="container">
            <div className="section-title">
            <h2>Skills</h2>
            <p>
                Skill adalah kapasitas seorang individu untuk melakukan beragam tugas dalam suatu pekerjaan. Beberapa skill khusus dalam diri saya:
            </p>
            </div>
            <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                <span className="skill">Mobile Legends <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
                <div className="progress">
                <span className="skill">junggler <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
                <div className="progress">
                <span className="skill">html <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="progress">
                <span className="skill">css <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
                <div className="progress">
                <span className="skill">Slot <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
                <div className="progress">
                <span className="skill">Membuatmu Bahagia <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Index;
