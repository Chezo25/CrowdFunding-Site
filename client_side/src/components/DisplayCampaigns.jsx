import React from 'react'
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';


const DisplayCampaigns = (title, isloading, campaigns) => {
    const navigate = useNavigate();
  return (
    <div>
    <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
    {title}</h1>
    </div>
  )
}

export default DisplayCampaigns