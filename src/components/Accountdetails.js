import React, { useState } from 'react'
import manimg from '../images/MaskGroup2.png';
import profileimg from '../images/profileimg.png';
import activity from '../images/activities.svg';
import uploadimg from '../images/uploadimg.svg';
import mastercard from '../images/mastercard.png';
import admin from '../images/admin.svg';



const Accountdetails = () => {
  const[date,setDate]=useState();  
  return (
    <section className='px-3 mt-5'>
<div className="grid sm:grid-cols-1 md:grid-cols-12 gap-4">
<div className='sm:col-span-8 md:col-span-9'>
 <div className='profile_detail p-4 bg-gray-100'>
<div className='flex flex-row flex-wrap'>
    <div className='w-full md:w-1/4'>
    <div className="h-full flex items-center border-gray-200 p-4 border-r-2">
        <div className='relative'>
        <img alt="team" src={profileimg} class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />          
        <span className="absolute top-14 right-4 p-1 cursor-pointer rounded-full bg-white" aria-hidden="true">
          <img src={uploadimg}/>
        </span>
        </div>
          <div className="flex-grow">
            <h1 className="text-gray-900 title-font font-bold">John Smith</h1>
            <p className="text-gray-500 text-xs"><i className="fa fa-map-marker" aria-hidden="true"></i> main st CA 123</p>
          </div>
        </div>
    </div>
    <div className='w-full md:w-1/4'>
      <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>First Name</label>
         <input type="text" className='w-9/12'/>
      </div>
      <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>Last Name</label>
         <input type="text" className='w-9/12'/>
      </div>
      <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>Last Name</label>
         <input type="email" className='border w-9/12 text-xs py-1 px-1' placeholder='johnsmith@yahoo.com'/>
      </div>
    </div>
    <div className='w-full md:w-1/3'>
    <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>Phone Number</label>
         <input className='w-9/12' type="text" />
      </div>
      <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>Graduation Year</label>
         <input className='w-9/12' type="text"/>
      </div>
      <div className='p-2 flex'>
         <label for="" className='text-xs w-1/3'>Date Of Birth</label>
         <input className='w-9/12' type="date" onChange={e=>setDate(e.target.value)}/>
      </div>
    </div>
    <div className='w-full md:w-1/6'>
        <div className='px-2 mt-2'>
            <button className='w-full mb-2 rounded px-3 py-1 bg-green-700 text-sm text-white'>Save Changes</button>
            <button className='w-full mb-2  text-white bg-slate-900 border-0 py-1 px-3 focus:outline-none rounded text-sm'>Save Changes</button>
            <button className='w-full rounded px-3 py-1 bg-red-600 text-sm text-white'>Leave Family</button>
        </div>
    </div>
</div>
 </div>

 <div className='wrapper mt-4' >
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-7'>
<div className='bankAccount bg-gray-100 px-4 pb-9 pt-3'>
<h1 className='pb-3 font-bold text-lg'>Bank Account</h1>
<div className='flex flex-wrap gap-4'>
  <div className='w-full md:w-60 bg-white'>
    <div className='flex items-center px-2'>
       <img className='h-16 mr-4' src={mastercard}/>
       <div className='flex-grow'>
      <h2 className='text-sm font-bold'>**** **** **** 5967</h2>
      <p className='text-xs'>Expires 09/27</p>
    </div>
    </div>
  </div>
  <div className='w-full md:w-60 bg-white'>
    <div className='flex items-center px-2'>
       <img className='h-16 mr-4' src={mastercard}/>
       <div className='flex-grow'>
      <h2 className='text-sm font-bold'>**** **** **** 5967</h2>
      <p className='text-xs'>Expires 09/27</p>
    </div>
    </div>
  </div>
</div>
</div>
<div className='BillingAddress bg-gray-100 px-4 pb-10 pt-3 mt-4'>
<h1 className='pb-3 font-bold text-lg'>Billing Address</h1> 
<div class="flex items-center">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-white accent-orange-600 rounded"/>
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-xs  text-gray-900">Same as Home Address</label>
</div>

<form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="John"/>
      <p className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="smith"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-first-name">
      Address Line 1:
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="John"/>
      <p className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Address Line 2:
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="smith"/>
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/4 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
      Country:
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="India"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      State:
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      City:
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Mumbai"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-2 md:mb-0">
      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      Zip Code:
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="1010010"/>
    </div>
  </div>
  <div className='flex flex-wrap'>
    <div className='w-full'>
    <button className="mb-2 mt-2 md:float-right text-white bg-slate-900 border-0 py-1 px-3 focus:outline-none rounded text-sm">Edit Details</button>
    </div>
 
  </div>
</form>
</div>
        </div>
        <div className='col-span-12 md:col-span-5'>
        <div className='activitiy relative bg-gray-100 p-2'>
            <div className='flex mb-2'>
            <h1 className='text-lg font-bold'>Activities</h1>
            <div className='w-full text-right'>
            <button className='text-white bg-green-900 border-0 py-1 px-3 focus:outline-none rounded text-sm'>View All</button>
            </div>
            </div>
            <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
              <div class="flex relative pb-6">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                
                </div>
                <div class="flex w-10 h-10 rounded-full bg-gray-300 border-2  flexitems-center justify-center relative z-10">
                <img alt="team" src={activity} className="flex m-auto" />
                  </div>
                  <div class="flex-grow pl-4">
                  <h2 class="text-gray-900 text-sm font-medium">Leslie Alexander updated her  <span className='text-orange-500'>Account Type</span></h2>
                  <h6 class="text-gray-500 text-xs">5 October 10:01 AM</h6>
              </div>
              </div>
</div>
        </div>
    </div>
 </div>
</div>
<div className='sm:col-span-12 md:col-span-3'>
    <div className='px-4 py-4 bg-gray-100'>
    <div className='flex mb-4'>
                    <div className='flex-grow'>
                        <h6 className='font-bold'>Family</h6>
                    </div>
                    <div className='flex-grow text-right'>
                        <a href='#'>
                        <span className="fa fa-search mr-3" aria-hidden="true"></span>
                        </a>
                        
                        <button type='button' className='rounded px-3 py-1 bg-green-700 text-sm text-white'>Add New</button>
                    </div>
                 </div>
      <div className='familycont'>
          <ul className='list1 pr-3'>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-orange-500 border-orange-500 text-white border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="text-xs">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-3 text-xs font-medium text-gray-900  bg-white rounded border-white">ADMIN</button>
            <button className='bg-white p-0 h-6 w-6 rounded ml-2'>
              <img className='mx-auto my-0' src={admin} />
            </button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" className=" w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" src={manimg} />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-medium text-sm">John Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-xs font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            
          </ul>
      </div>
    </div>

</div>
    </div>
    </section>
    
  )
}

export default Accountdetails