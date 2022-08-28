import '../styles/base.css'

import Card from '../components/Card'
import UserCard from '../components/UserCard'
import Footer from '../components/Footer'

const Main = ({
  hourCurrrent,
 changeTime, dailyChange, weeklyChange, monthlyChange,
 dailyActiver, weeklyActiver,monthlyActiver,dailyStat,weeklyStat,monthlyStat
  }) => {

  let CardMaker = hourCurrrent.map((info) => {
    return(
   <Card 
   cardTitle={info[0]}
   cardCurrentHr={info[1]}
   cardPrevHr={info[2]}
   changeTime={changeTime}
   key={info[0]}  
   />
   )})
   
 return(
  <>
    <div className='container'>
      <div className='content-wrapper'>
        <div className='content-leftside'>
          <UserCard
          dailyChange={dailyChange}
          weeklyChange={weeklyChange}
          monthlyChange={monthlyChange}
          dailyStat={dailyStat}
          weeklyStat={weeklyStat}
          monthlyStat={monthlyStat}
          />
        </div>
        <div className='content-rightside'>
            {CardMaker}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Main
