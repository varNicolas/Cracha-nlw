const linksSocialMedia = {
  gitHub: 'varNicolas',
  youtube: 'channel/UCLBSnt65RqnywFBhU5d3YYg',
  instagram: 'dev.dhill',
  facebook: 'nicolas.oliveira.581730',
  twitter: 'Nicolas98037618'
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.gitHub}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLinkProfile.href = data.html_url;
    myPicture.src = data.avatar_url;
    userNameGitHub.textContent = data.login;
  })
}
getGithubProfileInfos()





// var content = data;
// var text = document.getElementById('text');
// var speed = 50;
// var cont = 0;
// function typeWriter (){
//   if(cont < content.length){
//   text.textContent += content.charAt(cont);
//   cont++;
//   setTimeout(typeWriter, speed);
//   } else{
//     text.textContent = '';
//   }
// }
// typeWriter()