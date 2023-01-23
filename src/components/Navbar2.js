import React from 'react'

export default function Navbar2() {
  return (
    <div>
        <nav  className="navbar navbar-expand-lg bg-body-tertiary">
          <div>
            <a>Brand</a>
            <button>
              <span></span>
            </button>
            <div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
              <form action="">
                <input/>
                <button>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
    </div>
  )
}
