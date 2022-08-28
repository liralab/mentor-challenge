import '../styles/base.css'

import jeremyPic from '../images/image-jeremy.png'
import workPic from '../images/icon-work.svg'
import playPic from '../images/icon-play.svg'
import studyPic from '../images/icon-study.svg'
import exercisePic from '../images/icon-exercise.svg'
import socialPic from '../images/icon-social.svg'
import selfcarePic from '../images/icon-self-care.svg'

const Main = ({
  hourCurrrent:[work,play,study,exercise,social,selfcare],
 changeTime, dailyChange, weeklyChange, monthlyChange,
 dailyActiver, weeklyActiver,monthlyActiver,dailyStat,weeklyStat,monthlyStat
  }) => {
  const dailyStyle = dailyStat ? {color:'white', opacity:'1'}  : {}
  const weeklyStyle = weeklyStat ? {color:'white', opacity:'1'} : {}
  const monthlyStyle = monthlyStat ? {color:'white', opacity:'1'} : {}
  
 return(
  <>
    <div className='container'>
      <div className='content-wrapper'>

        <div style={{}} className='content-leftside'>
          <div className='user-info'>
            <div className='user-pp'>
              <div className='img-container'>
                <img src={jeremyPic} alt='userpp' draggable='false'/>
              </div>
            </div>
            <div className='user-name'>
              <div className='report-for'>Report for</div>
              <div className='username'>Jeremy Robson</div>
            </div>
          </div>
          <div className='button-wrapper'>
            <br/>
            <div className='buttonDiv'><button style={dailyStyle} onClick={()=> {dailyChange(); dailyActiver();}}>Daily</button></div>
            <div className='buttonDiv'><button style={weeklyStyle} onClick={()=> {weeklyChange(); weeklyActiver();}}>Weekly</button></div>
            <div className='buttonDiv'><button style={monthlyStyle} onClick={()=> {monthlyChange(); monthlyActiver();}}>Monthly</button></div>
          </div>
        </div>

        <div className='content-rightside'>
            <div className='content-box'>
              <div className='svg-wrapper'>
                <div className='svg-area work'>
                  <img src={workPic} alt='workbackground' />
                </div>
              </div>
              <div className='content-text-container'>
                <div className='content-title'>
                  <div className='content-header'>Work</div>
                  <div className='content-dot'>...</div>
                </div>
                <div className='hour-displayer'>{work[0]}Hrs</div>
                <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {work[1]} Hrs </div>
              </div>
            </div>
            <div className='content-box'>
              <div className='svg-wrapper'>
                <div className='svg-area play'>
                  <img src={playPic} alt='playbackground' />
                </div>
              </div>
              <div className='content-text-container'>
                <div className='content-title'>
                  <div className='content-header'>Play</div>
                  <div className='content-dot'>...</div>
                </div>
                <div className='hour-displayer'>{play[0]}Hrs</div>
                <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {play[1]} Hrs </div>
              </div>
            </div>
            <div className='content-box'>
              <div className='svg-wrapper'>
                <div className='svg-area study'>
                  <img src={studyPic} alt='studybackground' />
                </div>
              </div>
              <div className='content-text-container'>
                <div className='content-title'>
                  <div className='content-header'>Study</div>
                  <div className='content-dot'>...</div>
                </div>
                <div className='hour-displayer'>{study[0]}Hrs</div>
                <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {study[1]} Hrs </div>
              </div>
            </div>
            <div className='content-box'>
              <div className='svg-wrapper'>
                <div className='svg-area exercise'>
                  <img src={exercisePic} alt='exercisebackground' />
                </div>
              </div>
              <div className='content-text-container'>
                <div className='content-title'>
                  <div className='content-header'>Exercise</div>
                  <div className='content-dot'>...</div>
                </div>
                <div className='hour-displayer'>{exercise[0]}Hrs</div>
                <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {exercise[1]} Hrs </div>
              </div>
            </div>
              <div className='content-box'>
                <div className='svg-wrapper'>
                  <div className='svg-area social'>
                    <img src={socialPic} alt='socialbackground' />
                  </div>
                </div>
                <div className='content-text-container'>
                  <div className='content-title'>
                    <div className='content-header'> Social</div>
                    <div className='content-dot'>...</div>
                  </div>
                  <div className='hour-displayer'>{social[0]}Hrs</div>
                  <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {social[1]} Hrs </div>
                </div>
              </div>
              <div className='content-box'>
                <div className='svg-wrapper'>
                  <div className='svg-area selfcare'>
                    <img src={selfcarePic} alt='selfcarebackground' />
                  </div>
                </div>
                <div className='content-text-container'>
                  <div className='content-title'>
                    <div className='content-header'>Selfcare</div>
                    <div className='content-dot'>...</div>
                  </div>
                  <div className='hour-displayer'>{selfcare[0]}Hrs</div>
                  <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {selfcare[1]} Hrs </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor </a>
      Coded by <a href="https://www.frontendmentor.io/profile/AEmre23" target="_blank">Emre ALTUNKAYA</a>
    </div>
    </>
  )
}
export default Main
