import React from 'react'

function Latest() {
  return (
    <div className='Latest-area'>
      <div className='Latest-container'>
        <h4 className='NeedsUrbanFont NeedToBeYelow'>Latest Blog and News</h4>
        <div className='Latest-topside'>
          <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Check Out Our Latest Blog and News Update</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
        <div className='Latest-cardsarea'>
          <div className='Latest-card'>
            <img className='topimg' src="src/img/Latest.png" alt="" />
            <div className='cardbottom'>
              <div className='datum'>
                <img src="src/img/whitecalender.png" alt="" />
                <p className='h4'>August 17, 2025</p>
              </div>
              <h6>Safe and Secure: The Importance of Choosing the Right Storage</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
              <a className='NeedsUrbanFont NeedToBeYelow' href="X">Read more →</a>
            </div>
          </div>
          <div className='Latest-card'>
            <img className='topimg' src="src/img/Latest.png" alt="" />
            <div className='cardbottom'>
              <div className='datum'>
                <img src="src/img/whitecalender.png" alt="" />
                <p className='h4'>July 12, 2025</p>
              </div>
              <h6>Storage Trends 2024: What’s New in the World of Storage</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
              <a className='NeedsUrbanFont NeedToBeYelow' href="X">Read more →</a>
            </div>
          </div>
          <div className='Latest-card'>
            <img className='topimg' src="src/img/Latest.png" alt="" />
            <div className='cardbottom'>
              <div className='datum'>
                <img src="src/img/whitecalender.png" alt="" />
                <p className='h4'>April 8, 2025</p>
              </div>
              <h6>Free Up Your Space, Free Up Your Life: The Power of Decluttering</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
              <a className='NeedsUrbanFont NeedToBeYelow' href="X">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest