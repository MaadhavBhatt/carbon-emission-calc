const slider = document.querySelector('.slider');
const carsContainer = document.querySelector('.cars-container');
const cars = carsContainer.querySelectorAll('.car');

const data = document.querySelectorAll('.info__text');

document.addEventListener('load', () => {
  calcEmissions(slider.value);
});

slider.addEventListener('input', function () {
  document.querySelector('.max')?.classList.remove('max');
  cars[slider.value - 1].classList.add('max');
  const savings = calcEmissions(slider.value);
  updateData(savings);
});

function calcEmissions(evCount) {
  const gasCount = 100 - evCount;
  const emissions = gasCount + 0.4 * evCount;
  const savings = emissions / 100;
  return savings;
  // console.log(savings);
}

function updateData(savings) {
  data[0].textContent = Math.floor(100 * savings) + '%';
  data[1].textContent = slider.value + '%';
  data[2].textContent = 100 - slider.value + '%';
}
