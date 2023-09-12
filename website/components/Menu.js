import React from "react"

function Menu({ menu, showHome = false, isMobile = false, setHamburgerOpen }) {

    return (
        <ul className={`${!isMobile ? 'navbar-nav mb-2 mb-lg-0' : ''}`}>
            {
                menu.map(menuItem => {
                    if (showHome) {
                        return (<MenuItem menuItem={menuItem} key={menuItem.databaseId} setHamburgerOpen={setHamburgerOpen} isMobile={isMobile} />)
                    } else {
                        return (
                            menuItem.path === "/" ? "" : <MenuItem menuItem={menuItem} key={menuItem.databaseId} setHamburgerOpen={setHamburgerOpen} isMobile={isMobile} />
                        )
                    }
                })}
            <li className="nav-item">
                <a className="nav-link" href={'/affiliates'} onClick={() => {
                    if(isMobile) {
                        setHamburgerOpen((prev) => !prev);
                        document.body.classList.remove('overflow');
                    }
                }}>Promote & Earn</a>
            </li>
        </ul>
    )
}

const MenuItem = ({ menuItem, setHamburgerOpen, isMobile }) => (

    <li className="nav-item">
        {isMobile ?
            <a className="nav-link" href={menuItem.path} onClick={() => {
                setHamburgerOpen((prev) => !prev);
                document.body.classList.remove('overflow');
            }} >{menuItem.label}</a>
            :
            <a className="nav-link" href={menuItem.path} >{menuItem.label}</a>
        }
    </li>
);

export default Menu;