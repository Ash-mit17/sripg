// import logo from './logo.svg';
// import './App.css';
import React,{useState, useEffect} from 'react';

function App() {

   const [backend,setBackendData] = useState({names:["efe"],rates:[4.3],reviews:["jenf"]})

   useEffect(()=>{
      fetch("https://o355qetsdd.execute-api.us-east-1.amazonaws.com/data",{headers:{"ngrok-skip-browser-warning":"true" }})
      .then(
         response=>response.json()
      )
      .then(data=>{
         setBackendData(data)
         
      })
   },[])
   

  

   

   return (
      <div>
         <div className="header_section">
            <div className="container-fluid">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="logo"><a href="index.html"><img src="images/logo.png" alt='' /></a></div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#services">services</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#contact">Contact</a>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <a className="call_text" href="tel:+91 9945902006">Call Us : +91 9945902006</a>
                     </form>
                  </div>
               </nav>
            </div>
         </div>
         {/* <!-- header section end -->
      <!-- banner section start --> */}
         <div className="banner_section layout_padding">
            <div className="img_logo" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <img className="f_img" src="images/logo1.png" alt="" />
            </div>
            <div className="name" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", border: "solid",borderColor: "white",borderRadius: "100px",boxShadow: "2px 2px 5px black", textAlign: "center", alignContent: "center"}}>
               {/* <h1 className="ftext" style={{" height": "15vh", "text-align": "center", "font-size": "80px", "color": "white","text-shadow": "2px 2px 5px whitesmoke","text-transform": "uppercase"}}>SRI NIMISHAMBA PG</h1> */}
               <p className="logotxt" style={{textShadow: "2px 2px 5px black",color:"white",fontSize: "2.2rem",fontWeight: "normal"}} >SRI NIMISHAMBA PG</p>
            </div>
         </div>
         {/* <!-- banner section end -->
      <!-- services section start --> */}
         <div className="services_section layout_padding" id="services">
            <div className="container">
               <h1 className="services_taital">our services</h1>
               <div className="services_section2 layout_padding">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/wifi.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Wifi</h2>
                        <p className="dummy_text">High speed internet (5G) of upto 100Mbps is provided</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/meal.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Home-made food</h2>
                        <p className="dummy_text">Food is freshely prepared at home and non-veg is given weekly once.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/furniture.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Furnished</h2>
                        <p className="dummy_text">Rooms are fully furnished with closet,cot,table and chair.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/washing.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Washing machine</h2>
                        <p className="dummy_text">Washing machines are provided and can be used anytime of the day.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/parking.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Parking</h2>
                        <p className="dummy_text">Free parking space is available inside the premises.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/shower.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Hot water</h2>
                        <p className="dummy_text">Solar panels are installed which provides hot water 24/7.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/policeman.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Security</h2>
                        <p className="dummy_text">There are security cameras covering every entrance.</p>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="icon_1"><img src="images/bus.png" alt='' style={{width: "70px"}} /></div>
                        <h2 className="furnitures_text">Bus facilities</h2>
                        <p className="dummy_text">Nearby bus facilities are also there which makes travelling convenient</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- services section end -->
      <!-- about section start --> */}
         <div className="about_section layout_padding" id="about">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="about_text">Description</h1>
                     <p className="lorem_text" style={{fontWeight: "600"}}>We as a family have started this PG in the year 2013 and it has ran successfully since. We provide fresh home made food everyday. Security cameras are present at every entrance. Every room has a attached bathroom facility. The rooms are fully furnished and includes study table, cots and wadrobe. Free wifi is also provided. Hot water is available 24x7. The curfew time is 9:30pm.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="image_1"><img src="images/description.jpg" alt='' style={{width: "500px", height: "450px",float: "right"}} /></div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- about section end -->
      <!-- furnitures section start  */}
         {/* <div className="furnitures_section layout_padding">
            <div className="container">
               <h1 className="our_text">OUR furnitures</h1>
               <p className="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
               <div className="furnitures_section2 layout_padding">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="container_main">
                           <img src="images/img-2.png" alt="Avatar" className="image" />
                           <div className="overlay">
                              <a href="#" className="icon" title="User Profile">
                                 <i className="fa fa-search"></i>
                              </a>
                           </div>
                        </div>
                        <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                        <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                     </div>
                     <div className="col-md-6">
                        <div className="container_main">
                           <img src="images/img-3.png" alt="Avatar" className="image" />
                           <div className="overlay">
                              <a href="#" className="icon" title="User Profile">
                                 <i className="fa fa-search"></i>
                              </a>
                           </div>
                        </div>
                        <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                        <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
         {/* <!-- furnitures section end -->
      <!-- who section start  */}
         {/* <div className="who_section layout_padding">
            <div className="container">
               <h1 className="who_taital">who we are ?</h1>
               <h4 className="designer_text">DESIGNERS & INNOVATORS</h4>
               <p className="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
            </div>
            <div className="get_bt_main">
               <div className="get_bt"><a href="#">Get A Quote</a></div>
            </div>
         </div> */}
         {/* <!-- who section end -->
      <!-- projects section start --> */}
         <div className="projects_section layout_padding">
            <div className="container">
               <h1 className="our_text">IMAGES</h1>
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="projects_section2">
                           <div className="container_main2">
                              <div className="row">
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/1.jpg" style={{height: "300px",width:"100%"}} alt="Avatar" className="image"  />
                                    </div>
                                 </div>
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/2.jpg" style={{height: "300px",width:"100%"}} alt="Avatar" className="image"  />
                                    </div>
                                 </div>
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/3.jpg" style={{height: "300px",width:"100%"}} alt="Avatar" className="image"  />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="projects_section2">
                           <div className="container_main1">
                              <div className="row">
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/4.jpg" style={{height: "300px",width:"100%"}} alt="Avatar" className="image"  />
                                    </div>
                                 </div>
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/5.jpg" style={{height: "300px",width:"100%"}}  alt="Avatar" className="image"  />
                                    </div>
                                 </div>
                                 <div className="col-sm-4">
                                    <div className="container_main1">
                                       <img src="images/6.jpg" style={{height: "300px",width:"100%"}} alt="Avatar" className="image" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- projects section end -->
            <!--Review section start--> */}
         <div className="contact_section layout_padding" style={{margin:"30px 0"}} id="reviews">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="contact_text">YOUR REVIEW</h1>
                     <form className="mail_sectin" action="https://o355qetsdd.execute-api.us-east-1.amazonaws.com/data" method="post">
                        <input type="text" className="email-bt" placeholder="Name" name="name" autocomplete="off" />
                        <input type="Number" max="5" min="0" step="0.1" className="email-bt" placeholder="Rating" name="rating" autocomplete="off" />
                        <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="message" autocomplete="off"></textarea>
                        <button type="submit" style={{fontSize: "1rem", width: "139px", height: "49.925px"}} className="send_bt" >ADD REVIEW</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* <!--Review section end-->
      <!-- client section start --> */}
         <div className="clients_section layout_padding">
            <div className="container">
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">

                     <div className="carousel-item active">
                        <h1 className="client_text">what our clients say</h1>
                        <div className="clients_section2 layout_padding">
                           <div className="client_1">
                              <div className="row">

                                 <div className="col-sm-9">
                                    <h1 className="loksans_text">{backend.names[0]} <br /> {backend.rates[0]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[0]}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="client_2">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[1]} <br /> {backend.rates[1]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[1]}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <h1 className="client_text">what our clients say</h1>
                        <div className="clients_section2 layout_padding">
                           <div className="client_1">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[2]} <br /> {backend.rates[2]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[2]}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="client_2">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[3]} <br /> {backend.rates[3]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[3]}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <h1 className="client_text">what our clients say</h1>
                        <div className="clients_section2 layout_padding">
                           <div className="client_1">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[4]} <br /> {backend.rates[4]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[4]}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="client_2">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[5]} <br /> {backend.rates[5]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[5]}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <h1 className="client_text">what our clients say</h1>

                        <div className="clients_section2 layout_padding">
                           <div className="client_1">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[6]} <br /> {backend.rates[6]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[6]}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="client_2">
                              <div className="row">

                                 <div className="col-sm-9">
                                 <h1 className="loksans_text">{backend.names[7]} <br /> {backend.rates[7]} &#11088;  </h1>
                                    <p className="dolor_ipsum_text">{backend.reviews[7]}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- client section end -->

      <!-- contact section start --> */}
         <div className="contact_section layout_padding" id="contact">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="contact_text" >CONTACT US</h1>
                     <form className="mail_sectin" action="mailto: srinimishambapg@gmail.com" method="post" enctype="text/plain">
                        <input type="text" className="email-bt" placeholder="Name" name="Name" autocomplete="off" />
                        <input type="email" className="email-bt" placeholder="Email" name="Email" autocomplete="off" />
                        <input type="tel" className="email-bt" placeholder="Phone Number" name="Phone Number" autocomplete="off" />
                        <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage" autocomplete="off"></textarea>
                        <button type="submit" className="send_bt">SEND</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div style={{"display": "inline-flex","align-items": "center", "justify-content": "center", "width": "100%","height": "80vh"}}>
            <iframe style={{display: "flex",justifyContent: "center",height: "100%",border:"0"}} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3897.6305404012774!2d76.61326561481549!3d12.340635891272017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIwJzI2LjMiTiA3NsKwMzYnNTUuNiJF!5e0!3m2!1sen!2sin!4v1682781142513!5m2!1sen!2sin" width="100%" height="30vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

         </div>
         {/* <!-- contact section end -->
      <!-- footer section start -> */}
         {/* <div className="footer_section layout_padding">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="fooer_logo"><img src="images/footer-logo.png" /></div>
                     <p className="footer_lorem_text">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by
                     </p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <h1 className="customer_text">LET US HELP YOU</h1>
                     <p className="footer_lorem_text">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by
                     </p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <h1 className="customer_text">INFORMATION</h1>
                     <p className="footer_lorem_text1">About Us<br/>
                        Careers<br/>
                           Sell on shopee<br/>
                              Press & News<br/>
                                 Competitions<br/>
                                    Terms & Conditions
                                 </p>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                 <h1 className="customer_text">OUR Design</h1>
                                 <p className="footer_lorem_text">There are many variat
                                    ions of passages of L
                                    orem Ipsum available
                                    , but the majority h
                                    ave suffered altera
                                    tion in some form, by
                                 </p>
                              </div>
                           </div>
                           <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                 <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2"><a href="#">Subscribe</a></span>
                                 </div>
                           </div>
                        </div>
                     </div> */}
                        {/* <!--  footer section end -->
                        <!-- copyright section start --> */}
                        <div className="copyright_section">
                           <div className="container">
                              <div className="social_icon">
                                 <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=100091422694103&mibextid=ZbWKwL"><img src="images/fb-icon.png" alt='' style={{"width": "33px", "margin":" 3px 3px 3px 2px"}} /></a></li>
                                    <li><a href="https://www.instagram.com/sri_nimishamba_p_g/"><img src="images/instagram-icon.png" alt='' style={{"width": "33px", "margin":" 3px 3px 3px 2px"}}/></a></li>
                                 </ul>
                                 <h1>Get in touch</h1>
                              </div>
                           </div>
                        </div>
                        </div>
                        );
}
export default App;
