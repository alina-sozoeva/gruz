$(document).ready(function () {
  // Счетчик для нумерации дополнительных грузов
  // let gruzCount = 2;

  // Функция для создания HTML шаблона дополнительного груза
  // function createGruzHtml(index) {
  //   return `
  //     <!-- Шаблон дополнительного груза -->
  //     <div class="d-flex justify-content-between mb-3" data-gruz-id="${index}">
  //       <div class="d-flex">
  //         <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">Груз ${index}</h4>
  //       </div>

  //       <!-- Форма ввода данных о дополнительном грузе -->
  //       <div style="width: 80%;" class="dop-gruz d-flex flex-column">
  //         <!-- Основные параметры дополнительного груза -->
  //         <div class="d-flex align-items-center mb-2 gap-2">
  //           <div>
  //             <input type="text" class="form-control" placeholder="Введите описание груза" style="width: 220px" />
  //           </div>
  //           <div>
  //             <input type="text" class="form-control" placeholder="Вес" style="width:70px" />
  //           </div>
  //           <div>
  //             <select name="select" class="form-control" style="height: 32px; width:70px;">
  //               <option value="value1" selected>т</option>
  //               <option value="value2">кг</option>
  //             </select>
  //           </div>
  //           <div>
  //             <input type="text" class="form-control" placeholder="Объём м³" style="width: 85px" />
  //           </div>
  //           <span class="form-label" style="font-size: 12px; color: #838b94; line-height: 1.2;">
  //             В расчёте на одну машину
  //           </span>
  //           <span style="color: #f26d72; cursor: pointer" class="delete-gruz">
  //             <i class="fa-solid fa-trash"></i>
  //           </span>
  //         </div>

  //         <!-- Секция упаковки и количества для дополнительного груза -->
  //         <div class="d-none" id="next_gruz_quantity_${index}">
  //           <div class="d-flex gap-2" style="font-size: 12px;">
  //             <span id="close_next_gruz_quantity_${index}"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
  //             <label>
  //               Упаковка
  //               <select class="form-control mt-2" style="height: 32px; width:200px;" placeholder="Выберите упаковку">
  //                 <option value="" selected>не выбрано</option>
  //                 <option value="value1">т</option>
  //                 <option value="value2">кг</option>
  //               </select>
  //             </label>
  //             <label class="mb-3">
  //               Кол-во
  //               <input type="text" class="form-control mt-2" placeholder="шт." style="width: 50px" />
  //             </label>
  //           </div>
  //         </div>

  //         <!-- Секция габаритов для дополнительного груза -->
  //         <div class="d-none" id="next_gruz_dimensions_${index}">
  //           <div class="d-flex gap-2" style="font-size: 12px;">
  //             <span id="close_next_gruz_dimensions_${index}"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
  //             <label class="gap-2">
  //               Габариты, ДхШхВ
  //               <div class="d-flex gap-2 mt-2">
  //                 <!-- Длина -->
  //                 <div class="d-flex flex-column gap-2">
  //                   <input type="text" class="form-control" placeholder="м" style="width: 60px" />
  //                   <div>
  //                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  //                     <span>особые</span>
  //                   </div>
  //                 </div>
  //                 <!-- Ширина -->
  //                 <div class="d-flex flex-column gap-2">
  //                   <input type="text" class="form-control" placeholder="м" style="width: 60px" />
  //                   <div>
  //                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  //                     <span>особые</span>
  //                   </div>
  //                 </div>
  //                 <!-- Высота -->
  //                 <div class="d-flex flex-column gap-2">
  //                   <input type="text" class="form-control" placeholder="м" style="width: 60px" />
  //                   <div>
  //                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  //                     <span>особые</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </label>
  //             <label class="ms-3">
  //               Диаметр
  //               <input type="text" class="form-control mt-2" placeholder="м" style="width: 60px" />
  //             </label>
  //             <span class="mt-4" style="color: #838b94;">
  //               «Особые» габариты будут выделены в поиске, чтобы перевозчики обратили на них внимание.
  //             </span>
  //           </div>
  //         </div>

  //         <!-- Кнопки управления для дополнительного груза -->
  //         <div class='mt-3'>
  //           <button class="form-btn quantity-btn" id="next_gruz_quantity_btn_${index}">
  //             <i class="fa-solid fa-plus"></i>
  //             Упаковка и кол-во
  //           </button>
  //           <button class="form-btn dimensions-btn" id="next_gruz_dimensions_btn_${index}">
  //             <i class="fa-solid fa-plus"></i>
  //             Габариты и диаметр
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  // }

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
      id: "next_gruz_quantity",
      btnId: "next_gruz_quantity_btn",
      closeId: "close_next_gruz_quantity",
    },
    {
      id: "next_gruz_dimensions",
      btnId: "next_gruz_dimensions_btn",
      closeId: "close_next_gruz_dimensions",
    },
    {
      id: "dop_loading_time",
      btnId: "dop_loading_time_btn",
      closeId: "close_dop_loading_time",
    },
  ];

  // HTML шаблон для формы добавления груза
  const htmlAddGruz = `
    <!-- Секция загрузки -->
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; font-weight: 700;">Загрузка</h4>
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
        </div>
      </div>
    </div>

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px;">Груз</h4>
      </div>

      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
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
        </div>

        <!-- Секция упаковки и количества -->
        <div class="d-none" id="main_gruz_quantity">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id="close_main_gruz_quantity"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
        </div>

        <!-- Секция габаритов -->
        <div class="d-none" id="main_gruz_dimensions">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id="close_main_gruz_dimensions"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

        <!-- Кнопки управления -->
        <div class='mt-3'>
          <button class="form-btn" id="main_gruz_quantity_btn">
            <i class="fa-solid fa-plus"></i>
            Упаковка и кол-во
          </button>
          <button class="form-btn" id="main_gruz_dimensions_btn">
            <i class="fa-solid fa-plus"></i>
            Габариты и диаметр
          </button>
        </div>
      </div>
    </div>

    <!-- Секция дополнительных грузов -->
    <div class="d-flex flex-column mb-3">
      <div id="second_dop_gruz">
        <!-- Шаблон второго груза -->
        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex">
            <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">Груз 2</h4>
          </div>

          <!-- Форма ввода данных о втором грузе -->
          <div style="width: 80%;" class="dop-gruz d-flex flex-column">
            <!-- Основные параметры второго груза -->
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
              <span style="color: #f26d72; cursor: pointer" id='close_load_dop_gruz'>
                <i class="fa-solid fa-trash"></i>
              </span>
            </div>

            <!-- Секция упаковки и количества для второго груза -->
            <div class="d-none" id="dop_gruz_quantity">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id="close_dop_gruz_quantity"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
            </div>

            <!-- Секция габаритов для второго груза -->
            <div class="d-none" id="dop_gruz_dimensions">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id="close_dop_gruz_dimensions"><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

            <!-- Кнопки управления для второго груза -->
            <div class='mt-3'>
              <button class="form-btn" id="dop_gruz_quantity_btn">
                <i class="fa-solid fa-plus"></i>
                Упаковка и кол-во
              </button>
              <button class="form-btn" id="dop_gruz_dimensions_btn">
                <i class="fa-solid fa-plus"></i>
                Габариты и диаметр
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  `;

  // HTML шаблон для формы добавления загрузки
  const htmlAddZagruzka = `
    <!-- Секция загрузки -->
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; font-weight: 700;">Загрузка</h4>
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
        </div>
      </div>
    </div>

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px;">Груз</h4>
      </div>

      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
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
        </div>

        <!-- Секция упаковки и количества -->
        <div class="d-none" id="">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
        </div>

        <!-- Секция габаритов -->
        <div class="d-none" id="">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

        <!-- Кнопки управления -->
        <div class='mt-3'>
          <button class="form-btn" id="">
            <i class="fa-solid fa-plus"></i>
            Упаковка и кол-во
          </button>
          <button class="form-btn" id="">
            <i class="fa-solid fa-plus"></i>
            Габариты и диаметр
          </button>
        </div>
      </div>
    </div>

    <!-- Секция загрузки -->
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; font-weight: 700;">Загрузка</h4>
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
        </div>
      </div>
    </div>

    <!-- Секция дополнительных грузов -->
    <div class="d-flex flex-column mb-3">
      <div id="second_dop_gruz">
        <!-- Шаблон второго груза -->
        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex">
            <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">Груз 2</h4>
          </div>

          <!-- Форма ввода данных о втором грузе -->
          <div style="width: 80%;" class="dop-gruz d-flex flex-column">
            <!-- Основные параметры второго груза -->
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
              <span style="color: #f26d72; cursor: pointer" id='close_zagruzka_gruz'>
                <i class="fa-solid fa-trash"></i>
              </span>
            </div>

            <!-- Секция упаковки и количества для второго груза -->
            <div class="d-none" id="">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
            </div>

            <!-- Секция габаритов для второго груза -->
            <div class="d-none" id="">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

            <!-- Кнопки управления для второго груза -->
            <div class='mt-3'>
              <button class="form-btn" id="">
                <i class="fa-solid fa-plus"></i>
                Упаковка и кол-во
              </button>
              <button class="form-btn" id="">
                <i class="fa-solid fa-plus"></i>
                Габариты и диаметр
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  `;

  // HTML шаблон для формы добавления разгрузки
  const htmlAddUnLoad = `
    <!-- Секция загрузки -->
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; font-weight: 700;">Загрузка</h4>
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
        </div>
      </div>
    </div>

    <!-- Секция основного груза -->
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px;">Груз</h4>
      </div>

      <!-- Форма ввода данных о грузе -->
      <div style="width: 80%;" class="dop-gruz d-flex flex-column">
        <!-- Основные параметры груза -->
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
        </div>

        <!-- Секция упаковки и количества -->
        <div class="d-none" id="">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
        </div>

        <!-- Секция габаритов -->
        <div class="d-none" id="">
          <div class="d-flex gap-2" style="font-size: 12px;">
            <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

        <!-- Кнопки управления -->
        <div class='mt-3'>
          <button class="form-btn" id="">
            <i class="fa-solid fa-plus"></i>
            Упаковка и кол-во
          </button>
          <button class="form-btn" id="">
            <i class="fa-solid fa-plus"></i>
            Габариты и диаметр
          </button>
        </div>
      </div>
    </div>

    <!-- Секция загрузки -->
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <i class="fa-solid fa-star-of-life" style="color: red; font-size: 8px"></i>
        <h4 class="ms-2" style="width: 10%; font-size: 14px; font-weight: 700;">Загрузка</h4>
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
        </div>
      </div>
    </div>

    <!-- Секция дополнительных грузов -->
    <div class="d-flex flex-column mb-3">
      <div id="second_dop_gruz">
        <!-- Шаблон второго груза -->
        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex">
            <h4 class="ms-2" style="width: 10%; font-size: 14px; white-space: nowrap;">Груз 2</h4>
          </div>

          <!-- Форма ввода данных о втором грузе -->
          <div style="width: 80%;" class="dop-gruz d-flex flex-column">
            <!-- Основные параметры второго груза -->
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
              <span style="color: #f26d72; cursor: pointer" id='close_zagruzka_gruz'>
                <i class="fa-solid fa-trash"></i>
              </span>
            </div>

            <!-- Секция упаковки и количества для второго груза -->
            <div class="d-none" id="">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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
            </div>

            <!-- Секция габаритов для второго груза -->
            <div class="d-none" id="">
              <div class="d-flex gap-2" style="font-size: 12px;">
                <span id=""><i class="fa-solid fa-xmark" style="font-size: 16px;"></i></span>
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

            <!-- Кнопки управления для второго груза -->
            <div class='mt-3'>
              <button class="form-btn" id="">
                <i class="fa-solid fa-plus"></i>
                Упаковка и кол-во
              </button>
              <button class="form-btn" id="">
                <i class="fa-solid fa-plus"></i>
                Габариты и диаметр
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // HTML шаблон для формы добавления томожни
  const htmlAddTamoj = ``;

  // Инициализация темной темы
  $("#flexSwitchCheckDefault").change(function () {
    const isDark = $(this).is(":checked");
    $("body").toggleClass("dark-theme", isDark);
    localStorage.setItem("darkMode", isDark);
  });

  // Загрузка сохраненной темы
  const savedTheme = localStorage.getItem("darkMode") === "true";
  $("body").toggleClass("dark-theme", savedTheme);
  $("#flexSwitchCheckDefault").prop("checked", savedTheme);

  // Скрытие всех секций при загрузке
  sections.forEach((item) => $(`#${item.id}`).addClass("d-none"));

  // Обработчики для показа/скрытия секций
  sections.forEach((item) => {
    $(document).on("click", `#${item.btnId}`, function () {
      $(this).addClass("d-none");
      $(`#${item.id}`).removeClass("d-none");
    });

    $(document).on("click", `#${item.closeId}`, function () {
      $(`#${item.id}`).addClass("d-none");
      $(`#${item.btnId}`).removeClass("d-none");
    });
  });

  // Обработчики для кнопок предоплаты и оплаты
  $("#predoplata_btn").click(function () {
    $("#oplata_btn").addClass("d-none");
  });

  $("#oplata_btn").click(function () {
    $("#predoplata_btn").addClass("d-none");
  });

  // Инициализация активной кнопки торгов
  $("#torg_btn").addClass("bid_btn_active");

  // Обработчик для кнопок торгов
  $(".bid_btn").on("click", function () {
    $(".bid_btn").removeClass("bid_btn_active");
    $(this).addClass("bid_btn_active");
  });

  // Обработчик для кнопки добавления груза
  $("#gruz_btn").click(function () {
    $("#gruz").addClass("d-none");
    $("#load_dop_gruz_wrap").removeClass("d-none");
    $("#load_gruz").addClass("d-none");
    $("#zagruzka_gruz").addClass("d-none");
    $("#load_dop_gruz").removeClass("d-none");
    $("#load_dop_gruz").html(htmlAddGruz);
  });

  // Обработчик для кнопки добавления загрузки
  $("#zagruzka_gruz_btn").click(function () {
    $("#gruz").addClass("d-none");
    $("#load_dop_gruz_wrap").removeClass("d-none");
    $("#load_gruz").addClass("d-none");
    $("#load_dop_gruz").addClass("d-none");
    $("#zagruzka_gruz").removeClass("d-none");
    $("#zagruzka_gruz").html(htmlAddZagruzka);
  });

  // Обработчик для кнопки добавления дополнительного груза
  // $("#dop_gruz_btn").click(function () {
  //   gruzCount++;
  //   const newGruz = createGruzHtml(gruzCount);
  //   $("#second_dop_gruz").append(newGruz);
  // });

  // Обработчик для закрытия формы дополнительного груза
  $(document).on("click", "#close_load_dop_gruz", function () {
    $("#gruz").removeClass("d-none");
    $("#load_gruz").removeClass("d-none");
    $("#load_dop_gruz_wrap").addClass("d-none");
  });

  $(document).on("click", "#close_zagruzka_gruz", function () {
    $("#gruz").removeClass("d-none");
    $("#load_gruz").removeClass("d-none");
    $("#load_dop_gruz_wrap").addClass("d-none");
  });

  // Обработчик для удаления дополнительного груза
  $(document).on("click", ".delete-gruz", function () {
    $(this).closest("[data-gruz-id]").remove();
    $("#second_dop_gruz [data-gruz-id]").each(function (index) {
      const newIndex = index + 2;
      $(this).attr("data-gruz-id", newIndex);
      $(this).find("h4").text(`Груз ${newIndex}`);
    });
    gruzCount = $("#second_dop_gruz [data-gruz-id]").length + 1;
  });

  // Обработчики для кнопок упаковки и габаритов дополнительных грузов
  $(document).on("click", "[id^=next_gruz_quantity_btn_]", function () {
    const index = $(this).attr("id").split("_").pop();
    $(this).addClass("d-none");
    $(`#next_gruz_quantity_${index}`).removeClass("d-none");
  });

  $(document).on("click", "[id^=next_gruz_dimensions_btn_]", function () {
    const index = $(this).attr("id").split("_").pop();
    $(this).addClass("d-none");
    $(`#next_gruz_dimensions_${index}`).removeClass("d-none");
  });

  $(document).on("click", "[id^=close_next_gruz_quantity_]", function () {
    const index = $(this).attr("id").split("_").pop();
    $(`#next_gruz_quantity_${index}`).addClass("d-none");
    $(`#next_gruz_quantity_btn_${index}`).removeClass("d-none");
  });

  $(document).on("click", "[id^=close_next_gruz_dimensions_]", function () {
    const index = $(this).attr("id").split("_").pop();
    $(`#next_gruz_dimensions_${index}`).addClass("d-none");
    $(`#next_gruz_dimensions_btn_${index}`).removeClass("d-none");
  });

  // Функция для управления видимостью блоков
  const showBlocks = (toShow = [], toHide = []) => {
    toShow.forEach((id) => $(`#${id}`).removeClass("d-none"));
    toHide.forEach((id) => $(`#${id}`).addClass("d-none"));
  };

  // Обработчики для кнопок торгов
  $("#torg_btn").on("click", () => {
    showBlocks(
      ["torg", "torg_text", "torg_wrap"],
      ["no_torg_text", "zapros_wrap", "torgi_wrap", "the_end_torg"]
    );
  });

  $("#no_torg_btn").on("click", () => {
    showBlocks(
      ["no_torg_text", "torg_wrap"],
      ["torg", "torg_text", "zapros_wrap", "torgi_wrap", "the_end_torg"]
    );
  });

  $("#zapros_btn").on("click", () => {
    showBlocks(["zapros_wrap"], ["torg_wrap", "torgi_wrap", "the_end_torg"]);
  });

  $("#torgi_btn").on("click", () => {
    showBlocks(["torgi_wrap", "the_end_torg"], ["torg_wrap", "zapros_wrap"]);
  });
});
