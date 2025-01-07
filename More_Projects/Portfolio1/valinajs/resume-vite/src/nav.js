
const navBarElem= `
<div class='Header' id='head'>
    <div class='logo'><a href="#">MOHIT<span class='logodot'>.</span> </a></div>
      <div class='nav-links'>
        <ul id="menuList">
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#Portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
           <a href="#" class="download_CV2">CV</a>
        </ul>
      </div>

        <a href="#" class="download_CV">CV</a>    

      <div class="toggle_btn" >
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>   
  
    </div>
 
  </div>
  `;
  const navBar= document.querySelector('#navbar');
  navBar.insertAdjacentHTML("afterbegin", navBarElem);


  const menuList = document.getElementById('menuList');
  menuList.style.maxHeight = "0px";
  const header= document.getElementById('head')
  header.style.position= "fixed";
  
  
  
  const tBtn = document.querySelector('.toggle_btn');  // Get the first toggle button
  // Open the menu when clicking the toggle button
  tBtn.onclick = () => {
    if (menuList.style.maxHeight === "0px") {
      menuList.style.maxHeight = "300px";  // Open the menu // Show close button
    } else {
      menuList.style.maxHeight = "0px";  // Close the menu
    }
  
  
    tBtn.classList.toggle("active");
  }
  