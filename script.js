window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: "#008080",
    speed: 0.75,
    maxParticles: 450,
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 100
        }
      }
    ]
  });
};