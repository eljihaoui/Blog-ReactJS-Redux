import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    const { appTitle } = props
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="a">{appTitle}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="a">Users</a>
                        </li>
                         <li className="nav-item active">
                            <a className="nav-link" href="a">Postes <span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    appTitle: "My Blog"
}
Navbar.propTypes = {
    appTitle: PropTypes.string.isRequired
}
export default Navbar;