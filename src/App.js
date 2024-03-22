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

   async function  postt(){

    console.log("athmikha");
    const data = {
      name: 'Athmikha',
      description: 'athmikha',
      public: true
    };
    
    const config = {
      headers: {
        Authorization: '8126e0fe71084696abab461fac70edfd',
        'Content-Type': 'application/json'
      }
    };
    
    
    try {
      const response =  await axios.post('https://api.spotify.com/v1/users/31fydzi2soazdnsivavpknkpijmq/playlists', data, config)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
   }
  return (
    <div className="App">
         <button  onClick={postt}>athmikha</button>
    </div>
  );
}

export default App;
