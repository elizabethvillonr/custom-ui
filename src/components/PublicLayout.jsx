import { useSelector } from "react-redux";

const PublicLayout = () => {
  const nfts = useSelector(state => state.nfts);
  return (
    <div> 
      <h1> PublicLayout </h1> 
      <h1> Greetings User! </h1>
      <p> {JSON.stringify(nfts)} </p> 
      </div>  
  )
}

export default PublicLayout;