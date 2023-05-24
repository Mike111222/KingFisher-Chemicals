// nav-bar js code for hamburger

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

const allSpeakers = [
  {
    id: 'speaker1',
    name: 'Yochai Benkler',
    description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    detail: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: '/img/Profiles/speaker_01.png',
  },
  {
    id: 'speaker2',
    name: 'SohYeong Noh',
    description: 'Director of Art Centre Nabi and a board member of HG Korea',
    detail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    featuredImage: '/img/Profiles/speaker_02.png',
  },
  {
    id: 'speaker3',
    name: 'Lila Tretikov',
    description: 'Executive Director of the Wikimedia Foundation',
    detail: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    featuredImage: '/img/Profiles/speaker_03.png',
  },
  {
    id: 'speaker4',
    name: 'Kilnam Chon',
    description: 'Assistant Professor of Agro Studies at Harvard School',
    detail: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    featuredImage: '/img/Profiles/speaker_04.png',
  },
  {
    id: 'speaker5',
    name: 'Julia Leda',
    description: 'President of Young Pirates of Europe',
    detail: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    featuredImage: '/img/Profiles/speaker_05.png',
  },
  {
    id: 'speaker6',
    name: 'Ryan Merkley',
    description: 'CEO of HopeGrower Gold, ex COO of the Mozilla Foundation',
    detail: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    featuredImage: '/img/Profiles/speaker_06.png',
  },
];

// for loading speakers on run time through JavaScript...Speakers Card Mapping

const speakersContainer = document.getElementById('speakers');

allSpeakers.map((card) => {
  speakersContainer.innerHTML += `
  <div class="speakers">
    <div id="${card.id}" class="speakers-container">
    <div>
        <img src="${card.featuredImage}" class="speaker" alt="Speaker1">
    </div>
        <div>
          <h3 class="speaker-name">
            "${card.name}"
          </h3>
          <p class="speaker-bio">"${card.description}"</p>
          <p class="speaker-details">"${card.detail}"</p>
        </div>
    
    </div>
  </div>
  `;
  return ('');
});