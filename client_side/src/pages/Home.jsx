import React, {useState, useEffect} from 'react'

import { useStateContext } from '../context'

const Home = () => {
  // this is use the fecth from the smart contract
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  // you to check if the contract is there to make it whole
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);



  return (
    <div>Home</div>
  )
}

export default Home