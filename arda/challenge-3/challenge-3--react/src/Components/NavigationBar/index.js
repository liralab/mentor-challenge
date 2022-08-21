import {navLinks} from "../../constant";

export default function NavigationBar({ openDrawer, setOpenDrawer }) {
    return(
        <div className={`${openDrawer ? '' : 'hidden'}`}>
            <div className={`absolute ${ openDrawer ? 'w-1/2' : 'w-0'} z-50 bg-amber-50 right-0 h-screen top-0 flex flex-col justify-center text-center items-center transition-all`}>
                { navLinks.map( navLink => {
                    return <a className={`${openDrawer ? '' : 'hidden'}`}> {navLink.name}</a>
                })}
            </div>
            <div className={`w-full h-full bg-gray-900 opacity-60 absolute z-40 top-0 left-0 ${openDrawer ? '' : 'hidden'}`} onClick={ () => setOpenDrawer(false) }></div>
        </div>
    )
};