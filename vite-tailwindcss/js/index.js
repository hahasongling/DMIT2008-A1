
import { objectTemplate } from "./template"
 

let objectStore = []
 
async function getObjectData(url) {
    const response = await fetch(url) // recieve the response body
    objectStore = [ ... await response.json()] // parsing data in JSON objects
        renderObject(objectStore)
} 

getObjectData('/db/objects.json')
 

// Layout Thrashing
function renderObject (objects){
    // container is in memory
    // return elem is in memory
    const container = document.createElement('div')
    
       objects.forEach((object)=>{
         container.append(objectTemplate(object))
       
       })

       document.querySelector('#cards').append(container)

}
