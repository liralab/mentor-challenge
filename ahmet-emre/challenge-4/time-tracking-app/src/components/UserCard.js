import '../styles/base.css'
import jeremyPic from '../images/image-jeremy.png'

const UserCard = ({
  dailyChange, weeklyChange, monthlyChange,dailyStat,weeklyStat,monthlyStat
}) => {

  const dailyStyle = dailyStat ? {color:'white', opacity:'1'}  : {}
  const weeklyStyle = weeklyStat ? {color:'white', opacity:'1'} : {}
  const monthlyStyle = monthlyStat ? {color:'white', opacity:'1'} : {}
  return (
    <>
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
      <div className='buttonDiv'><button style={dailyStyle} onClick={dailyChange}>Daily</button></div>
      <div className='buttonDiv'><button style={weeklyStyle} onClick={weeklyChange}>Weekly</button></div>
      <div className='buttonDiv'><button style={monthlyStyle} onClick={monthlyChange}>Monthly</button></div>
    </div>
  </>
  )
}
export default UserCard