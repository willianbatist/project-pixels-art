const paletaDeCores = document.querySelector("#color-palette");
const quadroDePixels = document.querySelector("#pixel-board");

function pegarCores () {
  let pegarCoresTags = document.querySelectorAll('.color');
  pegarCoresTags[0].style.backgroundColor = 'black'
  pegarCoresTags[1].style.backgroundColor = 'red'
  pegarCoresTags[2].style.backgroundColor = 'blue'
  pegarCoresTags[3].style.backgroundColor = 'green'
  
}
pegarCores ();


function selecionarCores(event) {
  const removeSelect = document.getElementsByClassName("selected");
  for (let i = 0; i < removeSelect.length; i += 1) {
    removeSelect[i].classList.remove('selected');
  }
  const SelectEvento = event.target;
  SelectEvento.classList.add('selected');
}
paletaDeCores.addEventListener('click', selecionarCores);

 function pintarPixels () {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click',function(e){
      let classSelected = document.querySelector('.selected');
      e.target.style.backgroundColor = classSelected.style.backgroundColor;
     });
   }
 }
pintarPixels();
