import {links} from 'links.js';
const linksContainer=document.querySelector('.linkcontainer');
function addLink(name,link,image){
  return `<ul class="linkcontainer">
        <a href="${link}">
          <li><span>${name}</span><span><img src="${image}" alt="${name}" class="icons"/></span></li></a>`
}
let allLinks="";
links.forEach((ele)=>{
  let link=ele.link;
  let image=ele.image;
  let name=ele.name
  allLinks+=addLink(name,link,image);
});
linksContainer.innerHTML=allLinks;
