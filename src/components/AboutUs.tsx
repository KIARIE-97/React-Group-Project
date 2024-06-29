// import React from 'react'
import './About.scss'


function AboutUs() {
  return (
    <>
    <div className='container'>

<div className="card bg-neutral text-neutral-content w-100">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Customer Support at Primus: We’re Here to Serve You! 🙌📞!</h2>
    <p>Have a question, concern, or feedback? Our friendly support team is just a call or message away. Whether it’s about reservations, menu items, or special requests, we’ve got you covered. 🍽️✨
    Your satisfaction is our priority!" 🌟👩‍💼</p>
  </div>
</div>
 </div>

 <div className="card  lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?cs=srgb&dl=pexels-mat-brown-150387-1395964.jpg&fm=jpg&_gl=1*1ogspy0*_ga*MTI2MDM3NzY3MC4xNzE5NjczNzM3*_ga_8JE65Q40S6*MTcxOTY3MzczNi4xLjEuMTcxOTY3Mzk0OS4wLjAuMA.."
      alt="Album" />
  </figure>
  <div className="card-body party_class">
    <h2 className="card-title " >Host Your Next Celebration at Primus!</h2>
    <p>
At Primus, we believe in celebrating life’s moments, whether they’re grand milestones or simple joys.<br></br>
 Our inviting ambiance and delectable cuisine make any occasion special. </p>
  </div>
</div>

<div className="card  lg:card-side bg-base-100 shadow-xl">
<div className="card-body party_class">
    <h2 className="card-title " >menus</h2>
    <p>
    Explore our kitchen’s featured items, all made from scratch. </p>
  </div>
  <figure>
    <img 
      src="https://images.pexels.com/photos/4500115/pexels-photo-4500115.jpeg?cs=srgb&dl=pexels-corinna-widmer-2124981-4500115.jpg&fm=jpg&_gl=1*1b5yso8*_ga*MTI2MDM3NzY3MC4xNzE5NjczNzM3*_ga_8JE65Q40S6*MTcxOTY3MzczNi4xLjEuMTcxOTY3Mzk0OS4wLjAuMA.."
      alt="Album" />
  </figure>
</div>

<div className="card bg-base-100 image-full w-100 shadow-xl">
  <figure className='img'>
    <img className='w-100'
      src="https://images.pexels.com/photos/4279102/pexels-photo-4279102.jpeg?cs=srgb&dl=pexels-wildlittlethingsphoto-4279102.jpg&fm=jpg&_gl=1*kz6a09*_ga*MTI2MDM3NzY3MC4xNzE5NjczNzM3*_ga_8JE65Q40S6*MTcxOTY3MzczNi4xLjEuMTcxOTY3Mzk0OS4wLjAuMA.."
      alt="image" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title">Shoes!</h2> */}
    <p>Join Us for Dinner</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">reservation</button>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutUs;