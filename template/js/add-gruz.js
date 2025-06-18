$(document).ready(function () {
  // jQuery селекторы для основных элементов интерфейса
  const $body = $("body");
  const $gruz = $("#gruz");
  const $loadGruz = $("#load_gruz");
  const $loadDopGruzWrap = $("#load_dop_gruz_wrap");
  const $loadDopGruz = $("#load_dop_gruz");
  const $zagruzkaGruz = $("#zagruzka_gruz");
  const $razgruzkaGruz = $("#razgruzka_gruz");
  const $proezdGruz = $("#proezd_gruz");
  const $tamojnyaGruz = $("#tamojnya_gruz");

  // Массив конфигурации секций для управления видимостью элементов
  // Каждая секция содержит:
  // id - идентификатор секции
  // btnId - идентификатор кнопки, которая показывает секцию
  // closeId - идентификатор кнопки, которая скрывает секцию
  const sections = [
    {
      id: "quantity",
      btnId: "quantity_btn",
      closeId: "close_quantity",
    },
    {
      id: "dimensions",
      btnId: "dimensions_btn",
      closeId: "close_dimensions",
    },
    {
      id: "loading_time",
      btnId: "loading_time_btn",
      closeId: "close_loading_time",
    },
    {
      id: "date_time",
      btnId: "date_time_btn",
      closeId: "close_date_time",
    },
    {
      id: "num_cars",
      btnId: "num_cars_btn",
      closeId: "close_num_cars",
    },
    {
      id: "crew",
      btnId: "crew_btn",
      closeId: "close_crew",
    },
    {
      id: "adr",
      btnId: "adr_btn",
      closeId: "close_adr",
    },
    {
      id: "trailer_setup",
      btnId: "trailer_setup_btn",
      closeId: "close_trailer_setup",
    },
    {
      id: "tir",
      btnId: "tir_btn",
      closeId: "close_tir",
    },
    {
      id: "belts",
      btnId: "belts_btn",
      closeId: "close_belts",
    },
    {
      id: "capacity",
      btnId: "capacity_btn",
      closeId: "close_capacity",
    },
    {
      id: "predoplata",
      btnId: "predoplata_btn",
      closeId: "close_predoplata",
    },
    {
      id: "predoplata",
      btnId: "oplata_btn",
      closeId: "close_predoplata",
    },
    {
      id: "dogovor",
      btnId: "dogovor_btn",
      closeId: "close_dogovor",
    },
    {
      id: "num_gruz",
      btnId: "num_gruz_btn",
      closeId: "close_num_gruz",
    },
    {
      id: "foto_gruz",
      btnId: "foto_gruz_btn",
      closeId: "close_foto_gruz",
    },
    {
      id: "ptedlojenie",
      btnId: "ptedlojenie_btn",
      closeId: "close_ptedlojenie",
    },
    {
      id: "prodlrnie",
      btnId: "prodlrnie_btn",
      closeId: "close_prodlrnie",
    },
    {
      id: "stavka",
      btnId: "stavka_btn",
      closeId: "close_stavka",
    },
    {
      id: "dop_gruz_quantity",
      btnId: "dop_gruz_quantity_btn",
      closeId: "close_dop_gruz_quantity",
    },
    {
      id: "dop_gruz_dimensions",
      btnId: "dop_gruz_dimensions_btn",
      closeId: "close_dop_gruz_dimensions",
    },
    {
      id: "main_gruz_quantity",
      btnId: "main_gruz_quantity_btn",
      closeId: "close_main_gruz_quantity",
    },
    {
      id: "main_gruz_dimensions",
      btnId: "main_gruz_dimensions_btn",
      closeId: "close_main_gruz_dimensions",
    },
    {
      id: "zagruzka_gruz_quantity",
      btnId: "zagruzka_gruz_quantity_btn",
      closeId: "close_zagruzka_gruz_quantity",
    },
    {
      id: "zagruzka_gruz_dimensions",
      btnId: "zagruzka_gruz_dimensions_btn",
      closeId: "close_zagruzka_gruz_dimensions",
    },
    {
      id: "zagruzka_dop_gruz_quantity",
      btnId: "zagruzka_dop_gruz_quantity_btn",
      closeId: "close_zagruzka_dop_gruz_quantity",
    },
    {
      id: "zagruzka_dop_gruz_dimensions",
      btnId: "zagruzka_dop_gruz_dimensions_btn",
      closeId: "close_zagruzka_dop_gruz_dimensions",
    },
    {
      id: "razgruzka_gruz_quantity",
      btnId: "razgruzka_gruz_quantity_btn",
      closeId: "close_razgruzka_gruz_quantity",
    },
    {
      id: "razgruzka_gruz_dimensions",
      btnId: "razgruzka_gruz_dimensions_btn",
      closeId: "close_razgruzka_gruz_dimensions",
    },
    {
      id: "proezd_gruz_quantity",
      btnId: "proezd_gruz_quantity_btn",
      closeId: "close_proezd_gruz_quantity",
    },
    {
      id: "proezd_gruz_dimensions",
      btnId: "proezd_gruz_dimensions_btn",
      closeId: "close_proezd_gruz_dimensions",
    },
    {
      id: "tamojnya_gruz_quantity",
      btnId: "tamojnya_gruz_quantity_btn",
      closeId: "close_tamojnya_gruz_quantity",
    },
    {
      id: "tamojnya_gruz_dimensions",
      btnId: "tamojnya_gruz_dimensions_btn",
      closeId: "close_tamojnya_gruz_dimensions",
    },
  ];

  // Функция для генерации HTML формы загрузки
  // title - заголовок формы
  // isSecond - флаг, указывающий является ли это дополнительной загрузкой
  function zagruzFrom(title, isSecond = false) {
    return `<div class="d-flex justify-content-between">
      <div class="d-flex">
      ${
        !isSecond
          ? `<i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>`
          : ""
      }
        <h4 class="ms-2" style="width: 10%; font-size: 14px; ${
          !isSecond ? "font-weight: 700" : ""
        }">${title || "Загрузка"}</h4>
      </div>

      <!-- Поля ввода адреса -->
      <div style="width: 80%;" class="d-flex flex-column">
        <div class="d-flex align-items-center mb-2 gap-2">
          <div>
            <input type="text" class="form-control" placeholder="Населенный пункт" style="width: 220px" />
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Адрес в населённом пункте" style="width: 220px" />
          </div>
          <span class="form-label" style="font-size: 12px; color: #838b94; line-height: 1.2; margin-bottom: 0">
            <i class="fa-solid fa-location-dot"></i>
            <i class="fa-solid fa-bars"></i>
          </span>
          ${
            isSecond
              ? `<span style="color: #f26d72; cursor: pointer; padding-left: 150px;" id='close_load_dop_gruz'>
                  <i class="fa-solid fa-trash"></i>
                </span>`
              : ""
          }
        </div>
      </div>
    </div>`;
  }

  // Функция для генерации HTML формы груза
  // isSecond - флаг, указывающий является ли это дополнительным грузом
  function gruzHtml(isSecond = false) {
    return `
        <div class="d-flex align-items-center mb-2 gap-2">
          <div>
            <input type="text" class="form-control" placeholder="Введите описание груза" style="width: 220px" />
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Вес" style="width:70px" />
          </div>
          <div>
            <select name="select" class="form-control" style="height: 32px; width:70px;">
              <option value="value1" selected>т</option>
              <option value="value2">кг</option>
            </select>
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Объём м³" style="width: 85px" />
          </div>
          <span class="form-label" style="font-size: 12px; color: #838b94; line-height: 1.2;">
            В расчёте на одну машину
          </span>
          ${
            isSecond
              ? `<span style="color: #f26d72; cursor: pointer" id='close_load_dop_gruz'>
                  <i class="fa-solid fa-trash"></i>
                </span>`
              : ""
          }
        </div>`;
  }

  // Функция для генерации HTML секции упаковки и количества
  // name - идентификатор секции
  // close_name - идентификатор кнопки закрытия
  function gruzQuantityHtml(name, close_name) {
    return `
        <div class="d-none" id=${name}>
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=${close_name}><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
            <label>
              Упаковка
              <select class="form-control mt-2" style="height: 32px; width:200px;" placeholder="Выберите упаковку">
                <option value="" selected>не выбрано</option>
                <option value="value1">т</option>
                <option value="value2">кг</option>
              </select>
            </label>
            <label class="mb-3">
              Кол-во
              <input type="text" class="form-control mt-2" placeholder="шт." style="width: 50px" />
            </label>
          </div>
        </div>`;
  }

  // Функция для генерации HTML секции габаритов
  // name - идентификатор секции
  // close_name - идентификатор кнопки закрытия
  function gruzDimensionsHtml(name, close_name) {
    return `<div class="d-none" id=${name}>
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=${close_name}><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
            <label class="gap-2">
              Габариты, ДхШхВ
              <div class="d-flex gap-2 mt-2">
                <!-- Длина -->
                <div class="d-flex flex-column gap-2">
                  <input type="text" class="form-control" placeholder="м" style="width: 60px" />
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <span>особые</span>
                  </div>
                </div>
                <!-- Ширина -->
                <div class="d-flex flex-column gap-2">
                  <input type="text" class="form-control" placeholder="м" style="width: 60px" />
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <span>особые</span>
                  </div>
                </div>
                <!-- Высота -->
                <div class="d-flex flex-column gap-2">
                  <input type="text" class="form-control" placeholder="м" style="width: 60px" />
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <span>особые</span>
                  </div>
                </div>
              </div>
            </label>
            <label class="ms-3">
              Диаметр
              <input type="text" class="form-control mt-2" placeholder="м" style="width: 60px" />
            </label>
            <span class="mt-4" style="color: #838b94;">
              «Особые» габариты будут выделены в поиске, чтобы перевозчики обратили на них внимание.
            </span>
          </div>
        </div>
`;
  }

  // Функция для генерации HTML кнопок управления
  // name_quantity - идентификатор кнопки упаковки и количества
  // name_dimensions - идентификатор кнопки габаритов
  function btns(name_quantity, name_dimensions) {
    return `<div class='mt-3'>
        <button class="form-btn" id=${name_quantity}>
         <i class="fa-solid fa-plus"></i>
          Упаковка и кол-во
        </button>
        <button class="form-btn" id=${name_dimensions}>
          <i class="fa-solid fa-plus"></i>
            Габариты и диаметр
        </button>
      </div>`;
  }

  // HTML шаблоны для различных типов форм
  // Каждый шаблон содержит структуру для определенного типа груза
  const htmlAddGruz = `
    <!-- Секция загрузки -->
    ${zagruzFrom("Загрузка")}

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml()}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml("main_gruz_quantity", "close_main_gruz_quantity")}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "main_gruz_dimensions",
          "close_main_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("main_gruz_quantity_btn", "main_gruz_dimensions_btn")}
      </div>   
    </div>

    <!-- Секция дополнительных грузов -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз 2    
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml(true)}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml("dop_gruz_quantity", "close_dop_gruz_quantity")}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "dop_gruz_dimensions",
          "close_dop_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("dop_gruz_quantity_btn", "dop_gruz_dimensions_btn")}
      </div>   
    </div>`;

  const htmlAddZagruzka = `
     <!-- Секция загрузки -->
    ${zagruzFrom("Загрузка")}

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml()}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml(
          "zagruzka_gruz_quantity",
          "close_zagruzka_gruz_quantity"
        )}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "zagruzka_gruz_dimensions",
          "close_zagruzka_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("zagruzka_gruz_quantity_btn", "zagruzka_gruz_dimensions_btn")}
      </div>   
    </div>

    <!-- Секция дополнительной загрузки -->
    ${zagruzFrom("Загрузка", true)}

     <!-- Секция дополнительных грузов -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз 2    
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml(true)}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml(
          "zagruzka_dop_gruz_quantity",
          "close_zagruzka_dop_gruz_quantity"
        )}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "zagruzka_dop_gruz_dimensions",
          "close_zagruzka_dop_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns(
          "zagruzka_dop_gruz_quantity_btn",
          "zagruzka_dop_gruz_dimensions_btn"
        )}
      </div>   
    </div>`;

  const htmlAddRazgruzka = `
    <!-- Секция загрузки -->
    ${zagruzFrom("Загрузка")}

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml()}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml(
          "razgruzka_gruz_quantity",
          "close_razgruzka_gruz_quantity"
        )}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "razgruzka_gruz_dimensions",
          "close_razgruzka_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("razgruzka_gruz_quantity_btn", "razgruzka_gruz_dimensions_btn")}
      </div> 
    </div>

    <div class="mb-3" style="padding-left: 20%;">
      <button class="form-btn" id="">
        <i class="fa-solid fa-plus"></i>
        Время загрузки
      </button>
      <button class="form-btn" id="">
        <i class="fa-solid fa-plus"></i>
        Еще груз
      </button>
    </div>

    <!-- Секция загрузки -->
    ${zagruzFrom("Разгрузка", true)}
  `;

  const htmlAddProezd = `
      <!-- Секция загрузки -->
    ${zagruzFrom("Загрузка")}

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml()}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml(
          "proezd_gruz_quantity",
          "close_proezd_gruz_quantity"
        )}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "proezd_gruz_dimensions",
          "close_proezd_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("proezd_gruz_quantity_btn", "proezd_gruz_dimensions_btn")}
      </div> 
    </div>

    <div class="mb-3" style="padding-left: 20%;">
      <button class="form-btn" id="">
        <i class="fa-solid fa-plus"></i>
        Время загрузки
      </button>
      <button class="form-btn" id="">
        <i class="fa-solid fa-plus"></i>
        Еще груз
      </button>
    </div>

    <!-- Секция загрузки -->
    ${zagruzFrom("Ехать через", true)}`;

  const htmlAddTamojnya = `
      <!-- Секция загрузки -->
    ${zagruzFrom("Загрузка")}

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">
          Груз
        </h4>
      </div>
    
      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
        ${gruzHtml()}

        <!-- Секция упаковки и количества -->
        ${gruzQuantityHtml(
          "tamojnya_gruz_quantity",
          "close_tamojnya_gruz_quantity"
        )}

        <!-- Секция габаритов -->
        ${gruzDimensionsHtml(
          "tamojnya_gruz_dimensions",
          "close_tamojnya_gruz_dimensions"
        )}

        <!-- Кнопки управления -->
        ${btns("tamojnya_gruz_quantity_btn", "tamojnya_gruz_dimensions_btn")}
      </div> 
    </div>

    <div class="mb-3" style="padding-left: 20%;">
      <button class="form-btn" id="loading_time_btn">
        <i class="fa-solid fa-plus"></i>
        Время загрузки
      </button>
      <button class="form-btn" id="dop_gruz_quantity_btn">
        <i class="fa-solid fa-plus"></i>
        Еще груз
      </button>
    </div>

    <!-- Секция загрузки -->
    ${zagruzFrom("Таможня", true)}`;

  // Вспомогательная функция для генерации HTML с сохранением ID
  // prefix - префикс для идентификаторов
  // isSecond - флаг для дополнительного груза
  const generateGruzHtml = (prefix, isSecond = false) => {
    return {
      quantity: gruzQuantityHtml(
        `${prefix}_quantity`,
        `close_${prefix}_quantity`
      ),
      dimensions: gruzDimensionsHtml(
        `${prefix}_dimensions`,
        `close_${prefix}_dimensions`
      ),
      buttons: btns(`${prefix}_quantity_btn`, `${prefix}_dimensions_btn`),
    };
  };

  // Оптимизированная работа с темной темой
  const initDarkTheme = () => {
    const $themeSwitch = $("#flexSwitchCheckDefault");
    const savedTheme = localStorage.getItem("darkMode") === "true";

    $themeSwitch.prop("checked", savedTheme);
    $body.toggleClass("dark-theme", savedTheme);

    $themeSwitch.on("change", function () {
      const isDark = $(this).is(":checked");
      $body.toggleClass("dark-theme", isDark);
      localStorage.setItem("darkMode", isDark);
    });
  };

  // Инициализация темной темы
  initDarkTheme();

  // Скрытие всех секций при загрузке страницы
  sections.forEach((item) => $(`#${item.id}`).addClass("d-none"));

  // Обработчики для показа/скрытия секций
  sections.forEach((item) => {
    // Показ секции при клике на кнопку
    $(document).on("click", `#${item.btnId}`, function () {
      $(this).addClass("d-none");
      $(`#${item.id}`).removeClass("d-none");
    });

    // Скрытие секции при клике на кнопку закрытия
    $(document).on("click", `#${item.closeId}`, function () {
      $(`#${item.id}`).addClass("d-none");
      $(`#${item.btnId}`).removeClass("d-none");
    });
  });

  // Обработчики для кнопок предоплаты и оплаты
  $("#predoplata_btn, #oplata_btn").click(function () {
    const isPredoplata = $(this).attr("id") === "predoplata_btn";
    $("#oplata_btn").toggleClass("d-none", isPredoplata);
    $("#predoplata_btn").toggleClass("d-none", !isPredoplata);
  });

  // Инициализация активной кнопки торгов
  $("#torg_btn").addClass("bid_btn_active");

  // Обработчик для кнопок торгов
  $(".bid_btn").on("click", function () {
    $(".bid_btn").removeClass("bid_btn_active");
    $(this).addClass("bid_btn_active");
  });

  // Функция для управления видимостью элементов
  // showIds - массив ID элементов для показа
  // hideIds - массив ID элементов для скрытия
  const toggleElements = (showIds, hideIds) => {
    showIds.forEach((id) => $(`#${id}`).removeClass("d-none"));
    hideIds.forEach((id) => $(`#${id}`).addClass("d-none"));
  };

  // Обработчики для различных типов грузов
  const cargoHandlers = {
    // Обработчик для основного груза
    gruz: () => {
      const templates = generateGruzHtml("main_gruz");
      toggleElements(
        ["load_dop_gruz_wrap", "load_dop_gruz"],
        [
          "gruz",
          "load_gruz",
          "zagruzka_gruz",
          "razgruzka_gruz",
          "proezd_gruz",
          "tamojnya_gruz",
        ]
      );
      $loadDopGruz.html(htmlAddGruz);
    },
    // Обработчик для загрузки
    zagruzka: () => {
      toggleElements(
        ["load_dop_gruz_wrap", "zagruzka_gruz"],
        [
          "gruz",
          "load_gruz",
          "load_dop_gruz",
          "razgruzka_gruz",
          "proezd_gruz",
          "tamojnya_gruz",
        ]
      );
      $zagruzkaGruz.html(htmlAddZagruzka);
    },
    // Обработчик для разгрузки
    razgruzka: () => {
      toggleElements(
        ["load_dop_gruz_wrap", "razgruzka_gruz"],
        [
          "gruz",
          "load_gruz",
          "load_dop_gruz",
          "zagruzka_gruz",
          "proezd_gruz",
          "tamojnya_gruz",
        ]
      );
      $razgruzkaGruz.html(htmlAddRazgruzka);
    },
    // Обработчик для проезда
    proezd: () => {
      toggleElements(
        ["load_dop_gruz_wrap", "proezd_gruz"],
        [
          "gruz",
          "load_gruz",
          "load_dop_gruz",
          "zagruzka_gruz",
          "razgruzka_gruz",
          "tamojnya_gruz",
        ]
      );
      $proezdGruz.html(htmlAddProezd);
    },
    // Обработчик для таможни
    tamojnya: () => {
      toggleElements(
        ["load_dop_gruz_wrap", "tamojnya_gruz"],
        [
          "gruz",
          "load_gruz",
          "load_dop_gruz",
          "zagruzka_gruz",
          "razgruzka_gruz",
          "proezd_gruz",
        ]
      );
      $tamojnyaGruz.html(htmlAddTamojnya);
    },
  };

  // Привязка обработчиков к кнопкам грузов
  $("#gruz_btn").click(cargoHandlers.gruz);
  $("#zagruzka_gruz_btn").click(cargoHandlers.zagruzka);
  $("#razgruzka_gruz_btn").click(cargoHandlers.razgruzka);
  $("#proezd_gruz_btn").click(cargoHandlers.proezd);
  $("#tamojnya_gruz_btn").click(cargoHandlers.tamojnya);

  // Обработчики закрытия форм
  $(document).on(
    "click",
    "#close_load_dop_gruz, #close_zagruzka_gruz",
    function () {
      $gruz.removeClass("d-none");
      $loadGruz.removeClass("d-none");
      $loadDopGruzWrap.addClass("d-none");
    }
  );

  // Обработчик удаления груза
  $(document).on("click", ".delete-gruz", function () {
    const $cargo = $(this).closest("[data-gruz-id]");
    $cargo.remove();

    // Обновление нумерации оставшихся грузов
    $("#second_dop_gruz [data-gruz-id]").each(function (index) {
      const newIndex = index + 2;
      $(this)
        .attr("data-gruz-id", newIndex)
        .find("h4")
        .text(`Груз ${newIndex}`);
    });
  });

  // Обработчики для кнопок упаковки и габаритов
  const handleQuantityDimensions = (type) => {
    $(document).on(
      "click",
      `[id^=next_gruz_${type}_btn_], [id^=close_next_gruz_${type}_]`,
      function () {
        const index = $(this).attr("id").split("_").pop();
        const isClose = $(this).attr("id").startsWith("close");

        $(`#next_gruz_${type}_${index}`).toggleClass("d-none", isClose);
        $(`#next_gruz_${type}_btn_${index}`).toggleClass("d-none", !isClose);
      }
    );
  };

  // Инициализация обработчиков для упаковки и габаритов
  handleQuantityDimensions("quantity");
  handleQuantityDimensions("dimensions");

  // Обработчики для кнопок торгов
  const bidHandlers = {
    torg: () =>
      toggleElements(
        ["torg", "torg_text", "torg_wrap"],
        ["no_torg_text", "zapros_wrap", "torgi_wrap", "the_end_torg"]
      ),
    no_torg: () =>
      toggleElements(
        ["no_torg_text", "torg_wrap"],
        ["torg", "torg_text", "zapros_wrap", "torgi_wrap", "the_end_torg"]
      ),
    zapros: () =>
      toggleElements(
        ["zapros_wrap"],
        ["torg_wrap", "torgi_wrap", "the_end_torg"]
      ),
    torgi: () =>
      toggleElements(
        ["torgi_wrap", "the_end_torg"],
        ["torg_wrap", "zapros_wrap"]
      ),
  };

  // Привязка обработчиков торгов
  $("#torg_btn").on("click", bidHandlers.torg);
  $("#no_torg_btn").on("click", bidHandlers.no_torg);
  $("#zapros_btn").on("click", bidHandlers.zapros);
  $("#torgi_btn").on("click", bidHandlers.torgi);
});
