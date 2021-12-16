// const ChannelContainer = document.querySelector('.Channel-container');



// if(navigator.geolocation){
//        navigator.geolocation.getCurrentPosition(position => {
//               console.log(position);
//            long = position.coords.longitude;
//            lat = position.coords.latitude;

//         });

//        };


// here comes the api url
// .then(res => { 
//     return res.json()
// });
// .then((data) => {
//     console.log("data parcel....")
// })

// const fetchPragramData = () => {
// fetch('https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=boolean')

// .then((res) => res.json())
// .then((programData) => {
    
//   buildProgramList(programData);
// })
// .catch((error) => {
//   console.log(error, "There has been an error");
// });
// };

// fetchProgramData();

//  axios.get('https://api.sr.se/api/v2/episodes/index?programid=1603&format=json&indent=true&pagination=false')   
//  .then(res => {
//      console.log(res.data.episodes[0]);
//  });
//   .catch(err => {
//       console.log("error", err)
//   }); 
// const channels = document.querySelector('#channels');
// const button = document.querySelector('button');


// const addNewPrograms = async () =>{
//     const channelList = await getPrograms()
//     console.log(channelList);
//     const newLi = document.createElement('Li');
//     newLi.append(res.data);
//     channels.appendChild(newLi);
// }

// const getPragrams = async () =>{
//     try{
//         const config = {headers: {Accept: 'application/json'}};    
//         const res = await axios.get('https://api.sr.se/api/v2/episodes/index?programid=1603&format=json&indent=true&pagination=false', config) 
//      //    console.log(res.data.episodes);
//          return res.data.episodes [i];
//     }catch (e){
// return "No Channels try again"
//     }
// }
       
    
     
// }
// button.addEventListener('click',);




// const form = document.querySelector('#searchForm');
// form.addEventListener("submit", async function (e){
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const res = axios.get(`https://api.sr.se/api/v2/episodes/index?programid=1603&format=json&indent=true&pagination=false`)
//     console.log(res.data);
// })

// const card = document.getElementById("content");

// async function getRadioData() {
//   const response = await fetch(
//     "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
//   );
//   let radioData = await response.json();
//   return radioData;
// }


// getRadioData()
// .then((radioData) => {
//    console.log(radioData.channels);




//   document.getElementById("image").src = radioData.channels[1].image;
//   const resp = document.getElementById("new-id");
//   document.getElementById("name").textContent = radioData.channels[1].name;
// //   document.getElementById("channel-description").textContent =
// //     radioData.channels[1].tagline;
//   document.getElementById("link").href = radioData.channels[1].liveaudio.url;

//   for (let channel of radioData.channels) {
//     console.log(channel);     
//     const article = document.createElement('article'); 
//     article.id = channel.id;
//     resp.appendChild(article);

//     const name = document.createElement('name');
//     name.id = channel.id;
//     article.appendChild(name);

//     const image = document.createElement('image');
//     image.id = channel.id;
//     article.appendChild(image);

//     const channelInfo = document.createElement('channel-info');
//     channelInfo.id = channel.id;
//     article.appendChild(channelInfo);

//     const link = document.createElement('link');
//     link.id = channel.id;
//     article.appendChild(link);

//     const audioplayName = document.createElement('audioplay-name');
//     audioplayName.id = channel.id;
//     article.appendChild(audioplayName);

//     console.log(audioplayName)

//  }
//  getRadioData();
 
// });
 
