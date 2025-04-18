function toggleSearch() {
    const input = document.querySelector('.search-input');
    input.classList.toggle('show');
    if (input.classList.contains('show')) {
      input.focus();
    }
    
  }
   
  const sidebar=document.querySelector(".sidebar");
  sidebar.style.display="none";
  const menuicon=document.querySelector(".menu-icon i");
  menuicon.style.display="";
  const cancelbtn=document.querySelector(".bottom-btn")
  menuicon.addEventListener("click",(event)=>{
    if(sidebar.style.display="none"){
        sidebar.style.display="";
        menuicon.style.display="none";
    }
    

  })
  cancelbtn.addEventListener("click",(event)=>{
    sidebar.style.display="none";
    menuicon.style.display="";
  })





  const searchBtn = document.getElementById("search-btn");
const hiddenSearch = document.getElementById("hidden-search");

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  hiddenSearch.classList.toggle("show");
  menu.classList.remove('show');
});

// Hide when clicking outside the search or button
document.addEventListener("click", (e) => {
  if (
    !hiddenSearch.contains(e.target) &&
    !searchBtn.contains(e.target)
  ) {
    hiddenSearch.classList.remove("show");
  }
});





const profilePic = document.getElementById("profile-pic");
const profileInfo = document.getElementById("profile-info");
const overlay = document.getElementById("overlay");
const photo=document.querySelector("#photo i");

// Show panel
profilePic.addEventListener("click", (e) => {
  e.stopPropagation();
  profileInfo.classList.add("active");
  overlay.classList.add("active");
  menu.classList.remove('show');
});

// Hide panel when clicking outside
overlay.addEventListener("click", () => {
  profileInfo.classList.remove("active");
  overlay.classList.remove("active");
});

// Optional: close on Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    profileInfo.classList.remove("active");
    overlay.classList.remove("active");
  }
});

photo.addEventListener("click",(event)=>{
    profileInfo.classList.remove("active");
    overlay.classList.remove("active");
})



  



    const toggleBtn = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu-section');
    const closeBtn = document.getElementById('close-menu');
    
    // Toggle menu visibility
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    // Close menu when clicking outside or on close icon
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        menu.classList.remove('show');
      }
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  





 