import HDSocials from "../images/HDSocials.jpeg";

function Navbar() {
  return (
    <>
      <section>
        <nav class="navbar navbar-expand-md navbar-dark">
          <div class="container-xxl">
            <div class="col-3 col-lg-4">
              <img
                className="hdsocials img-fluid rounded"
                src={HDSocials}
                alt="hdsocials"
              />
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="container-xxl">
                <a href="#intro" className="navbar-brand"></a>

                {/* toggle button for mobile nav */}
                <button
                  className="navbar-toggler bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main-nav"
                  aria-controls="main-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon col-3"></span>
                </button>

                {/* navbar links */}

                <div
                  className="collapse navbar-collapse justify-content-start align-center"
                  id="main-nav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#topics" className="nav-link text-primary">
                        About the book
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#reviews" className="nav-link text-primary">
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link text-primary">
                        Get in Touch
                      </a>
                    </li>
                    <li className="nav-item d-md-none">
                      <a href="#pricing" className="nav-link text-primary">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item ms-2 d-none d-md-inline">
                      <a href="#pricing" className="btn btn-primary">
                        buy now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
