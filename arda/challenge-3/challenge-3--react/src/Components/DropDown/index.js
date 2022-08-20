import {useState} from "react";
import iconDown from "../../images/icon-arrow-down.svg";
import iconUp from '../../images/icon-arrow-up.svg';

export default function DropDown({ name, children, icon= false, drop = false }) {
    const [ arrowIcon, setArrowIcon ] = useState( iconDown );
    const [ dropDown, setDropDown ] = useState( 'hidden' );

    return(
        <div
            className="flex items-center gap-3 relative"
            onMouseOver={ () => {
                icon && setArrowIcon(iconUp);
                drop && setDropDown( '' );
            }}
            onMouseLeave={ () => {
                icon && setArrowIcon(iconDown);
                drop && setDropDown( 'hidden' );
            }}>
          <span
              className="text-zinc-700 hover:text-black font-medium flex items-center gap-3">
              { name }
              { icon && <img src={ arrowIcon } className="w-auto h-2" alt="ardaninsaturnu"/> }
          </span>
            { drop && <div className={`flex flex-col absolute top-10 bg-white border rounded-xl px-5 py-5 mb-0.5 w-[150px] ${dropDown}`}>{ children }</div> }
        </div>
    )
};