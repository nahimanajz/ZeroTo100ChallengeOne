document.addEventListener("DOMContentLoaded", function(event) {
  /** 
    
      @params {String} name of tag to be created
      @return {HtmlElement} created tag
  */

 const newTag=(tagName)=> document.createElement(tagName);
 
 /** 
      @params {String} name CSS class to be retrieved
      @return {HtmlElement} retreived tag with child appended to it
  */

 const getTag=(parentElementClass,childTag)=> document.getElementsByClassName(parentElementClass)[0].appendChild(childTag)
 
 /** 
    @params {String} type of data to retrieve data [it might be user or posts]
    @return {HtmlEleme} all posts of chosen user
 */

const getUserPosts = (id) =>{
 const ul = newTag('ul')
 const closeBtn = newTag('button')
 closeBtn.innerText = 'X'
 closeBtn.addEventListener('click',()=>document.querySelector('ul').style.display='none')
ul.appendChild(closeBtn)

 fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).
 then(posts => posts.json()).
 then(posts => posts.forEach(({title})=>{

   const li = newTag('li')
   getTag('posts', ul)
   li.innerHTML= title
   ul.appendChild(li)
 }))
}


function getData() {
fetch('https://jsonplaceholder.typicode.com/users',).
then(data => data.json()).
then(data => {
   console.log(data)
    data.forEach(({name, email, id})=>{
   var div = newTag('div')
     getTag('user', div);

     let listName = newTag('h2')
     let listEmail = newTag('p')
     let userPostBtn = newTag('button')
     userPostBtn.innerHTML = 'Get User’s Posts'   
     userPostBtn.addEventListener('click', function(e) {
         const list = document.querySelector('ul')
         if(list){
             list.parentNode.removeChild(list)
         }
         getUserPosts(id)
     })
    
     div.appendChild(listName)
     div.appendChild(listEmail)
     div.appendChild(userPostBtn)
     listEmail.innerHTML = email
     listName.innerHTML=name
    
 })}).catch(e => {
 console.log(e)
})
}

getData()

})