import '../styles/base.css'

import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfcare from '../images/icon-self-care.svg'

const Card = ({cardTitle,cardCurrentHr,cardPrevHr,changeTime}) => {
 
  let picArr = [work,play,study,exercise,social,selfcare]
  let fakePiccArr = ["work","play","study","exercise","social","selfcare"]
  // .replace is for delete spaces (Self Care)
  let str = cardTitle.toLowerCase().replace(/\s+/g, '') 
  let curPic = fakePiccArr.indexOf(str)
  let picture = picArr[curPic]

  let style
  if (str == "work") style={backgroundColor:'hsl(15, 100%, 70%)'}
  else if (str == "play") style={backgroundColor:'hsl(195, 74%, 62%)'}
  else if (str == "study") style={backgroundColor:'hsl(348, 100%, 68%)'}
  else if (str == "exercise") style={backgroundColor:'hsl(145, 58%, 55%)'}
  else if (str == "social") style={backgroundColor:'hsl(264, 64%, 52%)'}
  else style={backgroundColor:'hsl(43, 84%, 65%)'}

  return (
  <div className='content-box'>
    <div className='svg-wrapper'>
      <div style={style} className='svg-area'>
        <img src={picture} alt={picture} />
      </div>
    </div>
    <div className='content-text-container'>
      <div className='content-title'>
        <div className='content-header'>{cardTitle}</div>
        <div className='content-dot'>...</div>
      </div>
      <div className='hour-displayer'>{cardCurrentHr}Hrs</div>
      <div style={{opacity:'.6', fontSize:'14px'}}>{changeTime} - {cardPrevHr} Hrs </div>
    </div>
  </div>
  )
}
export default Card