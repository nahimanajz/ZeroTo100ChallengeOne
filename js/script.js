document.addEventListener("DOMContentLoaded", function(event) {
  // Load data when page loads
})

/**
 * @param{URL} url to fetch users or posts
 */
const getData = async(url) =>{
    return await fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  
}
//todo fetch data 
// append them on list of users
//get html ul to 
const users= document.querySelector(".user")
  

getData().then((response) =>{
    response.forEach(({email, name,id}) =>{  
       const user = document.createElement('li')
       user.innerText = name
       user.classList.add('list-item')
       users.('<li>hello</li>')

        })
    });


