import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from "react-bootstrap";
import { List, X } from 'react-bootstrap-icons';
import Navigation from './Navigation';

const Header = () => {
    const [openedNavbar, setOpenedNavbar] = useState(false)
    const [time, setTime] = useState("")

    useEffect(() => {
        const hour = new Date().getHours()
        if (hour >= 1 && hour <= 10) {
            setTime("Morning")
        } else if (hour >= 11 && hour <= 15) {
            setTime("Afternoon")
        } else if (hour >= 16 && hour <= 19) {
            setTime("Evening")
        } else if ((hour >= 20 && hour <= 24 ) || hour === 0) {
            setTime("Night")
        }
    }, [])

    return (
        <section className='text-light position-fixed top-0 bg-black w-100 ps-3 py-3 border-top-0 border-start-0 border-end-0' style={{ zIndex: 5 }}>
            <h5>{time} at <span className="text-success">Taufik</span>Cinema</h5>
            <div>
            <Button onClick={() => setOpenedNavbar(!openedNavbar)} className="bg-transparent border border-0 d-block d-md-none" style={{ position: "absolute", right: 0, top: 5, zIndex: 3 }}>
                { openedNavbar ? <X size={40}/> : <List size={40}/> }
            </Button>
            <Offcanvas show={openedNavbar} onHide={() => setOpenedNavbar(false)} backdrop={false} scroll={false} className="bg-black d-md-none" style={{ width: "50vw" }}>   
                <Navigation display="block"/>
            </Offcanvas>
            </div>
        </section>
    )
}

export default Header