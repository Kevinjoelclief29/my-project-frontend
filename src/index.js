import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "../src/assets/vendor/aos/aos.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/boxicons/css/boxicons.min.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";

import "../src/assets/vendor/purecounter/purecounter_vanilla.js";
import "../src/assets/vendor/aos/aos.js";
import "../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../src/assets/vendor/glightbox/js/glightbox.min.js";
import "../src/assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "../src/assets/vendor/swiper/swiper-bundle.min.js";
import "../src/assets/vendor/typed.js/typed.min.js";
import "../src/assets/vendor/waypoints/noframework.waypoints.js";
import "../src/assets/vendor/php-email-form/validate.js";

import "./assets/css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
