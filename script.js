// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Render Upcoming Events
const eventsGrid = document.querySelector('.events-grid');
const upcomingEvents = [
  {
    name: 'Tech Innovation Summit 2024',
    date: 'March 25, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Campus Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    description: 'Join us for a day of innovation, technology, and networking with industry leaders.',
  },
  {
    name: 'Career Development Workshop',
    date: 'April 2, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual Event',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000',
    description: 'Learn essential career skills and get guidance from professional mentors.',
  },
];

upcomingEvents.forEach(event => {
  eventsGrid.innerHTML += `
    <div class="card">
      <img src="${event.image}" alt="${event.name}" class="card-image" loading="lazy">
      <div class="card-content">
        <h3>${event.name}</h3>
        <div class="event-details">
          <p><i data-lucide="calendar"></i> ${event.date}</p>
          <p><i data-lucide="clock"></i> ${event.time}</p>
          <p><i data-lucide="map-pin"></i> ${event.location}</p>
        </div>
        <p>${event.description}</p>
        <button class="cta-button">Register Now</button>
      </div>
    </div>
  `;
});
lucide.createIcons();

document.addEventListener("DOMContentLoaded", function () {
  const pastEventsGrid = document.querySelector(".past-events-grid");
  const showMoreBtn = document.querySelector("#show-more-btn");

  const pastEvents = [
      {
          name: "AI & Machine Learning Bootcamp",
          date: "January 10, 2024",
          time: "10:00 AM - 5:00 PM",
          location: "Innovation Lab, MRCE",
          image: "https://images.unsplash.com/photo-1581092337277-3dfecbca06a1?auto=format&fit=crop&q=80&w=1000",
          description: "An intensive bootcamp covering AI and ML concepts with hands-on projects.",
      },
      {
          name: "Cybersecurity Awareness Workshop",
          date: "December 15, 2023",
          time: "2:00 PM - 4:30 PM",
          location: "Virtual Event",
          image: "https://images.unsplash.com/photo-1601132359864-4e1c276a2764?auto=format&fit=crop&q=80&w=1000",
          description: "A session focused on best cybersecurity practices for students and professionals.",
      },
      {
          name: "Hackathon: Code for Change",
          date: "November 20, 2023",
          time: "9:00 AM - 6:00 PM",
          location: "Tech Hub Auditorium",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
          description: "A 24-hour hackathon where students built innovative solutions for social impact.",
      },
      {
          name: "Web Development Masterclass",
          date: "October 5, 2023",
          time: "11:00 AM - 3:00 PM",
          location: "MRCE Seminar Hall",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
          description: "A hands-on session on front-end and back-end web technologies.",
      },
  ];

  let visibleEvents = 2; // Show only 2 events initially

  function renderEvents(limit) {
      pastEventsGrid.innerHTML = ""; // Clear previous content
      pastEvents.slice(0, limit).forEach(event => {
          const eventCard = document.createElement("div");
          eventCard.classList.add("card");

          eventCard.innerHTML = `
              <img src="${event.image}" alt="${event.name}" class="card-image" loading="lazy">
              <div class="card-content">
                  <h3>${event.name}</h3>
                  <div class="event-details">
                      <p><i data-lucide="calendar"></i> ${event.date}</p>
                      <p><i data-lucide="clock"></i> ${event.time}</p>
                      <p><i data-lucide="map-pin"></i> ${event.location}</p>
                  </div>
                  <p>${event.description}</p>
              </div>
          `;
          pastEventsGrid.appendChild(eventCard);
      });

      // Update Lucide icons
      if (typeof lucide !== "undefined") {
          lucide.createIcons();
      }

      // Show or hide the "Show More" button
      if (limit >= pastEvents.length) {
          showMoreBtn.style.display = "none";
      } else {
          showMoreBtn.style.display = "block";
      }
  }

  // Initial render
  renderEvents(visibleEvents);

  // Handle "Show More" button click
  showMoreBtn.addEventListener("click", function () {
      visibleEvents = pastEvents.length; // Show all events
      renderEvents(visibleEvents);
  });
});


// Render Gallery with Auto-Scroll (Round-robin)
const galleryContainer = document.getElementById('gallery-slider');
const galleryImages = [
  { url: 'images/Screenshot 2024-11-14 213437.png', caption: 'Leadership Workshop 2024' },
  { url: 'images/Screenshot 2024-11-14 220119.png', caption: 'Tech Meetup' },
  { url: 'images/Screenshot 2024-11-17 194640.png', caption: 'Student Networking Event' },
  { url: 'images/Screenshot 2024-11-18 001619.png', caption: 'Coding Bootcamp' },
];

galleryImages.forEach(img => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  galleryItem.innerHTML = `<img src="${img.url}" alt="${img.caption}" loading="lazy"><p>${img.caption}</p>`;
  galleryContainer.appendChild(galleryItem);
});

let galleryScrollAmount = 0;
const galleryScrollSpeed = 2; // Adjust scroll speed here
const galleryMaxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;

function autoScrollGallery() {
  galleryScrollAmount += galleryScrollSpeed;
  if (galleryScrollAmount >= galleryMaxScroll) {
    galleryScrollAmount = 0; // Restart scroll for round-robin effect
  }
  galleryContainer.scrollTo({
    left: galleryScrollAmount,
    behavior: 'smooth',
  });
}

// Call the auto-scrolling every 10ms for smooth effect
setInterval(autoScrollGallery, 10);

// Render Founders
const foundersGrid = document.querySelector('.founders-grid');
const founders = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Jane is a visionary leader with over a decade of experience in student engagement and leadership programs.',
    image: 'images/IMG_4511 (1) (1).jpg',
    linked: 'https://www.linkedin.com/in/janedoe',
    email: 'mailto:janedoe@example.com',
  },
  {
    name: 'John Smith',
    role: 'Co-Founder & CTO',
    bio: 'John brings cutting-edge tech expertise and a passion for innovation to the Student Nexus platform.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
    email: 'mailto:johnsmith@example.com',
  },
];

founders.forEach(founder => {
  foundersGrid.innerHTML += `
    <div class="founder-card">
      <img src="${founder.image}" alt="${founder.name}" class="founder-image" loading="lazy">
      <div class="founder-content">
        <h4>${founder.name}</h4>
        <p class="founder-role">${founder.role}</p>
        <p>${founder.bio}</p>
        <div class="founder-contact">
          <a href="${founder.linkedin}" target="_blank" class="icon-link">
            <i data-lucide="linkedin"></i> LinkedIn
          </a>
          <a href="${founder.email}" class="icon-link">
            <i data-lucide="mail"></i> Email
          </a>
        </div>
      </div>
    </div>
  `;
});
lucide.createIcons();





// FAQ Section
const faqList = document.querySelector('.faq-list');
const faqs = [
  {
    question: 'How can I join the Student Nexus community?',
    answer: 'Joining is easy! Click "Register" at the top of the page and complete the form.',
  },
  {
    question: 'Are events free for students?',
    answer: 'Most events are free for registered members. Special workshops may have a nominal fee.',
  },
  {
    question: 'How can I contribute or become a mentor?',
    answer: 'Apply to become a mentor through the "Become a Mentor" program. Contact us for details.',
  },
];

faqs.forEach(faq => {
  faqList.innerHTML += `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        ${faq.question}
        <i data-lucide="chevron-down"></i>
      </button>
      <div class="faq-answer" aria-hidden="true">${faq.answer}</div>
    </div>
  `;
});
lucide.createIcons();

faqList.addEventListener('click', event => {
  if (event.target.closest('.faq-question')) {
    const faqItem = event.target.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    faqItem.classList.toggle('active');
    const isActive = faqItem.classList.contains('active');
    answer.setAttribute('aria-hidden', !isActive);
    faqItem.querySelector('.faq-question').setAttribute('aria-expanded', isActive);
    const icon = faqItem.querySelector('i');
    icon.setAttribute('data-lucide', isActive ? 'chevron-up' : 'chevron-down');
    lucide.createIcons();
  }
});

// Animated Counter
const counters = document.querySelectorAll('.count');
const animateCounter = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const increment = Math.ceil(target / 200);
    const updateCounter = () => {
      const current = +counter.textContent;
      if (current < target) {
        counter.textContent = current + increment;
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
};

const observerOptions = { threshold: 0.5 };
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// Update Footer Year
document.getElementById('current-year').textContent = new Date().getFullYear();
