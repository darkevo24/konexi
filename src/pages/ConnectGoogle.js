import React from 'react'
import GoogleSpreadsheets from "../images/GoogleSpreadsheets.png"

export default function ConnectGoogle() {
  const handleClick = () => {
    window.location.href = "/flow";
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
      <div className=" flex flex-col justify-start items-start p-3 gap-3 w-full h-[96px] bg-[#FCFCFC] rounded-lg">
        <div className="flex items-center">
          <div onClick={handleClick} className="flex items-center justify-center p-[10px] bg-[#F5F5F5] rounded-[80px] cursor-pointer">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6658 7.64773C13.6738 7.18925 13.6254 6.73077 13.5233 6.28546H7.13535V8.75968H10.8858C10.7433 9.63713 10.2406 10.4171 9.49587 10.923L9.48243 11.0047L11.5015 12.5382L11.6413 12.5514C12.9237 11.3894 13.6658 9.67929 13.6658 7.64773Z" fill="#4285F4"/>
              <path d="M7.13533 14.1667C8.97159 14.1667 10.5148 13.5738 11.6413 12.5514L9.49585 10.9204C8.79952 11.3789 7.97415 11.6108 7.13802 11.587C5.37434 11.5765 3.815 10.4593 3.26654 8.81506L3.18589 8.82297L1.08615 10.4145L1.05927 10.4883C2.20995 12.7464 4.56241 14.1693 7.13533 14.1667" fill="#34A853"/>
              <path d="M3.26385 8.81764C3.11598 8.39341 3.03801 7.9481 3.03801 7.49753C3.0407 7.04958 3.11598 6.60427 3.25847 6.17741L3.25578 6.09046L1.12916 4.4726L1.05926 4.50421C0.0913916 6.38821 0.0913916 8.60684 1.05926 10.4908L3.26385 8.81764Z" fill="#FBBC05"/>
              <path d="M7.13535 3.41076C8.11128 3.39495 9.05227 3.75067 9.76472 4.40414L11.6843 2.56758C10.453 1.43454 8.82105 0.81533 7.13266 0.833775C4.55974 0.833775 2.20729 2.25402 1.05391 4.50954L3.25312 6.18274C3.80696 4.53852 5.36899 3.4213 7.13535 3.41076" fill="#EB4335"/>
            </svg>
          </div>
          <div onClick={handleClick} className=" ml-2 cursor-pointer">
            <p className="font-[600px] text-[13px]">Connect Google Account</p>
            <p className=" font-[500px] text-[11px] text-[#848484]">Please connect Google Account to use this block</p>
          </div>
        </div>
        <button onClick={handleClick} className="bg-[#2483F3] hover:bg-blue-700 w-[60px] h-6 text-white font-bold  rounded text-[10px]">
          Connect
        </button>
      </div>
    </div>
  )
}
