import React from "react";

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-secondary ">
  <div class="container-fluid ">
    <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a class="nav-link text-secondary-emphasis" href="#">Features</a>
        <a class="nav-link text-secondary-emphasis" href="#">Pricing</a>
        <a class="nav-link disabled text-secondary-emphasis" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;