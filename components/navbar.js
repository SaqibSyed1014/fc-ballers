const navElement = document.getElementById('nav');

navElement.innerHTML = `
    <header class="navbar">
         <div class="max-width navbar-container">
              <!-- Hidden Checkbox for Mobile Toggle -->
              <input type="checkbox" id="mobile-check" />
    
              <!-- LEFT NAV -->
              <div class="nav-left">
                <div class="dropdown">
                  <button class="dropbtn">
                    About
                    <span class="dropdown-caret"></span>
                  </button>
                <div class="dropdown-content is-on-left">
                  <a href="About.html">About FC Ballers</a>
                  <a href="Community.html">Community</a>
                  <a href="Staff.html">Staff</a>
                  <a href="FAQ.html">FAQ</a>
                </div>
                </div>
    
                <div class="dropdown">
                  <button class="dropbtn">
                    Teams
                    <span class="dropdown-caret"></span>
                  </button>
                  <div class="dropdown-content">
                    <a href="Teams.html">Teams</a>
                    <a href="Season scheduele.html">Schedule</a>
                    <a href="Results.html">Results</a>
                  </div>
                </div>
    
                <a href="Public roster.html" class="nav-link">Public Roster</a>
    
                <div class="dropdown">
                  <button class="dropbtn">
                    Join
                    <span class="dropdown-caret"></span>
                  </button>
                  <div class="dropdown-content">
                    <a href="Tryouts.html">Tryouts (Men's & Women's)</a>
                    <a href="Player resources.html">Player Resources</a>
                    <a href="Join Movement Form.html">Newsletter</a>
                  </div>
                </div>
              </div>
    
              <!-- CENTER LOGO -->
              <div class="nav-brand">
                <a href="index.html">
                  <img src="Logo.webp" alt="FC Ballers Logo" />
                </a>
              </div>
    
            <!-- RIGHT NAV -->
            <div class="nav-right">
              <a href="Merch.html" class="nav-link">Store</a>
    
              <div class="dropdown">
                <button class="dropbtn">
                  Media
                  <span class="dropdown-caret"></span>
                </button>
                <div class="dropdown-content">
                  <a href="Media and hilights.html">Media & Highlights</a>
                  <a href="Press Kit.html">Press Kit</a>
                </div>
              </div>
    
              <a href="Contact.html" class="nav-link">Contact</a>
    
              <div class="dropdown">
                <button class="dropbtn">
                  Partners
                  <span class="dropdown-caret"></span>
                </button>
                <div class="dropdown-content is-on-right">
                  <a href="Partners.html">Partnership Options</a>
                  <a href="Become Partners.html">Start a Partnership</a>
                </div>
              </div>
            </div>
    
              <!-- MOBILE HAMBURGER LABEL -->
              <label for="mobile-check" class="hamburger-label" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
              </label>
    
              <!-- MOBILE OVERLAY -->
              <div class="mobile-nav">
                <!-- Mobile About Dropdown -->
                <div class="mobile-dropdown">
                  <input type="checkbox" id="mobile-about-check" />
                  <label for="mobile-about-check" class="mobile-dropdown-label">
                    About
                    <span class="mobile-dropdown-caret"></span>
                  </label>
                <div class="mobile-dropdown-content">
                  <a href="About.html">About FC Ballers</a>
                  <a href="Community.html">Community</a>
                  <a href="Staff.html">Staff</a>
                  <a href="FAQ.html">FAQ</a>
                </div>
                </div>
    
                <!-- Mobile Teams Dropdown -->
                <div class="mobile-dropdown">
                  <input type="checkbox" id="mobile-teams-check" />
                  <label for="mobile-teams-check" class="mobile-dropdown-label">
                    Teams
                    <span class="mobile-dropdown-caret"></span>
                  </label>
                  <div class="mobile-dropdown-content">
                    <a href="Teams.html">Teams</a>
                    <a href="Season scheduele.html">Schedule</a>
                    <a href="Results.html">Results</a>
                  </div>
                </div>
    
                <a href="Public roster.html">Roster</a>
    
                <!-- Mobile Join Dropdown -->
                <div class="mobile-dropdown">
                  <input type="checkbox" id="mobile-join-check" />
                  <label for="mobile-join-check" class="mobile-dropdown-label">
                    Join
                    <span class="mobile-dropdown-caret"></span>
                  </label>
                  <div class="mobile-dropdown-content">
                    <a href="Tryouts.html">Tryouts (Men's & Women's)</a>
                    <a href="Player resources.html">Player Resources</a>
                    <a href="Join Movement Form.html">Newsletter</a>
                  </div>
                </div>
    
                <a href="Merch.html">Store</a>
    
                <!-- Mobile Media Dropdown -->
                <div class="mobile-dropdown">
                  <input type="checkbox" id="mobile-media-check" />
                  <label for="mobile-media-check" class="mobile-dropdown-label">
                    Media
                    <span class="mobile-dropdown-caret"></span>
                  </label>
                  <div class="mobile-dropdown-content">
                    <a href="Media and hilights.html">Media & Highlights</a>
                    <a href="Press Kit.html">Press Kit</a>
                  </div>
                </div>
    
              <a href="Contact.html">Contact</a>
    
              <!-- Mobile Partners Dropdown -->
              <div class="mobile-dropdown">
                <input type="checkbox" id="mobile-partners-check" />
                <label for="mobile-partners-check" class="mobile-dropdown-label">
                  Partners
                  <span class="mobile-dropdown-caret"></span>
                </label>
                <div class="mobile-dropdown-content">
                  <a href="Partners.html">Partnership Options</a>
                  <a href="Become Partners.html">Start a Partnership</a>
                </div>
              </div>
            </div>
         </div>
    </header>
`
