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
                  <a href="Planned-kits.html">Planned Kits</a>
                </div>
              </div>
    
              <a href="Contact.html" class="nav-link">Contact</a>
    
              <div class="dropdown">
                <button class="dropbtn">
                  Partners
                  <span class="dropdown-caret"></span>
                </button>
                <div class="dropdown-content is-on-right">
                  <div onclick="openOfficialPartnerModal()">Official Partners</div>
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
                    <a href="Planned-kits.html">Planned Kits</a>
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
                  <div onclick="openOfficialPartnerModal()">Official Partners</div>
                  <a href="Partners.html">Partnership Options</a>
                  <a href="Become Partners.html">Start a Partnership</a>
                </div>
              </div>
            </div>
         </div>
         
         
         <div id="officialPartnersPopup" class="modal in-nav">
            <div class="modal-content">
              <div class="modal-form-view">
                  <div class="modal-header">
                    <button class="modal-close" onclick="closeOfficialPartnersModals()">&times;</button>
                    <h3 class="modal-headline">Official <span class="text-blue">Partners</span></h3>
                    <p class="modal-subheadline">
                      Brands and venues supporting FC Ballers — on and off the pitch.
                      Our partners are integrated into the matchday experience, content, and community.
                    </p>
                  </div>
                  <div class="modal-body">
                    <h4>Partner Announcements Coming Soon</h4>
                    <p style="margin-bottom: 20px;">
                        We’re finalizing our first group of official partners.
                        Stay connected — announcements will be released ahead of the 2026 season.
                    </p>
                    
                    <form id="comingSoonPartnerForm" onsubmit="handleFormSubmit(event, 'officialPartnersSuccessPopup', 'officialPartnersPopup')">
                      <input type="hidden" name="access_key" value="86998c5b-6588-4b5b-97c8-c2e07907af20">
                      <input type="checkbox" name="botcheck" id="" style="display: none;">
        
                      <div class="form-group">
                        <label class="form-label" for="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-input"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div class="form-group" style="margin-bottom: 0;">
                        <label class="form-label" for="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="form-input"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" form="comingSoonPartnerForm" class="modal-cta">
                      Join the list
                    </button>
                  </div>
                </div>
            </div>
         </div>
    
        <div id="officialPartnersSuccessPopup" class="modal in-nav">
          <div class="modal-content is-success">
            <div class="modal-success">
              <button class="modal-close" onclick="closeOfficialPartnersModals()">&times;</button>
              <h2 class="success-headline">YOU'RE IN</h2>
              <p class="success-subtext">
                You’ll be the first to see partner announcements and updates.
              </p>
              <button onclick="window.location.href='index.html#'" class="modal-cta">
                Explore FC Ballers
              </button>
              <p class="success-footer-text">FC Ballers — Chicago Football Club</p>
            </div>
          </div>
        </div>
    </header>
`

function openOfficialPartnerModal() {
    const modal = document.getElementById("officialPartnersPopup");
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";
}

function closeOfficialPartnersModals() {
    const modal = document.getElementById("officialPartnersPopup");
    const successModal = document.getElementById("officialPartnersSuccessPopup");
    modal.style.display = 'none';
    successModal.style.display = 'none';

    document.body.style.overflow = "";
    document.getElementById("comingSoonPartnerForm").reset();
}