// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// type UserUpdateForm = Partial<User>;

// const update: UserUpdateForm = {
//   name: "Max",
// };

// function updateUserPartial(user: User, dataToUpdate: Partial<User>): User {
//   return { ...user, ...dataToUpdate };
// }

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

// interface Config {
//   host: string;
//   port: number;
//   protocol: string;
// }

// type SetConfig = Partial<Config>;

// function setConfig(config: SetConfig): Config {
//   return {
//     host: config.host || "localhost",
//     port: config.port || 8080,
//     protocol: config.protocol || "http",
//   };
// }

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

// function getArray(array: ReadonlyArray<number>): number[] {
//   return Array.from(array);
// }

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

// interface Config {
//   apiUrl: string;
//   timeout: number;
// }

// const config: Readonly<Config> = {
//   apiUrl: "https://api.example.com",
//   timeout: 3000,
// };

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// function getNameAndEmail(user: User): Pick<User, "email" | "name"> {
//   return { email: user.email, name: user.name };
// }

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// function displayPost(post: ApiResponse): Pick<ApiResponse, "title" | "content"> {
//   return {
//     title: post.title,
//     content: post.content,
//   };
// }

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

// const userAge: Record<string, number> = {
//   "Max": 25,
//   "Ajax": 31,
// };

// Задача 2: Мапа з іменами місяців до кількості днів у них.

// const months: Record<string, number> = {
//   January: 31,
//   February: 28,
//   March: 31,
// };

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// type UserToShow = Omit<User, "password">;

// const user: UserToShow = {
//   name: "Mango",
//   email: "mango@mail.com",
// };

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// type Post = Omit<ApiResponse, "createdAt">;

// const postToDisplay: Post = {
//   id: 1,
//   title: "Title",
//   content: "Content",
// };

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

interface MenuItem {
  name: string;
  price: number;
  category: "starter" | "main" | "dessert";
}

function sortMenu(menu: MenuItem[]): MenuItem[] {
  return menu.sort();
}

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface User {
  name: string;
  email: string;
  birthday: Date;
}

function checkAdult(user: User): boolean {
  if (Date.now() - user.birthday.getTime() >= 18) {
    return true;
  }

  return false;
}

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

interface CarProperties {
  brand: string;
  year: number;
  fuelType: "petrol" | "diesel" | "electric";
}

class Car implements CarProperties {
  constructor(
    public brand: string,
    public year: number,
    public fuelType: "petrol" | "diesel" | "electric"
  ) {}

  getDetails(): CarProperties {
    return {
      brand: this.brand,
      fuelType: this.fuelType,
      year: this.year,
    };
  }
}

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.

interface StudentData {
  name: string;
  studentID: number | string;
  major: string;
}

class Student implements StudentData {
  constructor(public name: string, public studentID: number | string, public major: string) {}

  introduce(phrase: string): string {
    return `${phrase}, my name is ${this.name}, my major is ${this.major}`;
  }
}
