// 1. Одномерные массивы: Метод, возвращающий максимальное число из массива вещественных чисел
function findMaxNumber(arr: number[]): number {
    return Math.max(...arr);
  }
  
  // 2. Двумерные массивы: Метод, возвращающий флаг наличия хотя бы одного отрицательного числа в матрице целых чисел
  function hasNegative(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] < 0) {
          return true;
        }
      }
    }
    return false;
  }
  
  // 3. Кортеж, который может содержать только 3 числовых значения. Метод, возвращающий сумму этих значений
  type Tuple = [number, number, number];
  
  function sumTuple(tuple: Tuple): number {
    return tuple[0] + tuple[1] + tuple[2];
  }
  
  // 4. Перечисление для типов мячей для различных видов спортивных игр
  enum BallType {
    Football = "Football",
    Basketball = "Basketball",
    Tennis = "Tennis",
  }
  
  console.log(BallType.Football); // Выведет "Football"
  
  // 5. Вставка классов Pet, Dog и Cat с применением обобщенного типа
  class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
      return "No speak. I am fish!";
    }
  }
  
  class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
      return "Yaw-Gaw!";
    }
  }
  
  class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
      return "Miyau!";
    }
  }
  
  function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
  }
  
  // Пример вызова для объекта Cat
  const myCat = new Cat();
  printPetInfo(myCat);
  
  // Пример вызова для объекта Dog
  const myDog = new Dog();
  printPetInfo(myDog);
  
  // 6. Создание объекта с использованием перечисления для типа мяча и других полей
  interface Game {
    ballType: BallType;
    players: number;
    duration: number; // В минутах
  }
  
  const footballGame: Game = {
    ballType: BallType.Football,
    players: 22,
    duration: 90
  };
  
  console.log(JSON.stringify(footballGame)); // Выведет объект в формате JSON
  
  // Примеры для других задач
  
  // 1. Максимальное число из массива
  const arr: number[] = [1.5, 2.8, -3.4, 0.9];
  console.log(`Max number: ${findMaxNumber(arr)}`); // Выведет 2.8
  
  // 2. Проверка на отрицательные числа в матрице
  const matrix: number[][] = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
  ];
  console.log(`Has negative: ${hasNegative(matrix)}`); // Выведет true
  
  // 3. Сумма чисел в кортеже
  const numbers: Tuple = [1, 2, 3];
  console.log(`Sum of tuple: ${sumTuple(numbers)}`); // Выведет 6