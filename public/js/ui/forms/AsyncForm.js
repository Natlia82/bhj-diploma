/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    if (!element) {
      console.log('ошибка!!');
      return;
    }
   
     this.element = element;
     console.log(this.element); 
     this.registerEvents();

  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
   // this.prevenrDefault();
    this.submit();
    return false;
    //event.preventDefault();
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const form = document.getElementById( 'myform' ),
    formData = new FormData( form ),
    entries = formData.entries();

for (let item of entries) {
  const key = item[ 0 ],
    value = item[ 1 ];
  console.log( `${key}: ${value}` );
}
  }

  onSubmit(options){

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {

  }
}