import { addNFT } from '../redux/actions';
import { useState } from 'react'; 
import { useDispatch } from "react-redux";

const PrivateLayout = () => {
  
  const [nft, setNft] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nft: ", nft);
    dispatch(addNFT(nft)); 
    setNft('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={nft} onChange={(e) => setNft(e.target.value)} />
      <button type="submit">Add NFT</button>
    </form>
    </div> 
  )
}

export default PrivateLayout;