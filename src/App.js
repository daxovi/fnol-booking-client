import './App.css';
import Header from './Header';
import Booking from './Booking';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="title-bar">
        <div className="container">
          <h1><strong><a href="https://ples.fnol.cz/">23. reprezentační Ples Fakultní nemocnice Olomouc</a></strong>
            Rezervační systém
          </h1>


        </div>
      </div>
      <div class="container">
        <br />
        <Booking />
      </div>
    <Footer />

    </div>
  );
}

export default App;
