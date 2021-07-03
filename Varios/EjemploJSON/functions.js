function getLocalStorage(key) {
    
    return JSON.parse(localStorage.getItem(key))

}

function saveInLocalStorage(key,item) {
    
   let stringifiedItem = JSON.stringify(item)
   localStorage.setItem(key, stringifiedItem)

}