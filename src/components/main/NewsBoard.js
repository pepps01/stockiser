import React from 'react'
import News from '../atom/news/News'

function NewsBoard({...props}) {
  return (
    <div className='sm:flex sm:w-2/12 sm:h-[100vh]  sm:bg-white sm:px-4 sm:pt-8 sm:flex-col  w-0'>
      <div className='font-bold text-xl'>NewsBoard</div>
      {/* <div className=''>Total Added</div>

      <div className=''>Assets Information</div> */}
      <div>
        <div
          style={{
            overflowY: "scroll",
            scrollbarColor: "green",
            height: "50vh",
          }}
        >
          <News
            title={
              "Welcome to the Market segment.  elcome to the Market segment elcome to the Market segment"
            }
            media="Guardian"
            timer="18 hours ago"
          />
          <hr style={{ opacity: 0.4, background:"black", border:"1px solid" }}></hr>
          <News
            title={"Stock market capitalisation plunges by N78 billion"}
            media="Guardian"
            timer="18 hours ago"
          />
            <hr style={{ opacity: 0.4, background:"black", border:"1px solid" }}></hr>
          <News
            title={"How This Week's Big Tech Earnings Could Affect the Broader Market"}
            media="Guardian"
            timer="18 hours ago"
          />
            <hr style={{ opacity: 0.4, background:"black", border:"1px solid", }}></hr>
          <News
            title={"The S&P 500 index SPX 1.11%  has quickly turned down from its all-time highs. "}
            media="Bloomberg"
            timer="18 hours ago"
          />
            <hr style={{ opacity: 0.4, background:"black", border:"1px solid" }}></hr>
          <News
            title={"Julius Berger posts N71.2b turnover, N3.4b PBT in Q1"}
            media="Guardian"
            timer="18 hours ago"
          />
        </div>
      </div>
    </div>

  )
}

export default NewsBoard