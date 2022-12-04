import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";


export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to={"/"}>Jekyll Books</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" href="#">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to={"/categoria/fantasia"}>Fantasia/ C. Ficcion</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to={"/categoria/policial"}>Policiales / Suspenso</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to={"/cart"}><CartWidget/></NavLink>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    );
        
}