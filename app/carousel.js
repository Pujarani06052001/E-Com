import Script from 'next/script';

const Carousel = () => {
  return (
    <div className="container-fluid">
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: '500px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg"
              alt="First slide"
              style={{ height: '500px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg"
              alt="Second slide"
              style={{ height: '500px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
              alt="Third slide"
              style={{ height: '500px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Bootstrap scripts using next/script */}
      <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
    </div>
  );
};

export default Carousel;
