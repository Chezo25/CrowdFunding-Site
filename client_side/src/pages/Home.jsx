import React, {useState, useEffect} from 'react'

import { useStateContext } from '../context'

const Home = () => {
  // this is use the fecth from the smart contract
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  return (
    <div>Home</div>
  )
}

export default Home