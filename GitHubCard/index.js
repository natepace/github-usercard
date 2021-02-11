/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios
// .get(`${gitSite}${myName}`)
//   .then((response) => {
//     console.log(response.data)
  
//   })
//   .catch((err) => {
//     console.log(err, "you bad");
//   })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "natepace",
  "SpicyLunchBox",
  "AD9018",
  "codyethanjordan",
  "Gavin-Rilee",
  "bukit3point0",
];


function cardMaker(cardObj){
  const div = document.createElement("div");
  const img = document.createElement("img");
  const divInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  div.classList.add("card");
  name.classList.add("name");
  divInfo.classList.add("card-info");
  userName.classList.add("username");

  div.appendChild(img);
  div.appendChild(divInfo);
  divInfo.appendChild(name);
  divInfo.appendChild(userName);
  divInfo.appendChild(location);
  divInfo.appendChild(profile);
  profile.appendChild(link);
  divInfo.appendChild(followers);
  divInfo.appendChild(following);
  divInfo.appendChild(bio);
  
  img.setAttribute('src', cardObj["avatar_url"] )
  name.textContent = cardObj["name"]
  userName.textContent = cardObj["login"]
  location.textContent = cardObj["location"]
  link.setAttribute('href', cardObj["html_url"])
  link.textContent = cardObj["html_url"];
  followers.textContent = cardObj["followers"];
  following.textContent = cardObj["following"];
  bio.textContent = cardObj["bio"];

  return div;
}



const gitSite = "https://api.github.com/users/"
const myName = "natepace"
followersArray.forEach((el) => {


axios
.get(`${gitSite}${el}`)
  .then((response) => {
    console.log(response.data)
    const cards = document.querySelector(".cards")
    
    cards.appendChild(cardMaker(response.data))
  })
  .catch((err) => {
    console.log(err, "you bad");
  })

})  
// const card = document.querySelector(".card");
// card.appendChild(cardMaker(???????));



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
"https://avatars.githubusercontent.com/u/77354623?v=4"
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
