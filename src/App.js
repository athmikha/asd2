import axios from  'axios';
function App() {

   async function  athmikha(){
    console.log("athmikha");
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: 'nocopyrightsounds',
        playlistLimit: '10',
        artistLimit: '10'
      },
      headers: {
        'X-RapidAPI-Key': '89254aefd5msh3a694bb63329183p1e8451jsnf75b763a1194',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response =  await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
   }
  return (
    <div className="App">
         <button  onClick={athmikha}>athmikha</button>
    </div>
  );
}

export default App;
