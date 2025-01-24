import React from 'react';
import './App.css'; // Make sure to import the CSS file

// Album Component
const Album = ({ title, releaseDate, image }) => {
  return (
    <div className="album">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Release Date: {releaseDate}</p>
    </div>
  );
};

// Member Component
const Member = ({ name, role, image }) => {
  return (
    <div className="member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

// Tour Date Component
const TourDate = ({ date, location }) => {
  return (
    <li>{date} - {location}</li>
  );
};

// Main App Component
const App = () => {
  // Album Data
  const albums = [
    { title: 'I Am NOT', releaseDate: 'March 2018', image: 'images/album1.jpg' },
    { title: 'NOEASY', releaseDate: 'August 2021', image: 'images/album2.jpg' },
    { title: 'Clé 1: MIROH', releaseDate: 'March 2019', image: 'images/album3.jpg' },
    { title: 'IN生', releaseDate: 'September 2020', image: 'images/album4.jpg' },
    { title: '5-STAR', releaseDate: 'June 2023', image: 'images/album5.jpg' },
    { title: 'ATE', releaseDate: 'January 2024', image: 'images/album6.jpg' },
    { title: 'Giant', releaseDate: 'February 2024', image: 'images/album7.jpg' },
    { title: 'HOP', releaseDate: 'July 2024', image: 'images/album8.jpg' }
  ];

  // Members Data
  const members = [
    { name: 'Bang Chan', role: 'Leader, Vocalist, Rapper, Producer', image: 'images/member1.jpg' },
    { name: 'Lee Know', role: 'Vocalist, Dancer', image: 'images/member2.jpg' },
    { name: 'Changbin', role: 'Rapper, Producer', image: 'images/member3.jpg' },
    { name: 'Hyunjin', role: 'Vocalist, Dancer', image: 'images/member4.jpg' },
    { name: 'Han', role: 'Rapper, Vocalist', image: 'images/member5.jpg' },
    { name: 'Felix', role: 'Vocalist, Dancer', image: 'images/member6.jpg' },
    { name: 'Seungmin', role: 'Vocalist', image: 'images/member7.jpg' },
    { name: 'I.N', role: 'Vocalist, Maknae', image: 'images/member8.jpg' }
  ];

  // Tour Dates Data
  const tourDates = [
    { date: 'January 15, 2024', location: 'Seoul, South Korea' },
    { date: 'February 10, 2024', location: 'Tokyo, Japan' },
    { date: 'March 22, 2024', location: 'Los Angeles, USA' },
    { date: 'April 5, 2024', location: 'London, UK' },
    { date: 'May 10, 2024', location: 'Sydney, Australia' }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Stray Kids Fan Hub</div>
        <nav className="nav">
          <ul>
            <li><a href="#history">History</a></li>
            <li><a href="#world-tour">World Tour</a></li>
            <li><a href="#albums">Albums</a></li>
            <li><a href="#members">Members</a></li>
            <li><a href="#skizo">Skizo & Emojis</a></li>
          </ul>
        </nav>
      </header>

      {/* History Section */}
      <section id="history" className="section">
        <h1>Stray Kids History</h1>
        <p>Stray Kids is a South Korean boy band formed by JYP Entertainment in 2017. The group debuted with their EP *I Am NOT* in March 2018...</p>
        <div className="animation-container">
          <img src="images/history.jpg" alt="Stray Kids History" />
        </div>
      </section>

      {/* World Tour Section */}
      <section id="world-tour" className="section">
        <h1>World Tour 2024/2025</h1>
        <div className="tour-dates">
          <h2>Dates & Locations</h2>
          <ul>
            {tourDates.map((tour, index) => (
              <TourDate key={index} date={tour.date} location={tour.location} />
            ))}
          </ul>
        </div>
        <div className="tour-gallery">
          <h2>Tour Photos</h2>
          <div className="gallery">
            <img src="images/tour1.jpg" alt="Seoul Concert" />
            <img src="images/tour2.jpg" alt="Tokyo Concert" />
            <img src="images/tour3.jpg" alt="LA Concert" />
            <img src="images/tour4.jpg" alt="London Concert" />
            <img src="images/tour5.jpg" alt="Sydney Concert" />
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section id="albums" className="section">
        <h1>Albums & EPs</h1>
        <div className="albums">
          {albums.map((album, index) => (
            <Album key={index} title={album.title} releaseDate={album.releaseDate} image={album.image} />
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="section">
        <h1>Members</h1>
        <div className="members">
          {members.map((member, index) => (
            <Member key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </section>

      {/* Skizo Section */}
      <section id="skizo" className="section">
        <h1>Skizo & Emojis</h1>
        <p>Explore the unique Skizo characters and official emojis that represent Stray Kids' vibrant fandom.</p>
        <div className="skizo-gallery">
          <img src="images/skizo1.png" alt="Skizo Character" />
          <img src="images/skizo2.png" alt="Emoji" />
          <img src="images/skizo3.png" alt="Skizo Fun" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Stray Kids Fan Hub. Made with love for STAYs worldwide.</p>
      </footer>
    </div>
  );
};

export default App;
