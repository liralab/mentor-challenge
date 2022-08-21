import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css";

import menulog1 from './images/icon-todo.svg'
import menulog2 from './images/icon-calendar.svg'
import menulog3 from './images/icon-reminders.svg'
import menulog4 from './images/icon-planning.svg'
import icon_arrow_up from './images/icon-arrow-up.svg'
import icon_arrow_down from './images/icon-arrow-down.svg'
import logo from './images/logo.svg'
import botlog1 from './images/client-databiz.svg'
import botlog2 from './images/client-audiophile.svg'
import botlog3 from './images/client-meet.svg'
import botlog4 from './images/client-maker.svg'
import mobmenu_open from './images/icon-menu.svg'
import mobmenu_close from './images/icon-close-menu.svg'

/* -almost-white: hsl(0, 0%, 98%);
-medium-gray: hsl(0, 0%, 41%);
-almost-back: hsl(0, 0%, 8%) ; */

class Header extends React.Component {
  state = {
    display2: 'none',
    imgsrc: icon_arrow_down,
    imgsrc2: icon_arrow_down,
    display:'none',
    widthMobile: 0,
    closebut:'none',
    hamg1: 0,
    hamg2: 0
  }
 menuOpenerFeatures = () => {
  let changer = this.state.display2 == 'none' ? 'block' : 'none'
  let rotater = this.state.imgsrc == icon_arrow_down ? icon_arrow_up : icon_arrow_down
  this.setState({display2: changer,imgsrc : rotater})
 }
 menuOpenerCompany = () => {
  let changer2 = this.state.display=== 'none' ? 'block' : 'none'
  let rotater2 = this.state.imgsrc2 == icon_arrow_down ? icon_arrow_up : icon_arrow_down
  this.setState({imgsrc2 : rotater2, display: changer2})
 }
 mobmenu_opener = () => {
  let mobchanger = this.state.mobmenu == mobmenu_open ? mobmenu_close : mobmenu_open
  this.setState({mobmenu : mobchanger, closebut: 'block', widthMobile : '250px' })
 }
 mobmenu_closer = () => {
  this.setState({widthMobile : 0})
 }
 mobmenuOpenerFeatures = () => {
  const featuresOpenedHeight = document.querySelector('.hamburger1').scrollHeight
  let rotater = this.state.imgsrc == icon_arrow_down ? icon_arrow_up : icon_arrow_down
  let hambur1 = this.state.hamg1 === 0 ? featuresOpenedHeight : 0
  this.setState({hamg1 : hambur1, imgsrc: rotater })
 }
 mobmenuOpenerCompany = () => {
  const companyOpenedHeight = document.querySelector('.hamburger2').scrollHeight
  let rotater = this.state.imgsrc == icon_arrow_down ? icon_arrow_up : icon_arrow_down
  let hambur2 = this.state.hamg2 === 0 ? companyOpenedHeight : 0
  this.setState({hamg2 : hambur2, imgsrc: rotater})
 }
render() {
  return (
      <header style= {{position:'static',top:'0', width:'100%'}}>
        <div className='container' style={{padding:'30px',display:'flex'}}>
          <div style={{flex:'0 0 15%'}}> 
            <img src={logo} alt='logo' />
          </div>

          <div className='mobile-menu' style={{position:'relative',display:'none'}}>
            <img onClick={this.mobmenu_opener} src={mobmenu_open} alt='hamburger' />
              <div className='openableMobile' style={{width:this.state.widthMobile}}>
                <div  style={{display:'flex', width:'85%', justifyContent:'flex-end', margin:'30px 0 0 0'}}>
                  <img onClick={this.mobmenu_closer} src={mobmenu_close} style={{display:this.state.closebut}} alt='closer' />
                </div>
                <div style={{margin:'15px 0 0 15px',gap:'25px',display:'flex',flexDirection:'column', width:'85%',alignItems:'flex-start', justifyContent:'center'}}>
                  
                  <div onClick={this.mobmenuOpenerFeatures}>Features<span style={{marginLeft:'5px',transition:'all .3s ease-in-out'}}><img src={this.state.imgsrc} alt='' /></span>
                    <div className='hamburger1' style={{maxHeight:this.state.hamg1,transition:'.3s',fontSize:'16px',overflow:'hidden'}}>
                      <div style={{padding:'13px 0 0 7px',display:'flex'}}><div style={{marginRight:'5px',width:'20px'}}> <img src={menulog1} alt='xd' /> </div><div>Todo List</div></div>
                      <div style={{padding:'13px 0 0 7px',display:'flex'}}><div style={{marginRight:'5px',width:'20px'}}> <img src={menulog2} alt='xd' /> </div><div>Calendar</div></div>
                      <div style={{padding:'13px 0 0 7px',display:'flex'}}><div style={{marginRight:'5px',width:'20px'}}> <img src={menulog3} alt='xd' /> </div><div>Reminders</div></div>
                      <div style={{padding:'13px 0 0 7px',display:'flex'}}><div style={{marginRight:'5px',width:'20px'}}> <img src={menulog4} alt='xd' /> </div><div>Planning</div></div>
                      
                    </div>
                  </div>
                  
                  <div onClick={this.mobmenuOpenerCompany}>Company<span style={{marginLeft:'5px',transition:'all .3s ease-in-out'}}><img src={this.state.imgsrc} alt='' /></span>
                    <div  className='hamburger2' style={{maxHeight:this.state.hamg2,transition:'.3s',fontSize:'16px',overflow:'hidden'}}>
                      <div style={{padding:'13px 0 0 7px'}}>History</div>
                      <div style={{padding:'13px 0 0 7px'}}>Our Team</div>
                      <div style={{padding:'13px 0 0 7px'}}>Blog</div>
                    </div>
                  </div>
                  <div>Careers</div>
                  <div>About</div>
                  <div style={{width:'100%', display:'flex', flexDirection:'column',gap:'10px'}}>
                    <button style={{backgroundColor:'transparent', padding:'8px 0',border:'none'}}>Login</button>
                    <button style={{backgroundColor:'transparent', padding:'12px 0',borderRadius:'15px',border:'2px solid black'}}>Register</button>
                  </div>
                </div>
              </div>
          </div>

          <div className='header-right' style={{display:'flex', justifyContent:'space-between', fontSize:'16px', flex:'0 0 85%'}}>
            <div  style={{display:'flex',gap:'20px'}}>
              
              <div className='header-menu' onMouseOver={this.menuOpenerFeatures} onMouseOut={this.menuOpenerFeatures} style={{cursor:'pointer',position:'relative'}}>Features<span style={{marginLeft:'5px',transition:'all .3s ease-in-out'}}><img src={this.state.imgsrc} alt='' /></span>
                <div className='openable1' style={{display:this.state.display2}}>
                <a href='#'>
                  <div className='hoverA'>
                    <div style={{marginBottom:'3px',width:'20px',display:'flex', justifyContent:'center'}}> <img src={menulog1} alt='xd' /> </div>
                    <div>Todo List</div>
                  </div>
                  <div className='hoverA'>
                    <div style={{marginBottom:'3px',width:'20px',display:'flex', justifyContent:'center'}}> <img src={menulog2} alt='xd' /> </div>
                    <div>Calendar</div>
                  </div>
                  <div className='hoverA'>
                    <div style={{marginBottom:'3px',width:'20px',display:'flex', justifyContent:'center'}}> <img src={menulog3} alt='xd' /> </div>
                    <div>Reminders</div>
                  </div>
                  <div className='hoverA'>
                    <div style={{marginBottom:'3px',width:'20px',display:'flex', justifyContent:'center'}}> <img src={menulog4} alt='xd' /> </div>
                    <div>Planning</div>
                  </div> 
                  </a>     
                </div>
              </div>
              
              <div className='header-menu' onMouseOver={this.menuOpenerCompany} onMouseOut={this.menuOpenerCompany} style={{ cursor:'pointer',position:'relative'}}>Company<span style={{marginLeft:'5px'}}><img src={this.state.imgsrc2} alt='' /></span>
              <div className='openable' style={{display:this.state.display}}>
                <a href='#'>
                  <div className='hoverA' style={{marginBottom:'20px'}}>History</div>
                  <div className='hoverA' style={{marginBottom:'20px'}}>Our Team</div>
                  <div className='hoverA' style={{}}>Blog</div>
                </a>
              </div>
              </div>
              <div className='header-menu'>Careers</div>
              <div className='header-menu'>About</div>
            </div>
            <div style={{marginRight:'20px'}}>
              <button className='header-menu' style={{fontFamily:'Epilogue,sans-serif', color:'hsl(0, 0%, 41%)',backgroundColor:'transparent',padding:'8px 12px', marginTop:'-8px',marginRight:'15px',border:'none'}}>Login</button>
              <button className='header-menu' style={{fontFamily:'Epilogue,sans-serif', color:'hsl(0, 0%, 41%)',backgroundColor:'transparent',padding:'8px 16px', marginTop:'-8px',borderRadius:'14px'}}>Register</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

class Main extends React.Component {
  //
    render() {
    return (
      <>
      <div className='main-container' style={{display:'flex',width:'100%'}}>
        <div className='text-area' style={{width:'60%'}}>
          <div className='text-area-wrapper' style={{padding:'50px 50px 50px 150px'}}>
            <div className='padding1' style={{fontSize:'58px',fontWeight:'700',marginBottom:'40px',paddingRight:'33%'}}> Make remote work</div>
            <div className='padding2' style={{paddingRight:'140px', lineHeight:'30px',marginBottom:'20px'}}>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </div>
            <div className='buttonLearn' style={{marginBottom:'10%'}}><button style={{cursor:'pointer',fontFamily:'Epilogue,sans-serif', color:'hsl(0, 0%, 96%)',backgroundColor:'black',padding:'15px 30px', borderRadius:'14px'}}>Learn More</button></div>
            <div className='bottomLogos' style={{display:'flex', gap:'50px'}}>
              <img src={botlog1} alt={botlog1} />
              <img src={botlog2} alt={botlog2} />
              <img src={botlog3} alt={botlog3} />
              <img src={botlog4} alt={botlog4} />
            </div>
          </div>
        </div>
        <div className='imgArea' style={{width:'40%', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
      </div>
      </>
    )
  }
}

const Footer = () => {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor </a>
      Coded by <a href="https://www.frontendmentor.io/profile/AEmre23" target="_blank">Emre ALTUNKAYA</a>
    </div>
  )
}
const App = () => {
    return (
      <div style={{backgroundColor:'hsl(0, 0%, 98%)',fontFamily:'Epilogue,sans-serif', position:'relative', minHeight:'100vh', fontSize:'18px', color:'hsl(0, 0%, 8%)'}}>
      <Header />
      <Main />
      <Footer />
      </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)