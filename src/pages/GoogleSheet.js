import React ,{ useState } from 'react'
import GoogleSpreadsheets from "../images/GoogleSpreadsheets.png"

export default function GoogleSheet() {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }
  return (
    <div className=" box-border flex flex-col items-start p-[16px] gap-[12px]  w-[354px] h-auto rounded-md bg-white border border-[#DBDBDB]">
      <div className="flex items-center relative w-full">
        <div className="cursor-pointer flex flex-row justify-center items-center p-3 bg-opacity-10 bg-[#8ed1b1] rounded-[5px] flex-none">
          <img className="w-4 h-4" src={GoogleSpreadsheets}></img>
        </div>
        <div className="font-[600px] ml-2 flex-none order-1 flex-grow-0 font-[600px] text-base leading-[16px] text-black">
          <p>Export to Google Sheets</p>
        </div>
        <div className="absolute right-0 gap-[10px] cursor-pointer hover:opacity-80 px-2 py-1 flex items-center justify-center bg-[#F0F0F0] rounded">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3333 4.83334V13.1667C12.3333 13.9 11.7333 14.5 11 14.5H5L4.99333 14.4993C4.25333 14.4927 3.66 13.8993 3.66 13.1593V4.82001" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.66666 4.83336V3.50003C5.65999 2.94669 6.11333 2.49336 6.65999 2.49336H9.32666H9.31999C9.86666 2.48669 10.32 2.94003 10.32 3.49336V4.82669" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 4.83337H2.66666" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className='w-full'>
        <p className='font-[600px] text-[11px] leading-[13px] text-[#262626]'>Google Account</p>
        <div className='w-full mt-2'>
          <button type="button" className=" hover:bg-gray-50 inline-flex border border-[#F0F0F0] w-full justify-between rounded-[5px] gap-[10px] bg-white pr-2 py-2 pl-[10px] text-[11px] font-[500px] leading[13px] text-[#262626]" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Account Name
              <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66666 8.83333L10 12.1667L13.3333 8.83333" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
        </div>
      </div>
      <div className='w-full'>
        <p className='font-[600px] text-[11px] leading-[13px] text-[#262626]'>File</p>
        <div className='w-full mt-2'>
          <button type="button" className=" inline-flex border border-[#F0F0F0] w-full justify-between rounded-[5px] items-center gap-[10px] bg-white px-2 py-1 text-[11px] font-[500px] leading[13px] text-[#262626]" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <div className='flex items-center'>
              <img className="w-5 h-5" src={GoogleSpreadsheets}></img>
              <p className='ml-2'>sheetname</p>
            </div>
            <div className='flex items-center'>
            <div className="relative inline-block mr-3 ">
              <button onClick={toggleOptions} className="hover:opacity-80 bg-[#F5F5F5] text-[#848484] font-semibold py-2 px-4 rounded-[24px] inline-flex items-center">
                <span className="mr-3">Tab 1</span>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.33334 1.16666L4 3.83333L6.66667 1.16666" stroke="#848484" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              {showOptions && (
              <div className="absolute z-50 left-0 mt-2 w-[170px] h-[132px] rounded-md shadow-lg bg-white">
                <div className="p-1 relative">
                <div className='absolute top-0 pl-2 pt-[14px]'>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 11C9.1495 11 11.5 8.6495 11.5 5.75C11.5 2.85051 9.1495 0.5 6.25 0.5C3.35051 0.5 1 2.85051 1 5.75C1 8.6495 3.35051 11 6.25 11Z" stroke="#848484" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.9621 9.46252L12.9996 12.5001" stroke="#848484" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <input className=" pl-6 border rounded-md w-full py-2 px-3" type="text" placeholder="Search..."></input>
                </div>
                <div className="flex flex-col text-left">
                  <div className='flex items-center justify-between pr-1 pl-3 py-[6px] hover:bg-gray-100 rounded-md'>
                    <p className="">Tab 1</p>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3333 5.5L6.375 11.5L3.66667 8.77273" stroke="#2483F3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p className="hover:bg-gray-100 rounded-md pr-1 pl-3 py-[6px]">Tab 2</p>
                  <p className="hover:bg-gray-100 rounded-md pr-1 pl-3 py-[6px]">Tab 3</p>
                </div>
              </div>
              )}
            </div>
              <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.833336 1.33334L9.16667 9.66667" stroke="#848484" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.16667 1.33334L0.833336 9.66667" stroke="#848484" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <button className=' hover:bg-blue-700 text-white w-full h-8 py-[10px] px-3 gap-[10px] bg-[#2483F3] rounded-[5px] flex items-center justify-center'>
        <p className=' font-[600px] text-[11px] leading-[13px]'>Export</p>
      </button>
      <p className=' w-full font-[500px] text-[10px] leading-3 text-[#848484] text-center'>Last export 14h ago</p>
    </div>
  )
}
