import React from 'react'

const Alertmessage = () => {
  return (
    <section className='px-3 mt-4'>
<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
  <div>
    <h6  className='font-bold'>My Account</h6>
    </div>
  <div className='hidden md:block md:text-center'>
    <div class="bg-green-100 border border-green-100 text-green-700 px-2 py-2 rounded relative" role="alert">
  <span >Suceess Message here</span>
</div>
  </div>
  <div className='hidden md:block md:text-right'>
    <button className=' text-white bg-slate-900 border-0 py-2 px-8 focus:outline-none rounded text-sm'>View Button</button>
  </div>
</div>
    </section>
    
)
}

export default Alertmessage