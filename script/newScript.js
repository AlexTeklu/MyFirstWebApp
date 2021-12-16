const URL = "https://api.sr.se/api/v2/channels?format=json";
 
const channelCards = document.getElementById("channel-container")

const fetchChannelData = () => {
  fetch(URL)
    .then(res => res.json())
    .then(channel => displayChannel(channel))

    .catch((error) => {
        console.log(error, "Ouch you have got an error");
      });
};

fetchChannelData()

const displayChannel = (channel) => {
  let output = ""

  channel.channels.forEach(eachChannel => {
    //  console.log(eachChannel)

    output += `
      <div class="channel-card">
        <img class= "Img" src=${!eachChannel.image ? "../asset/pic.png" : eachChannel.image}
        <p>${eachChannel.name}</p>
        <p class="card-Info"  #${eachChannel.color};>${eachChannel.tagline}</p>
        <a href ="link" src =${eachChannel.liveaudio.url}>
          <audio class="player" controls> 
            <source src=${eachChannel.liveaudio.url}>
          </audio>
      </div>
    `

    channelCards.innerHTML = output
  });
}

// <a href="" targer="default" ></a>  MAkes the link open on a new page or tab

// audio