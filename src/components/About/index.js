import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../../assets/img/profile.jpg';

const Index = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Hallo!! Selamat Datang</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={profilePic} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>UI/UX Designer &amp; Web Developer</h3>
                            <p className="fst-italic">Berikut Biodata Saya: Selebihnya bisa DM</p>
                            <div className="row">
                                <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <strong>Full name:</strong> <span>Kevin Joel Clief</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Nickname:</strong> <span>Epin / Vin</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>29 Oktober 2002</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Profession:</strong> <span>Student</span></li>
                                </ul>
                                </div>
                                <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+62 812 4257 7286</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>Kevinjoelclief57@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Instagram:</strong> <span>_Kjoell</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>Kjoell.com</span></li>
                                </ul>
                                </div>
                            </div>
                            <p>
                            Menjadi Mahasiswa adalah sebuah privilege. Keistimewaan yang tak semua pemuda di berkahi kesempatan, Kita adalah bagian dari 35% anak muda yang bisa merasahkan bangku kuliah itu adalah peluang keningkamatan sekaligus
                            tanggung jawab. Karena kita adalah MAHASISWA, Maha dari siswa karena kita anak-anak muda pilihan yang berkesempatan mereguk dalamnya sumur pengetahuan.&nbsp;~Najwa&nbsp;Shihab
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index;