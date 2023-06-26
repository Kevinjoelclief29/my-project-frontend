import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const Index = () => {
    useEffect(() => {
        let swiper = null; // Declare swiper variable
        const initializeSwiper = () => {
            swiper = new Swiper('.testimonials-slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            });
        };
    
        initializeSwiper(); // Call the initialization function
    
        return () => {
            if (swiper) {
            swiper.destroy();
            }
        };
        }, []);
    return (
        <section id="quotes" className="testimonials section-bg">
            <div className="container">
                <div className="section-title">
                <h2>Quotes</h2>
                <p />
                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                    <div className="testimonial-item" data-aos="fade-up">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Jangan lihat siapa yang menyampaikan, Lihatlah apa yang di sampaikan.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Coki Pardede</h3>
                        <h4>Comedy</h4>
                    </div>
                    </div>
                    {/* End testimonial item */}
                    <div className="swiper-slide">
                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100}>
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Manusia tidak akan mengerti, Jika tidak merasakan rasa sakit yang sama.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Nagato</h3>
                        <h4>Anime</h4>
                    </div>
                    </div>
                    {/* End testimonial item */}
                    <div className="swiper-slide">
                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay={200}>
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Segala sesuatu yang belum pernah kau lihat, itu belum tentu tidak ada.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Reynoldus Sahulata</h3>
                        <h4>Dosen</h4>
                    </div>
                    </div>
                    {/* End testimonial item */}
                    <div className="swiper-slide">
                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay={300}>
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Cobalah untuk tidak menjadi seorang yang sukses, tapi jadilah seorang yang Bernilai.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Albert Einsten</h3>
                        <h4>Ilmuan</h4>
                    </div>
                    </div>
                    {/* End testimonial item */}
                    <div className="swiper-slide">
                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay={400}>
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Ketika ada sesuatu yang cukup penting, kejarkanlah meskipun jika peluang itu tidak menguntukan untuk anda.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                        <h3>Elon Musk</h3>
                        <h4>Ceo SpaceX</h4>
                    </div>
                    </div>
                    {/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
                </div>
            </div>
        </section>
    );
};

export default Index