import React from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';

export default function About() {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!

  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutLayout />}>
          <Route index element={<AboutIndex />} />
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page2" element={<Page2 />} />
        </Route>
      </Routes>
    </div>
  );
}

function AboutLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/About">Index</Link></li>
          <li><Link to="/About/Page1">Page 1</Link></li>
          <li><Link to="/About/Page2">Page 2</Link></li>
          <li><Link to="/About/Page3">Page 3</Link></li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function AboutIndex() {
  return (
    <div>
      <h2>About Index</h2>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h2>Page 1</h2>
      <ul>
        <li>Page 1 Message</li>
      </ul>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h2>Page 2</h2>
      <ul>
        <li>Page 2 Message</li>
      </ul>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h2>Page 3</h2>
      <ul>
        <li>Page 3 Message</li>
      </ul>
    </div>
  );
}
