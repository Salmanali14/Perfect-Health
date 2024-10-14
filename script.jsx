// const obj ={
//     lName:'zahoor',
//     fName:'abbas',
//     address:{
//         city:'sdk',
//         street:'2'
//     }
// }

// localStorage.setItem('obj', JSON.stringify(obj))

// const object22 = JSON.parse(localStorage.getItem('obj'))
// console.log(object22)
// const ul = document.createElement('ul');
// const li = document.createElement('li');
// ul.appendChild(li)
// li.innerText =object22.address.city
// const body = document.querySelector('body')
// body.appendChild(ul)
// li.style.listStyle = "none"

// localStorage.removeItem('obj')

// const assdecarray = [3,4,5,7,9,88,6,1,2,6,7,8]
// function namee(assdecarray) {
//   if (assdecarray.length <= 1) {
//     return assdecarray;
// }
//   const maxnum = [];
// const minnum = [];
// const pivot = assdecarray[assdecarray.length-1]
// for (let i = 0; i < assdecarray.length-1; i++) {
//    if (assdecarray[i]<pivot) {
//     minnum.push(assdecarray[i]) 
//    }  
//    else {
//     maxnum.push(assdecarray[i])
//    }
// }
// return [ ...namee(minnum), pivot, ...namee(maxnum)]
// }
// const assending = namee(assdecarray)
// console.log(assending)


const image =document.querySelector('.imgdogapi')
const btnimg =document.querySelector('.btnforimgdogapi')

btnimg.addEventListener('click', ()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
.then((response)=> response.json())
.then((json)=>{
  image.src = json.message

})

})