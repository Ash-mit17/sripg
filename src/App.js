// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    
    <div class="header_section">
         <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="logo"><a href="index.html"><img src="images/logo.png" alt='logo-img'/></a></div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#services">services</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#reviews">Reviews</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <a class="call_text" href="tel:+91 9945902006">Call Us : +91 9945902006</a>
                  </form>
               </div>
            </nav>
         </div>
      </div>
  );
}

export default App;
