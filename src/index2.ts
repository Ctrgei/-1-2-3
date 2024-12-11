// Определяем интерфейсы
interface Entity {
    id: number;
  }
  
  interface ToJsonStringify extends Entity {
    name: string;
    surname?: string; // Опциональное свойство
  }
  
  // Создаем объект data
  const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
  };
  
  // Преобразуем объект data в строку JSON
  const jsonString = JSON.stringify(data);
  
  // Выводим результат в консоль
  console.log(jsonString);