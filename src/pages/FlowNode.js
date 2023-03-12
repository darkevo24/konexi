import React from 'react'
import GoogleSpreadsheets from "../images/GoogleSpreadsheets.png"

export default function FlowNode() {
    const handleClick = () => {
        window.location.href = "/sheet";
      };
  return (
    <div className=" box-border flex flex-col items-start p-[16px] gap-[12px]  w-[354px] h-auto rounded-md bg-white border border-[#DBDBDB]">
      <div className="flex items-center relative w-full">
        <div className="cursor-pointer flex flex-row justify-center items-center p-3 bg-opacity-10 bg-[#8ed1b1] rounded-[5px] flex-none">
          <img className="w-4 h-4" src={GoogleSpreadsheets}></img>
        </div>
        <div className=" font-[600px] ml-2 flex-none order-1 flex-grow-0 font-[600px] text-base leading-[16px] text-black">
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
      <div onClick={handleClick} className='cursor-pointer hover:opacity-80 flex items-center justify-center py-2 px-3 w-[322px] h-8 bg-[#F5F5F5] rounded-[32px]'>
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33333 10.5C1.33333 11.42 3.42 12.1667 6 12.1667C8.57333 12.1667 10.6667 11.42 10.6667 10.5V2.50001C10.6667 1.57334 8.57333 0.833344 6 0.833344C3.42 0.833344 1.33333 1.57334 1.33333 2.50001V10.5Z" stroke="#848484" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 2.5C10.6667 3.42 8.57333 4.16667 6 4.16667C3.42 4.16667 1.33333 3.42 1.33333 2.5" stroke="#848484" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 7.83334C10.6667 8.75334 8.57333 9.50001 6 9.50001C3.42 9.50001 1.33333 8.75334 1.33333 7.83334" stroke="#848484" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 5.16669C10.6667 6.08669 8.57333 6.83335 6 6.83335C3.42 6.83335 1.33333 6.08669 1.33333 5.16669" stroke="#848484" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className=' ml-2 font-[500px] text-[11px] leading-[13px] text-[#262626]'>Connect Flow Node to Import to Google Sheets</p>
      </div>
    </div>
  )
}
