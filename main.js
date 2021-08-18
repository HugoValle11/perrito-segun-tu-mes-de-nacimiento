

const mes = document.getElementById("mes");

console.log(mes);

mes.addEventListener('change', () => {


   switch (mes.value){
      case 'ene':
         document.querySelector(".imagen").setAttribute("src", "ene.jpg");
         break;
      case 'feb':
         document.querySelector(".imagen").setAttribute("src", "/feb.jpg");
         break;
      case 'mar':
         document.querySelector(".imagen").setAttribute("src", "./mar.jpg");
         break;
      case 'abr':
         document.querySelector(".imagen").setAttribute("src", "./abr.jpg");
         break;
      case 'may':
         document.querySelector(".imagen").setAttribute("src", "./mayo.jpg");
         break;
      case 'jun':
         document.querySelector(".imagen").setAttribute("src", "./jun.jpg");
         break;
      case 'jul':
         document.querySelector(".imagen").setAttribute("src", "./jul.jpg");
         break;
      case 'ago':
         document.querySelector(".imagen").setAttribute("src", "./ago.jpg");
         break;
      case 'sep':
         document.querySelector(".imagen").setAttribute("src", "./sep.jpg");
         break;
      case 'oct':
         document.querySelector(".imagen").setAttribute("src", "./oct.jpg");
         break;
      case 'nov':
         document.querySelector(".imagen").setAttribute("src", "./nov.jpg");
         break;
      case 'dec':
         document.querySelector(".imagen").setAttribute("src", "./dec.jpg");
         break;
   }
}
)

