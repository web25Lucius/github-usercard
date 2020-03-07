/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// Step 2: Inspect and study the data coming back, this is YOUR 
//    github info! You will need to understand the structure of this 
//    data in order to use it to build your component function 

//    Skip to Step 3.


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










function  gitCard (object) {
  const divCard = document.createElement('div'), 
        imgHeroNoClass = document.createElement('img'), 
        divCardInfo = document.createElement('div'),
        h3Name = document.createElement('h3'), 
        pUserName = document.createElement('p'),
        pLocationNoClass = document.createElement('p'),
        pProfileNoClass = document.createElement('p'), 
        aChildNoClass = document.createElement('a'),
        pFollowersNoClass = document.createElement('p'), 
        pFollowingNoClass = document.createElement('p'), 
        pBioNoClass = document.createElement('p'); 

  

   divCard.classList.add('card'); 
   divCardInfo.classList.add('card-info'); 
   h3Name.classList.add('name'); 
   pUserName.classList.add('user-name'); 

   imgHeroNoClass.setAttribute("src", `${object.avatar_url}`); 
   h3Name.textContent=object.name; 
   pUserName.textContent=object.login; 
   pLocationNoClass.textContent = object.location; 
   pProfileNoClass.textContent = `Profile: ${object.html_url}`; 
   aChildNoClass.setAttribute("href", `${object.html_url}`); 
   pFollowersNoClass.textContent = `Followers: ${object.followers}`;  
   pFollowingNoClass.textContent = `Following: ${object.following}`; 
   pBioNoClass.textContent = `Bio: ${object.bio}`; 

   divCard.append(imgHeroNoClass);
   divCard.append(divCardInfo);
   divCard.append(h3Name);
   divCard.append(pUserName); 
   divCard.append(pLocationNoClass);
   divCard.append(pProfileNoClass); 
   divCard.append(aChildNoClass); 
   divCard.append(pFollowersNoClass); 
   divCard.append(pFollowingNoClass); 
   divCard.append(pBioNoClass); 


   return divCard; 
  
}
const board = document.querySelector('.cards'); 
axios.get("https://api.github.com/users/web25Lucius")
  .then(response => {
    const newGitCard = gitCard(response.data);
       board.appendChild(newGitCard);
  })
  .catch( error => {
    console.log("yo, Mona-your catch is working.", error);
  })
  axios.get("https://api.github.com/users/web25Lucius/followers")
  .then(response =>{
    response.data.forEach( user => {
       const newFolGitCard = gitCard(user); 
        board.appendChild(newFolGitCard); 
    }) 

      // console.log(response.data); 
    // const newGitFollowersCard = gitCard(response);
  })


 



