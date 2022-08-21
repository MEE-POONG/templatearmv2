import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFacebook,BsLine,BsFillTelephoneFill,BsEnvelopeFill,BsInstagram } from "react-icons/bs";

export default function Footer() {
  const [data, setData] = useState({
    local: "",
    des: "",
    tel: "",
    line: "",
    facebook: "",
    instagrm: "",
    email: "",
  });

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "/api/footer",
    });

    setData(res.data);
  };
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">{data.des}</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Location</h6>
              <ul class="footer-links">
                <p class="text-justify">{data.local}</p>

              </ul>
            </div>

            <div class="col-xs-6 col-md-3 ">
              <h6>Contact Us</h6>
              <ul class="footer-links my-3">
                <p><BsFillTelephoneFill size={20}/> &nbsp;&nbsp;{data.tel}</p>
                <p><BsEnvelopeFill size={20}/> &nbsp;&nbsp;{data.email}</p>
                <p><BsLine size={20}/> &nbsp;&nbsp; {data.line}</p>
                <p><BsFacebook size={20}/> &nbsp;&nbsp; {data.facebook}</p>
                <p><BsInstagram size={20}/> &nbsp;&nbsp;{data.instagrm}</p>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>


          </div>
        </div>
      </footer>
    </>
  );
}
