// GET /users/breannaparker1991
// curl -i -u breannaparker1991:$token https://api.github.com/users/breannaparker1991

// fetch("https://api.github.com/users/breannaparker1991")
//   .then(response => response.json() )
//   .then(coderData => console.log(coderData) )
//   .catch(err => console.log(err) )


async function getCoderData() {
  var response = await fetch("https://api.github.com/users/breannaparker1991");
  var coderData = await response.json();
  var imgprofile = document.createElement('img')
  imgprofile.src = coderData.avatar_url
  var imgdiv = document.getElementById('profilepic')
  imgdiv.appendChild(imgprofile)
  document.getElementById('followers').innerHTML = coderData.followers
  console.log(coderData);
}
        
// console.log(getCoderData());
    