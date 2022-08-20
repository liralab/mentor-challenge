import logo from '../../images/logo.svg';
import DropDown from "../DropDown";
import DropDownItem from "../DropDownItem";

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
        <>
          <div className="container mx-auto flex p-8 items-center">
              <img src={logo} className="p-2 mr-20" alt="ardaninsaturnu"/>
              <div className="flex gap-8">
                  { navLinks.map( navLink => {
                      return(
                      <DropDown name={ navLink.name } icon={ navLink.dropDown ?? true } drop ={navLink.dropDown ?? true }>
                          { navLink.dropDown && ( navLink.dropDown.map( item => <DropDownItem item ={ item.name } url="#" />)) }
                      </DropDown>
                      )
                  })}
              </div>
          </div>
        </>
    )
};
