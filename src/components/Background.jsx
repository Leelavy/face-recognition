import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const particlesOptions = {
  background: {
    color: {
      value: "#f8fbff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#b181ff",
    },
    links: {
      color: "#b181ff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};

const Background = () => {
  return <BackParticles params={particlesOptions} />;
};

const BackParticles = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
export default Background;
