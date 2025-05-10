import React from "react";
// import { Link } from 'react-router-dom'
import second from "../../images/placeholders/landscape_Images/featured_grid.jpg";
const HomePageAYN = () => {
  return (
    <div
      className="grid gtc12 
            min-vh-60 h-100
            white-90 bg-gray"
    >
      <figure className="gc1s12 gr1s1 w-100 h-100">
        <img src={second} alt="" className="w-100 h-100 cover" />
      </figure>
      <div
        id=""
        className="gc1s12 gr1s1 
                    flex items-center justify-around 
                    w-100 h-100 pv4-00
                    bg-gradient1BT"
      >
        <div
          id=""
          className="flex flex-column justify-center items-cente
                    ml8-00-m w-100 h-100 
                    pa1-00"
        >
          <div
            id=""
            className="w-100 w-75-s w-60-m
                            mb4-00"
          >
            <h1 className="f2-00 f3-00-s mt0-00 mb2-00">
              Clients are our focus on our delivery promise.
            </h1>
            <p className="f1-25 f1-75-m mb4-00">
              We architect <br /> Bespoke Digital Solutions <br />
              for our clients
            </p>

            {/*<div className="flex justify-between justify-start-s items-center 
                            w-50-m 
                            ttu"
                        >
                             <div className="w10-00 br0-25 pa0-50 bg-white ba tc">
                                <Link to ="architect-your-next"
                                    className="gray b">
                                    read more...
                                </Link>     
                            </div> 
                        </div>*/}
          </div>

          <div
            className="flex flex-column flex-row-s justify-s items-start ggap2-00
                    w-100
                    mb2-00
                    f1-00"
          >
            <div
              className="flex flex-column justify-between w16-00 h10-00-s
                            ba br0-50 white-90 pa0-50"
            >
              <hgroup>
                <h3 className="mb0-50 ">
                  Please, our website is currently under development
                </h3>
                <h5 className="dn db-s fw4 mb0-50">
                  Check again later for an unforgettable experience.
                </h5>
              </hgroup>
              {/* <a href="https://aesl.kdadesign.tech"
                                target="_blank"
                                rel="noreferrer"
                                className="mb0-00"
                            >
                                <b>view</b>
                            </a> */}
            </div>
            <div
              className="flex flex-column justify-between w16-00 h10-00-s
                            ba br0-50 white-90 pa0-50"
            >
              <hgroup>
                <h3 className="mb0-50">
                  You can use this link{" "}
                  <a
                    className="gold"
                    href="http://www.namecheap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.namecheap.com
                  </a>{" "}
                  or{" "}
                  <a
                    className="gold"
                    href="http://www.godaddy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.godaddy.com
                  </a>{" "}
                  to register your own domain name.
                </h3>
                {/* <h5 className="dn db-s fw4 mb0-50">
                                    Kwame Domfe Appau sets out to promote self directed experiential learning.
                                </h5> */}
              </hgroup>
              {/* <a href="https://kwamedomfeappau.com"
                                target="_blank"
                                rel="noreferrer"
                                className="mb0-00"
                            >
                                <b>view</b>
                            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAYN;
