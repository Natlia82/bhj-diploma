/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  //privrate let element;
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    if (!element) {
      console.log('ошибка!!');
      return;
    }
   
     this.element = element;
     console.log(this.element); 
     registerEvents(); 
   //  Modal.registerEvents();
        
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
   const knopa = this.element.querySelector('[data-dismiss="modal"]');
   knopa.querySelector('[data-dismiss="modal"]').addEventListener('click', Modal.onClose);
   console.log("xx2");
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    Modal.close();
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = "block"; 
    console.log("xx3");
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.removeAttribute("style");
  }
}