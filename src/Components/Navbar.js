import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(pass) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${pass.mode} bg-${pass.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{pass.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">{pass.homeText}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${pass.mode === 'light' ? 'dark' : 'light'} mx-3`}>
                        <input className="form-check-input" onClick={pass.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{pass.modeBtnTxt}</label>
                    </div>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// both '' , "" colons are correct and have same usage.
// default props will also override the isRequired command
Navbar.propTypes = {
    title: propTypes.string,
    homeText: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    homeText: "Home"
}


