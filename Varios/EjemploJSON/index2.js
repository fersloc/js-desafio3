 localStorage.clear();
 
 let usuario = {
     username: 'Cristian',
     edad: 25,
     lenguajes: ['Javascript', 'Python', 'Java']
 }




 
 localStorage.setItem('asdf', JSON.stringify(usuario))

 
 let users = console.log(localStorage.getItem('asdf'))
 
 
 console.log(JSON.parse(localStorage.getItem('asdf')))