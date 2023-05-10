import React from "react";
import "./index.css";
import logo from "./Img/Logo.svg";
import menuIcon from "./Img/menuIcon.svg";
import andrew from "./Img/Andrew-Porter-Logo.svg";
import ideal from "./Img/Ideal.svg";
import wal from "./Img/Wal.svg";
import leadership from "./Img/Leadership-Academy-Logo.svg";
import phalen from "./Img/PhalenLeadership.svg";
import scrin from "./Img/Screenshot.png";
import fourthOne from "./Img/Balensiaga.svg";
import fourthBalensiagaOne from "./Img/fouthBalensiagaOne.png";
import fourthTwo from "./Img/3dModel.svg";
import fourthThree from "./Img/onlineB.svg";
import footerLogo from "./Img/footerLogo.svg";

export const Main = () => {
  return (
    <main>
      <section className="firstPage">
        <div className="headPart">
          <img src={logo} alt="logo" />
          <a href="#!">
            <img src={menuIcon} alt="menu" className="menuIcon" />
          </a>
        </div>
        <span>A place where </span>
        <h1>A creative agency for redemptive brands</h1>
        <p>
          Anteelo is a leading strategic design firm that builds powerful
          digital solutions for startups and enterprises.
        </p>
        <a href="#!">▶ Get in touch</a>
      </section>
      <section className="secondPage">
        <div>
          <img src={andrew} alt="1" />
          <img src={leadership} alt="2" />
          <img src={wal} alt="3" />
          <img src={ideal} alt="4" />
          <img src={phalen} alt="5" />
        </div>
      </section>
      <section className="thirdPage">
        <div className="thirdLeftSide">
          <p>What we do for you</p>
          <h1>Strategy. Design Content. Technology Development </h1>
          <span>
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </span>
          <a href="#!">▶ More know About us</a>
        </div>
        <div className="thirdRightSide">
          <div className="thirdRightSideCard">
            <p>
              With More than 10 Years of Knowledge and Expertise we Design and
              Code Websites and Apps, We Build Brands and Help Them Succeed
            </p>
            <div className="thirdUser">
              <img src={scrin} alt="ava" />
              <div className="thirdNameInfo">
                <p>Genevieve Rodriquez</p>
                <span>Founder & CEO, Webovio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="fouthPage">
        <div className="fourthHeaderPart">
          <h1>We Have Some Awesome Project.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="fourthOne">
          <div className="fourthLeftPart">
            <img src={fourthOne} alt="balensiaga" />
            <div className="balensiagaCard">
              <p>
                “In my history of working with trade show vendors, I can
                honestly say that there is not one company that I've ever worked
                with that has better service than Exhibit Systems.”
              </p>
              <div className="fourthOneUser">
                <img src={fourthBalensiagaOne} alt="" />
                <div className="fourthOneUserName">
                  <p>Angel Armstrong</p>
                  <span>Founder & CEO, Google</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fourthRightPart">
            <h1>The wall new Balenciaga.com</h1>
            <p>
              This article is floated online with an aim to help you find the
              best dvd printing solution.
              <br />
              <br />
              Dvd printing is an important feature used by large and small DVD
              production houses to print information on DVDs.
            </p>
            <a href="#!">▶ See Case Study</a>
          </div>
        </div>
        {/* 2 */}
        <div className="fourthTwo">
          <div className="fourthRightPartTwo">
            <h1>Is this the future of 3D model?</h1>
            <p>
              While it was just a TV show, that little speech at the beginning
              of the original Star Trek show really did do a good job of
              capturing our feelings about space.
              <br />
              <br />
              It is those feelings that drive our love of astronomy and our
              desire to learn more and more about it.
            </p>
            <a href="#!">▶ See Case Study</a>
          </div>
          <div className="fourthLeftPartTwo">
            <img src={fourthTwo} alt="balensiagaTwo" />
            <div className="balensiagaCardTwo">
              <p>
                “I know they are going to be honest with me. I am not going to
                get a subpar product; I know it is going to be good. That is the
                number one advantage of working with Exhibit Systems.
              </p>
              <div className="fourthOneUser">
                <img src={fourthBalensiagaOne} alt="" />
                <div className="fourthOneUserName">
                  <p>Lina Hart</p>
                  <span>Founder & CEO, Jico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="fourthOne">
          <div className="fourthLeftPart">
            <img src={fourthThree} alt="balensiaga" />
            <div className="balensiagaCard">
              <p>
                “Exhibit Systems is not a provider. They are not a supplier.
                They are a partner with expertise in making trade shows
                effective.”
              </p>
              <div className="fourthOneUser">
                <img src={fourthBalensiagaOne} alt="" />
                <div className="fourthOneUserName">
                  <p>Eunice Oliver</p>
                  <span>Founder & CEO, Zeem</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fourthRightPart">
            <h1> Is this the future of Online Booking</h1>
            <p>
              You should be able to find several indispensable facts about
              motivation in the following paragraphs.
              <br />
              <br />
              If there’s at least one fact you didn’t know before, imagine the
              difference it might make.
            </p>
            <a href="#!">▶ See Case Study</a>
          </div>
        </div>
      </section>
      <hr />
      <section className="fifthPage">
        <h1>Deation & Evaluation - Best Way to Kick off Your Product Idea</h1>
        <div className="fifthInfo">
          <div>
            <h1>Product Design Sprint</h1>
            <p>
              A five-day workshop that will help you answer crucial business
              questions
            </p>
            <a href="#!">▶ Read More</a>
          </div>
          <div>
            <h1>Scoping Session</h1>
            <p>
              A workshop aimed at shaping your business idea, answering
              questions regarding project planning
            </p>
            <a href="#!">▶ Read More</a>
          </div>
          <div>
            <h1>
              UX
              <br />
              Review
            </h1>
            <p>
              An evaluation which will help you radically improve your product.
            </p>
            <a href="#!">▶ Read More</a>
          </div>
          <div>
            <h1>
              Code <br />
              Review
            </h1>
            <p>
              Do you know what one of the key secrets of success is what makes
              people successful in business
            </p>
            <a href="#!">▶ Read More</a>
          </div>
        </div>
      </section>
      <section className="sixsPage">
        <div>
          <h1>Let’s make something amazing together.</h1>
          <a href="#!">▶ LET'S GET STARTED</a>
        </div>
      </section>
      <section className="footer">
        <section className="footerSkin">
          <div>
            <div className="footerTopPart">
              <div>
                <span>Phone</span>
                <p>+32 50 31 28 32</p>
              </div>
              <div>
                <span>Address</span>
                <p>491 Merlin Crest Suite 963</p>
              </div>
            </div>
            <hr />
            <div className="footerUnder">
              <div className="footerNav">
                <div>
                  <p>Services</p>
                  <ul>
                    <li>
                      <a href="">Strategy Design</a>
                    </li>
                    <li>
                      <a href="">Product Design</a>
                    </li>
                    <li>
                      <a href="">Content Strategy</a>
                    </li>
                    <li>
                      <a href="">Brand Strategy</a>
                    </li>
                    <li>
                      <a href="">Development</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Help And Advice</p>
                  <ul>
                    <li>
                      <a href="">How it works</a>
                    </li>
                    <li>
                      <a href="">Contact Support</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Company</p>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">Jobs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="verHr"></div>
              <div className="getInTouch">
                <p>Get in Touch</p>
                <span>Feel free to get in touch with us vai email</span>
                <h2>
                  <a href="">info.webovio@gmail.com</a>
                </h2>
                <div className="footerIcons">
                  <a href="#!" className="faceBook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="#!" className="twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="#!" className="GoogllePlus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </a>
                  <a href="#!" className="in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="footerBottom">
              <img src={footerLogo} alt="footerLogo" />
              <p>© 2020@webovio. All Rights Reserved.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
