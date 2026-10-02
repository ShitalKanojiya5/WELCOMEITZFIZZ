function CarVisual() {
  return (
    <div className="car-scene">

      {/* Glowing circular ring */}
      <div className="car-ring"></div>

      {/* Secondary ring */}
      <div className="car-ring car-ring-small"></div>

      {/* Car */}
      <div className="car-object">

        {/* Roof */}
        <div className="car-roof"></div>

        {/* Main body */}
        <div className="car-body">

          {/* Window */}
          <div className="car-window"></div>

          {/* Front lights */}
          <div className="car-light car-light-left"></div>
          <div className="car-light car-light-right"></div>

          {/* Front bumper */}
          <div className="car-bumper"></div>

          {/* Wheels */}
          <div className="car-wheel car-wheel-left">
            <div className="car-wheel-inner"></div>
          </div>

          <div className="car-wheel car-wheel-right">
            <div className="car-wheel-inner"></div>
          </div>

        </div>
      </div>

      {/* Ground glow */}
      <div className="car-ground-glow"></div>
    </div>
  );
}

export default CarVisual;