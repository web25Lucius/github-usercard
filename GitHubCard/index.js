/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = [];
axios.get('https://api.github.com/users/web25Lucius')
.then(response => { 
  console.log(response.data); 
  card.appendChild(myGit(response.data));
  axios.get('response.data.followers_url')
    .then(response => {
      let followersArrays = response.data;
      followersArrays.forEach( follower => followersArray.push(follower.login));
    }) 
    followersArray.forEach( item => {
      axios.get('https://api.github.com/users/${item}')
        .then( response => {
          console.log(response.data);
         card.appendChild(myGit(response.data));
        })
    })
})
.catch(error => {
    console.log("ERROR .get did not work ERROR", error);
  
  }); 

  axios.get('https://api.github.com/users/web25Lucius/followers')
  .then( response => {
    // Handles Success
    console.log(response);
    response.data.forEach( element => {
      followersArray.push(element);
    })
    followersArray.forEach( element => {
      card.appendChild(myGit(element));
    })
  })
  .catch( error => {
    console.log(error);
  })

  console.log(followersArray);
  //response.data <so I don't have to keep typing data.data
/* .then(response => {
    console.log(response);
    response.data.message.forEach(item => {
      const newDog = DogCard(item);
      entryPoint.appendChild(newDog);
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



const card = document.querySelector('.cards'); 

function myGit (obj){
 
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3Name = document.createElement('h3');
  const pUser = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const aProfile = document.createElement('a');
  const follower = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // Class add
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3Name.classList.add('name');
  pUser.classList.add('username');
  // Append Elements to cards
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(pUser);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(aProfile);
  cardInfo.appendChild(follower);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  img.src = `${obj.avatar_url}`;
  img.textContent = `${obj.image}`;
  h3Name.textContent = `${obj.name}`;
  if (obj.name === undefined) {
    h3Name.remove();
  }
  pUser.textContent = `${obj.login}`;
  userLocation.textContent = `${obj.location}`;
  aProfile.textContent = `Profile: ${obj.html_url}`;
  aProfile.href = `${obj.html_url}`;
  follower.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Follow: ${obj.following}`;
  bio.textContent = `${obj.bio}`;
  return card;

  // const divCard = document.createElement= ('div');
  // divCard.classList.add('card'); 
  
  // const image = document.createElement=('img'); 
  // divCard.appendChild(image); 
  // image.setAtrribute=('src', object.avatar_url); //  {data.avatar_url} 
  
  // const cInfoCard = document.createElement('div'); 
  // cInfoCard.classList.add('card-info'); 
  // divCard.appendChild(cInfoCard); 

  // const headerName = document.createElement('h3'); 
  // headerName.classList.add('name'); 
  // headerName.textContent=(object.name); // {data.name}
  // divCard.appendChild(headerName); 

  // const pUser = document.createElement('p'); 
  // pUser.classList.add('userName');
  // pUser.textContent=(object.login); //{data.login} 
  // divCard.appendChild(pUser); 

  // const pLocation = document.createElement('p');
  // pLocation.textContent=`Location: ${object.location}`; //{data.location}
  // divCard.appendChild(pLocation);

  // const pProfile = document.createElement('p'); 
  // pProfile.textContent=('Profile: '); 
  // divCard.appendChild(pProfile); 
  
  // const aTag = document.createElement('a'); 
  // aTag.setAttribute='href', `${object.html_url}`; // {data.html_url}
  // pProfile.appendChild(aTag); 

  // const pFollower = document.createElement('p');
  // pFollower.textContent=`Followers: ${object.followers}`;//{data.followers} 
  // divCard.appendChild(pFollower); 

  // const pFllwing  = document.createElement('p');
  // pFllwing.textContent= `Following: ${object.following}`; //{data.following}
  // divCard.appendChild(pFllwing); 

  // const pBio  = document.createElement('p');
  // pBio.textContent=`Bio: ${object.bio}`; //{data.bio}
  // divCard.appendChild(pBio); 

  // return divCard; 
}; 




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

*<div class="card">
*  <img src={image url of user} />
*  <div class="card-info">
*    <h3 class="name">{users name}</h3>
*    <p class="username">{users user name}</p>
*    <p>Location: {users location}</p>
*    <p>Profile:  
*      <a href={address to users github page}>{address to users github page}</a>
*   </p>
*   <p>Followers: {users followers count}</p>
*    <p>Following: {users following count}</p>
*    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
followersArray.forEach(item =>{
  let followerCards = myGit(item);
  card.appendChild(followerCards);
})