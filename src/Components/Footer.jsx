import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="relative before_Image">
        <footer className="relative z-10">
          <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <p className="text-amber-400 font-extrabold text-2xl font-serif">
                  About us
                </p>

                <p className="mt-4 max-w-xs text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>

                <p className="text-amber-400  mt-5"> Read More</p>

                <ul className="mt-8 flex gap-6">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>
                      <FaFacebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Instagram</span>

                      <FaInstagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Twitter</span>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="text-amber-400 font-extrabold text-2xl font-serif">
                    Services
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        1on1 Coaching{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Company Review{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Accounts Review{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        HR Consulting{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        SEO Optimisation{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-amber-400 font-extrabold text-2xl font-serif">
                    Company
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        About{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Meet the Team{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Accounts Review{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-amber-400 font-extrabold text-2xl font-serif">
                    Helpful Links
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Contact{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        FAQs{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Live Chat{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-amber-400 font-extrabold text-2xl font-serif">
                    Legal
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Accessibility{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Returns Policy{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Refund Policy{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        Hiring-3 Statistics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
