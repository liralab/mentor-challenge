import logo from '../../images/logo.svg';
import DropDown from "../DropDown";
import DropDownItem from "../DropDownItem";
import hamburger from '../../images/icon-menu.svg'

const navLinks = [
    {
        name: 'features',
        dropDown: [
            {
                name: 'Todo List',
                url: ''
            },
            {
                name: 'Calendar',
                url: ''
            },
            {
                name: 'Reminders',
                url: ''
            },
            {
                name: 'Planning',
                url: ''
            }
        ]
    },
    {
        name: 'Company',
        dropDown: [
            {
                name: 'History',
                url: ''
            },
            {
                name: 'Our Team',
                url: ''
            },
            {
                name: 'Blog',
                url: ''
            }
        ]
    },
    {
        name: 'Careers',
        dropDown: false
    },
    {
        name: 'About',
        dropDown: false
    }
]

export default function Header() {
    return(
        <header className="mx-auto flex p-8 items-center justify-between">
          <div className="flex">
              <img src={logo} className="p-2 mr-20" alt="ardaninsaturnu"/>
              <div className="gap-8 hidden md:flex">
                  { navLinks.map( navLink => {
                      return(
                      <DropDown name={ navLink.name } icon={ navLink.dropDown ?? true } drop ={navLink.dropDown ?? true }>
                          { navLink.dropDown && ( navLink.dropDown.map( item => <DropDownItem item ={ item.name } url="#" />)) }
                      </DropDown>
                      )
                  })}
              </div>
          </div>
          <div className="md:flex gap-5 hidden">
              <button className="py-1.5 px-3">Login</button>
              <button className="py-1.5 px-3 border border-gray-700 rounded-xl">Register</button>
          </div>
          <a className="block md:hidden"><img src={hamburger} /></a>
        </header>
    )
};
