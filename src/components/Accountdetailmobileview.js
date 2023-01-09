import React from 'react'

import manimg from '../images/MaskGroup2.png';

import mastercard from '../images/mastercard.png';

import activity from '../images/activities.svg';

const Accountdetailmobileview = () => {
  return (
    
    <section className='px-3 mt-5'>
        <div className="tabs my-0 mx-auto  w-full">
       <Tabs>
         <Tab label="Profile">
           <div>
           <div className='px-4 py-4 bg-gray-100'>
    <div className='flex mb-4'>
                    <div className='flex-grow'>
                        <h6 className='font-bold'>My Family</h6>
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
            <h2 className="text-xs">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-3 text-xs font-light text-gray-900  bg-white rounded border-white">ADMIN</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" className=" w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" src={manimg} />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            <li className='mb-2'>
            <div className="h-full flex items-center bg-slate-200 border-slate-300 border p-2 rounded-lg">
            <img alt="team" src={manimg} className="w-8 h-8  object-cover object-center flex-shrink-0 rounded-full mr-4" />
            <div className="flex-grow">
            <h2 className="font-bold text-sm">john Smith</h2>
            </div>
            <div className="flex-grow text-right">
            <button type="button" class="py-1 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Member</button>
            </div>
            </div>
            </li>
            
          </ul>
      </div>
    </div>
           </div>
         </Tab>
         <Tab label="Wallet">
           <div className='w-full bg-gray-200 rounded mb-3'>
           <div className='flex items-center px-2'>
       <img className='h-16 mr-4' src={mastercard}/>
       <div className='flex-grow'>
      <h2 className='text-sm font-bold'>**** **** **** 5967</h2>
      <p className='text-xs'>Expires 09/27</p>
    </div>
    <div className='flex-grow text-right'>
    <button type="button" class="rounded px-5 py-1 bg-green-700 text-sm text-white">Edit</button>
    </div>
    </div>
           </div>
           <div className='w-full bg-gray-200 rounded mb-3'>
           <div className='flex items-center px-2'>
       <img className='h-16 mr-4' src={mastercard}/>
       <div className='flex-grow'>
      <h2 className='text-sm font-bold'>**** **** **** 5967</h2>
      <p className='text-xs'>Expires 09/27</p>
    </div>
    <div className='flex-grow text-right'>
    <button type="button" class="rounded px-5 py-1 bg-green-700 text-sm text-white">Edit</button>
    </div>
    </div>
           </div>
           <div className='w-full bg-gray-200 rounded mb-3'>
           <div className='flex items-center px-2'>
       <img className='h-16 mr-4' src={mastercard}/>
       <div className='flex-grow'>
      <h2 className='text-sm font-bold'>**** **** **** 5967</h2>
      <p className='text-xs'>Expires 09/27</p>
    </div>
    <div className='flex-grow text-right'>
    <button type="button" class="rounded px-5 py-1 bg-green-700 text-sm text-white">Edit</button>
    </div>
    </div>
           </div>
         </Tab>
         <Tab label="Activities">
           <div>
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
         </Tab>
         <Tab label="Invitations">
           <div>
           Invitations
           </div>
         </Tab>
        
       </Tabs>
      </div>
    </section>
  )
}


class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content  px-5">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className="tab-buttons mb-5">
      {buttons.map(button =>{
         return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
   
  

export default Accountdetailmobileview