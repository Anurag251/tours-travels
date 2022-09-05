import React from "react";
import { Link } from "react-router-dom";

import BannerComponent from "../components/banner.component";

import packageImage1 from "../assets/images/Package1.png";
import packageImage2 from "../assets/images/Package2.png";
import packageImage3 from "../assets/images/Package3.png";
import packageImage4 from "../assets/images/Package4.png";
import packageImage5 from "../assets/images/Package5.png";
import packageImage6 from "../assets/images/Package6.png";
import packageImage7 from "../assets/images/Package7.png";
import packageImage8 from "../assets/images/Package8.png";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />

      <section>
        <div className="wrapper">
          <div className="country-package">
            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage1})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">Nepal</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage2})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">India</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage3})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">Bhutan</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage4})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">United State</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage5})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">United Kingdom</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage6})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">Dubai</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage7})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">River</h3>
              </Link>
            </div>

            <div
              className="item"
              style={{ backgroundImage: `url(${packageImage8})` }}
            >
              <div className="package">2 Package</div>
              <Link to="">
                <h3 className="name">Paris</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
      class="sec-bg-img"
      style="background-image: url(./assets/images/bgImg.png)"
    >
      <div class="wrapper">
        <div class="special-package">
          <div class="title">Our Special Package</div>

          <div class="list">
            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg1.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg2.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg3.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg1.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg2.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div class="item">
              <div class="image-sec">
                <img src="./assets/images/special-pkg3.png" alt="" />
              </div>

              <div class="text-sec">
                <div class="days">14 Days</div>

                <a href="#">
                  <div class="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div class="price">
                  <span>From</span>
                  <h4>$3320 <span>/ person</span></h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="#">
                  <button>Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomePage;
