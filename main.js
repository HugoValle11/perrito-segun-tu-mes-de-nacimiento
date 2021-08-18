

const mes = document.getElementById("mes");

console.log(mes);

mes.addEventListener('change', () => {


   switch (mes.value){
      case 'ene':
<<<<<<< HEAD
         document.querySelector(".imagen").setAttribute("src", "./imga/ene.JPG");
         break;
      case 'feb':
         document.querySelector(".imagen").setAttribute("src","./imga/feb.JPG");
=======
         document.querySelector(".imagen").setAttribute("src", "ene.jpg");
         break;
      case 'feb':
         document.querySelector(".imagen").setAttribute("src", "/feb.jpg");
>>>>>>> d1bff31100ecbc044f085493095575ed70aeeb7c
         break;
      case 'mar':
         document.querySelector(".imagen").setAttribute("src", "./imga/mar.JPG");
         break;
      case 'abr':
         document.querySelector(".imagen").setAttribute("src", "./imga/abr.JPG");
         break;
      case 'may':
         document.querySelector(".imagen").setAttribute("src", "./imga/mayo.JPG");
         break;
      case 'jun':
         document.querySelector(".imagen").setAttribute("src", "./imga/jun.JPG");
         break;
      case 'jul':
         document.querySelector(".imagen").setAttribute("src", "./imga/jul.JPG");
         break;
      case 'ago':
         document.querySelector(".imagen").setAttribute("src", "./imga/ago.JPG");
         break;
      case 'sep':
         document.querySelector(".imagen").setAttribute("src", "./imga/sep.JPG");
         break;
      case 'oct':
         document.querySelector(".imagen").setAttribute("src", "./imga/oct.JPG");
         break;
      case 'nov':
         document.querySelector(".imagen").setAttribute("src", "./imga/nov.JPG");
         break;
      case 'dec':
         document.querySelector(".imagen").setAttribute("src", "./imga/dec.JPG");
         break;
   }
}
)

