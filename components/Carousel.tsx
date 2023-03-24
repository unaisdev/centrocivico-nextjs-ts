import "./carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <span id="item-1"></span>
      <span id="item-2"></span>
      <span id="item-3"></span>
      <div className="carousel-item-div item-1">
        <div className="carousel-item-header-background p-3">
          <div className="row">
            <div className="col-sm-12">
              <h2>
                <strong className="text-md">¡Conoce nuestra casa!</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p  className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                accumsan pretium dolor vel convallis. Aliquam erat volutpat.
                Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.
              </p>
            </div>
          </div>
        </div>

        <a className="arrow arrow-prev" href="#item-3"></a>
        <a className="arrow arrow-next" href="#item-2"></a>
      </div>

      <div className="carousel-item-div item-2">
        <div className="carousel-item-header-background p-3">
          <h2>Item 2</h2>
          <p>
            Ven a disfrutar de nuestros platos más populares en un ambiente
            único
          </p>
        </div>
        <a className="arrow arrow-prev" href="#item-1"></a>
        <a className="arrow arrow-next" href="#item-3"></a>
      </div>

      <div className="carousel-item-div item-3">
        <div className="carousel-item-header-background p-3">
          <h2>Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.
          </p>
        </div>
        <a className="arrow arrow-prev" href="#item-2"></a>
        <a className="arrow arrow-next" href="#item-1"></a>
      </div>
    </div>
  );
};

export default Carousel;