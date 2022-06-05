import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg"
              height="28"
              alt="CoolBrand"
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/" className="nav-item nav-link">
                Testimonials
              </a>
              <a href="/" className="nav-item nav-link">
                Contact Us
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              <a href="/" className="nav-item nav-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row mt-4">
        <div className="col-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            pulvinar eros. Nunc ut nulla placerat, varius dui ac, egestas leo.
            Phasellus laoreet leo commodo interdum ullamcorper. Suspendisse
            convallis ultrices sapien nec elementum. Donec lobortis fringilla
            mauris, id molestie quam dictum vel. Vivamus lorem augue, elementum
            eget commodo sit amet, lobortis a ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi eleifend pellentesque nibh
            ultricies varius. Phasellus consequat suscipit vulputate. Aenean
            elementum tellus sed nulla pharetra, at placerat dui efficitur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut ornare molestie elit vel molestie. Ut
            efficitur lectus tellus. Cras dictum metus eros, in congue enim
            pellentesque luctus. Vivamus mi ipsum, ultrices vel turpis id,
            gravida convallis nulla. Nulla interdum bibendum orci, sit amet
            facilisis lacus feugiat nec.
          </p>
        </div>
        <div className="col-4">
          <img
            className="aboutUs-img"
            src="https://images.freeimages.com/images/small-previews/155/bridge-1559052.jpg"
            alt="img"
          />
        </div>
      </div>
      

    </>
  );
}

export default App;
