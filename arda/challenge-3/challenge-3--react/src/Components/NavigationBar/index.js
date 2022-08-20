import {navLinks} from "../../constant";
import DropDown from "../DropDown";
import DropDownItem from "../DropDownItem";
import {useState} from "react";

export default function NavigationBar({ openDrawer, setOpenDrawer }) {
    const [close,setClose] = useState(false );

    return(
        <div className={`${openDrawer ? '' : 'hidden'}`}>
            <div className={`absolute ${ openDrawer ? 'w-1/2' : 'w-0'} z-50 bg-amber-50 right-0 h-screen top-0 flex flex-col justify-center text-center items-center transition-all duration-700 ease-in-out`}>
                { navLinks.map( navLink => {
                    return <a className={`${openDrawer ? '' : 'hidden'}`}> {navLink.name}</a>
                })}
            </div>
            <div className={`w-full h-full bg-gray-900 opacity-60 absolute z-40 top-0 left-0 ${openDrawer ? '' : 'hidden'} ${ close && 'hidden' }`} onClick={ () => setOpenDrawer(false) }>d</div>
        </div>
    )
};