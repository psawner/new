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
  menuicon.style.visibility="visible";
  const cancelbtn=document.querySelector(".bottom-btn")
  menuicon.addEventListener("click",(event)=>{
    if(sidebar.style.display="none"){
        sidebar.style.display="";
        menuicon.style.visibility="hidden";
    }
    

  })
  cancelbtn.addEventListener("click",(event)=>{
    sidebar.style.display="none";
    menuicon.style.visibility="visible";
    
  })





  const searchBtn = document.getElementById("search-btn");
const hiddenSearch = document.getElementById("hidden-search");

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  hiddenSearch.classList.toggle("show");
  menu.classList.remove('show');
  notifPanel.classList.remove('show');
  locationPanel.classList.remove('show');
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
  hiddenSearch.classList.remove("show");
  notifPanel.classList.remove('show');
  locationPanel.classList.remove('show');
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
      locationPanel.classList.remove('show');
      
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
  






    const bellBtn = document.getElementById('notification-hidden');
    const bellbtn = document.querySelector(".notification")
    const notifPanel = document.getElementById('notification-panel');
    const closeNotif = document.getElementById('close-notif');
  
    function toggleNotif() {
      notifPanel.classList.toggle('show');
    }
  
    function hideNotif() {
      notifPanel.classList.remove('show');
    }
  
    bellBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent closing when clicking the bell
      toggleNotif();
      locationPanel.classList.remove('show');
      menu.classList.remove('show');
      hiddenSearch.classList.remove("show");
    });
    bellbtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing when clicking the bell
        toggleNotif();
        menu.classList.remove('show');
        hiddenSearch.classList.remove("show");
      });
  
    closeNotif.addEventListener('click', (e) => {
      e.stopPropagation();
      hideNotif();
    });
  
    document.addEventListener('click', (e) => {
      if (!notifPanel.contains(e.target) && !bellBtn.contains(e.target)) {
        hideNotif();
      }
    });

 







   
    const locationIcon = document.getElementById('location-icon');
    const locationPanel = document.getElementById('location-panel');
    const closeLocation = document.getElementById('close-location');
    const locationBody = document.querySelector('.location-body');
    const animationContainer = document.getElementById('animation');
    animationContainer.style.display = 'none';
    const wraper=document.querySelector("#wraper");
    wraper.style.display="none";
    function toggleLocation() {
      if (!locationPanel.classList.contains('show')) {
        if (navigator.geolocation) {
          // Load and show Lottie animation
          const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/Animation - 1744992908067.json' // update with your Lottie path
          });

          animationContainer.style.display = '';
          wraper.style.display="";
    
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const lat = position.coords.latitude.toFixed(5);
              const lon = position.coords.longitude.toFixed(5);
    
              // Show initial loading message
              locationBody.innerHTML = `
                <p>📍 Fetching your location...</p>
                <p>🧭 Latitude: ${lat}</p>
                <p>🧭 Longitude: ${lon}</p>
              `;
    
              try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
                const data = await response.json();
                const address = data.display_name || 'Address not found';
    
                // Stop and hide animation after data is fetched
                anim.destroy();
                animationContainer.style.display = 'none';
                wraper.style.display="none";
    
                locationBody.innerHTML = `
                  <p>📍 ${address}</p>
                  <p>🧭 Latitude: ${lat}</p>
                  <p>🧭 Longitude: ${lon}</p>
                `;
              } catch (err) {
                anim.destroy();
                animationContainer.style.display = 'none';
                wraper.style.display="none";
    
                locationBody.innerHTML += `<p>❌ Failed to fetch address.</p>`;
              }
    
              locationPanel.classList.add('show');
              notifPanel.classList.remove('show');
              hiddenSearch.classList.remove("show");
              menu.classList.remove('show');
            },
            (error) => {
              anim.destroy();
              animationContainer.style.display = 'none';
              wraper.style.display="none";
    
              locationBody.innerHTML = `<p>❌ Location access denied or unavailable.</p>`;
              locationPanel.classList.add('show');
              notifPanel.classList.remove('show');
              hiddenSearch.classList.remove("show");
              menu.classList.remove('show');
            }
          );
        } else {
          locationBody.innerHTML = `<p>⚠️ Geolocation not supported by your browser.</p>`;
          locationPanel.classList.add('show');
          notifPanel.classList.remove('show');
          hiddenSearch.classList.remove("show");
          menu.classList.remove('show');
        }
      } else {
        locationPanel.classList.remove('show');
      }
    }
    
    function hideLocation() {
      locationPanel.classList.remove('show');
    }
    
    locationIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLocation();
    });
    
    closeLocation.addEventListener('click', (e) => {
      e.stopPropagation();
      hideLocation();
    });
    
    document.addEventListener('click', (e) => {
      if (!locationPanel.contains(e.target) && !locationIcon.contains(e.target)) {
        hideLocation();
      }
    });
    






  lottie.loadAnimation({
    container: document.getElementById('lottie-player'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/Animation - 1744986120051.json' 
  });

  













 
  document.addEventListener("DOMContentLoaded", () => {
    const rooms = document.querySelectorAll(".room:not(.booked)");
    const bookingInfo = document.getElementById("font");
    const bookBtn = document.getElementById("book");
    const vacancyCounts = document.querySelectorAll(".floor");

    let selectedRoom = null;

    rooms.forEach(room => {
      room.addEventListener("click", () => {
        if (selectedRoom) selectedRoom.classList.remove("selected");
        selectedRoom = room;
        selectedRoom.classList.add("selected");
        const roomNum = selectedRoom.dataset.room;
        bookingInfo.innerHTML = `<b>Room ${roomNum}</b> has <b>0/3</b> occupants`;
      });
    });

    bookBtn.addEventListener("click", () => {
      if (selectedRoom) {
        selectedRoom.classList.remove("selected");
        selectedRoom.classList.add("booked");
        selectedRoom.removeEventListener("click", () => {}); // prevent re-click
        updateVacancy();
        bookingInfo.innerHTML = "Room booked!";
        selectedRoom = null;
      }
    });

    function updateVacancy() {
      document.querySelectorAll(".floor").forEach(floor => {
        const rooms = floor.querySelectorAll(".room");
        const booked = floor.querySelectorAll(".room.booked").length;
        const total = rooms.length;
        const vacancy = total - booked;
        floor.querySelector(".vacancy-count").textContent = vacancy;
      });
    }

    updateVacancy(); // initial
  });

