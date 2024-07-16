// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js

document.addEventListener('DOMContentLoaded', () => {
  /* функционал отметки чекбоксов категории на верхней панели */
  const typeLabels = document.querySelectorAll('.type__label');
  typeLabels.forEach((label) => {
    label.addEventListener('click', () => {
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

  /* авто-регулировка ширины инпутов слайдеров в зависимости от контента,
    валидация вводимых в инпуты значений,
    подставление значка $ или % при наличии значения в инпуте 
  */
  const sliderInputs = document.querySelectorAll('.range-slider__input');
  function adjustInputWidth(input) {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontSize = '14px';
    span.style.whiteSpace = 'pre';
    var value = input.value;
    span.textContent = value + ' ';
    if (
      (input.id === 'thc-to' || input.id === 'cbd-to') &&
      Number(value) > 100
    ) {
      input.value = 100;
    } else if (Number(value) < 0) {
      input.value = 0;
    } else {
      input.value = value;
    }
    document.body.appendChild(span);
    const width = span.offsetWidth;
    if (value === '') {
      if (input.classList.contains('range-slider__input--wide')) {
        input.style.width = '46px';
      } else {
        input.style.width = '36px';
      }
      input.nextSibling.style.display = 'none';
    } else {
      input.style.width = width + 'px';
      input.nextSibling.style.display = 'block';
    }
    document.body.removeChild(span);
  }
  sliderInputs.forEach((input) => {
    adjustInputWidth(input);
    input.addEventListener('input', () => {
      adjustInputWidth(input);
    });
  });

  /* функционал открытия/закрытия выпадающего списка типов сортировки */
  const sortingDropdownBtn = document.getElementById('dropdown-btn');
  const sortingDropdown = document.getElementById('sorting-dropdown');
  sortingDropdownBtn.addEventListener('click', () => {
    sortingDropdownBtn.classList.toggle('active');
    if (sortingDropdownBtn.classList.contains('active')) {
      sortingDropdown.style.display = 'block';
    } else {
      sortingDropdown.style.display = 'none';
    }
  });

  /* функционал аккордеона с фильтрами товаров */
  const accordionItems = document.querySelectorAll('.filters-accordion__item');
  accordionItems.forEach((item) => {
    const header = item.querySelector('.filters-accordion__header');
    header.addEventListener('click', () => {
      const openItem = document.querySelector(
        '.filters-accordion__item.active'
      );
      toggleItem(item);
      if (!document.querySelector('.filters-accordion__item.active')) {
        document
          .querySelector('.filters-accordion__background')
          .classList.add('small');
      } else {
        document
          .querySelector('.filters-accordion__background')
          .classList.remove('small');
      }
    });
  });
  const toggleItem = (item) => {
    const content = item.querySelector('.filters-accordion__content');
    if (item.classList.contains('active')) {
      content.style.display = 'none';
      item.classList.remove('active');
    } else {
      content.style.display = 'flex';
      item.classList.add('active');
    }
  };

  /* функционал добавления и удаления фильтров в панели выбранных фильтров над аккордеоном */
  const selectedFiltersList = document.querySelector('.chosen-filters__list');
  const checkboxes = document.querySelectorAll('.checkbox__input');
  function updateSelectedFilters() {
    selectedFiltersList.innerHTML = '';
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const filter = checkbox.getAttribute('data-filter');
        const listItem = document.createElement('li');
        listItem.classList.add('chosen-filters__filter', 'filter');
        listItem.innerHTML = `
          <span class="filter__text">${filter}</span>
          <a class="filter__cancel-btn" data-filter="${filter}">
            <svg class="filter__cancel-icon">
              <use xlink:href="./assets/icons/default/sprite.svg#cancel-filter"></use>
            </svg>
          </a>`;
        selectedFiltersList.appendChild(listItem);
      }
    });
    document.querySelectorAll('.filter__cancel-btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const filterToRemove = event.currentTarget.getAttribute('data-filter');
        const correspondingCheckbox = Array.from(checkboxes).find(
          (checkbox) => checkbox.getAttribute('data-filter') === filterToRemove
        );
        if (correspondingCheckbox) {
          correspondingCheckbox.checked = false;
          updateSelectedFilters();
        }
      });
    });
  }
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateSelectedFilters);
  });
  updateSelectedFilters();

  /* функционал слайдеров, выполненных с помощью noUiSlider */

  // слайдер цены
  // фейковые данные для max цены
  var maxPrice = 400;
  var priceSlider = document.getElementById('slider-price');
  var priceInput0 = document.getElementById('price-from');
  var priceInput1 = document.getElementById('price-to');
  var priceInputs = [priceInput0, priceInput1];

  noUiSlider.create(priceSlider, {
    start: [0, 234],
    connect: true,
    step: 1,
    tooltips: [
      false,
      {
        to: function (value) {
          return Math.round(value) + ' $';
        },
        from: function (value) {
          return Math.round(value);
        },
      },
    ],
    range: {
      min: 0,
      max: maxPrice,
    },
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return Math.round(value);
      },
    },
  });
  priceSlider.noUiSlider.on('update', function (values, handle) {
    priceInputs[handle].value = values[handle];
    priceInputs.forEach((input) => {
      adjustInputWidth(input);
    });
  });
  priceInputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      priceSlider.noUiSlider.setHandle(handle, this.value);
      adjustInputWidth(input);
    });
  });
  // слайдер содержания THC
  var thcSlider = document.getElementById('slider-thc');
  var thcInput = document.getElementById('thc-to');
  noUiSlider.create(thcSlider, {
    start: 65,
    connect: true,
    tooltips: {
      to: function (value) {
        return Math.round(value) + ' %';
      },
      from: function (value) {
        return Number(value.replace('%', ''));
      },
    },
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    connect: [true, false],
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return Number(value);
      },
    },
  });
  thcSlider.noUiSlider.on('update', function (values, handle) {
    thcInput.value = values[handle];
    adjustInputWidth(thcInput);
  });
  thcInput.addEventListener('change', function () {
    thcSlider.noUiSlider.set(this.value);
    adjustInputWidth(thcInput);
  });
  // слайдер содержания CBD
  var cbdSlider = document.getElementById('slider-cbd');
  var cbdInput = document.getElementById('cbd-to');
  noUiSlider.create(cbdSlider, {
    start: 65,
    connect: true,
    tooltips: {
      to: function (value) {
        return Math.round(value) + ' %';
      },
      from: function (value) {
        return Number(value.replace('%', ''));
      },
    },
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    connect: [true, false],
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return Number(value);
      },
    },
  });
  cbdSlider.noUiSlider.on('update', function (values, handle) {
    cbdInput.value = values[handle];
    adjustInputWidth(cbdInput);
  });
  cbdInput.addEventListener('change', function () {
    cbdSlider.noUiSlider.set(this.value);
    adjustInputWidth(cbdInput);
  });
});
