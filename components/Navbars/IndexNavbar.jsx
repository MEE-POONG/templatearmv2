import React from "react";
import Link from "next/link";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
       
            <input type="checkbox" id="active"/>
              <label for="active" class="menu-btn"><span></span></label>
      
              <div class="wrapper">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#section1">Page1</a></li>
                  <li><a href="#section2">Page2</a></li>
                  <li><a href="#section3">Page3</a></li>
                  <li><a href="#section4">Page4</a></li>
                  <li><a href="#section5">Page5</a></li>
                  <li><a href="#section6">Page6</a></li>
                  <li><a href="#section7">Page7</a></li>
                  <li><a href="#section8">Page8</a></li>
                </ul>
              </div>
              
  

        </>
        );
}
