let isOn = false;

function toggleLights() {
 isOn = !isOn;
 const lamps = document
  .querySelectorAll('.lamp');
 lamps.forEach(lamp => {
  if (isOn) {
   lamp.classList.add('on');
  } else {
   lamp.classList.remove('on');
  }
 });

 const switchElement = document
  .querySelector('.switch');
 if (isOn) {
  switchElement.classList.add('on');
 } else {
  switchElement.classList.remove('on');
 }
}
