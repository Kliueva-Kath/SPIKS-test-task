// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js
// import noUiSlider from 'nouislider';

document.addEventListener('DOMContentLoaded', function () {
  const typeLabels = document.querySelectorAll('.type__label');
  typeLabels.forEach((label) => {
    label.addEventListener('click', () => {
      console.log('click');
      const checkbox = label.querySelector('.type__checkbox');
      if (checkbox.checked) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
      updateCheckboxes();
    });
  });

  function updateCheckboxes() {
    document.querySelectorAll('.type__checkbox').forEach((checkbox) => {
      const label = checkbox.parentElement;
      if (checkbox.checked) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  }
  updateCheckboxes();

  const radioButtons = document.querySelectorAll('.range__item');
  const radioColumns = document.querySelectorAll('.range__item--column');
  radioButtons.forEach((radio) => {
    radio.addEventListener('change', function () {
      radioColumns.forEach((r) =>
        r.nextSibling.classList.remove('range__item-column--selected')
      );
      if (radio.checked) {
        radio.nextSibling.classList.add('range__item-column--selected');
        console.log('Selected value:', radio.value);
      }
    });
  });

  const sliderInputs = document.querySelectorAll('.range-slider__input');

  function adjustInputWidth(input) {
    // Add a temporary span element to measure text width
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontSize = '14px';
    span.style.whiteSpace = 'pre';
    var value = input.value.replace(/[^0-9]/g, '');
    span.textContent = value + ' ';
    input.value = value;
    document.body.appendChild(span);

    const width = span.offsetWidth;
    if (value === '') {
      if (input.classList.contains('range-slider__input--wide')) {
        input.style.width = '45px';
      } else {
        input.style.width = '36px';
      }

      input.nextSibling.style.display = 'none';
    } else {
      input.style.width = width + 'px';
      input.nextSibling.style.display = 'block';
    }

    // Remove the span from body
    document.body.removeChild(span);
  }

  // Call adjustInputWidth for each input initially and on input change
  sliderInputs.forEach(function (input) {
    adjustInputWidth(input);
    input.addEventListener('input', function () {
      adjustInputWidth(input);
    });
  });

  //   var stepsSlider = document.getElementById('slider-price');
  //   var input0 = document.getElementById('price-from');
  //   var input1 = document.getElementById('price-to');
  //   var inputs = [input0, input1];

  //   noUiSlider.create(stepsSlider, {
  //     start: [20, 80],
  //     connect: true,
  //     tooltips: [true, wNumb({ decimals: 1 })],
  //     range: {
  //       min: [0],
  //       '10%': [10, 10],
  //       '50%': [80, 50],
  //       '80%': 150,
  //       max: 200,
  //     },
  //   });

  //   stepsSlider.noUiSlider.on('update', function (values, handle) {
  //     inputs[handle].value = values[handle];
  //   });

  //   // Listen to keydown events on the input field.
  //   inputs.forEach(function (input, handle) {
  //     input.addEventListener('change', function () {
  //       stepsSlider.noUiSlider.setHandle(handle, this.value);
  //     });

  //     input.addEventListener('keydown', function (e) {
  //       var values = stepsSlider.noUiSlider.get();
  //       var value = Number(values[handle]);

  //       // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
  //       var steps = stepsSlider.noUiSlider.steps();

  //       // [down, up]
  //       var step = steps[handle];

  //       var position;

  //       // 13 is enter,
  //       // 38 is key up,
  //       // 40 is key down.
  //       switch (e.which) {
  //         case 13:
  //           stepsSlider.noUiSlider.setHandle(handle, this.value);
  //           break;

  //         case 38:
  //           // Get step to go increase slider value (up)
  //           position = step[1];

  //           // false = no step is set
  //           if (position === false) {
  //             position = 1;
  //           }

  //           // null = edge of slider
  //           if (position !== null) {
  //             stepsSlider.noUiSlider.setHandle(handle, value + position);
  //           }

  //           break;

  //         case 40:
  //           position = step[0];

  //           if (position === false) {
  //             position = 1;
  //           }

  //           if (position !== null) {
  //             stepsSlider.noUiSlider.setHandle(handle, value - position);
  //           }

  //           break;
  //       }
  //     });
  //   });
});
