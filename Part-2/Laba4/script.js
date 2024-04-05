// Завдання 1
function task1() {
    let fruits = ["яблуко", "груша", "апельсин", "банан"];
    
    // 1. Видалення останнього елементу
    fruits.pop();
    console.log("1. Масив після видалення останнього елементу:", fruits);

    // 2. Додавання нового елементу на початок масиву
    fruits.unshift("ананас");
    console.log("2. Масив після додавання нового елементу на початок:", fruits);

    // 3. Сортування у зворотньому алфавітному порядку
    fruits.sort().reverse();
    console.log("3. Масив у зворотньому алфавітному порядку:", fruits);

    // 4. Знаходження індексу елемента "яблуко"
    let index = fruits.indexOf("яблуко");
    console.log("4. Індекс елемента 'яблуко':", index);
}

// Завдання 2
function task2() {
    let colors = ["червоний", "зелений", "синій", "жовтий"];

    // 1. Знайдення найдовшого та найкоротшого елементів
    let longest = colors.reduce((a, b) => a.length > b.length ? a : b);
    console.log("1. Найдовший елемент:", longest);

    // 2. Видалення всіх елементів, крім тих, що містять слово "синій"
    let filteredColors = colors.filter(color => color.includes("синій"));
    console.log("2. Масив після видалення всіх елементів, крім 'синій':", filteredColors);

    // 3. Об'єднання всіх елементів у рядок і розділення комами
    let joined = colors.join(", ");
    console.log("3. Об'єднані елементи:", joined);
}

// Завдання 3
function task3() {
    let employees = [
        { name: "Іван", age: 30, position: "розробник" },
        { name: "Марія", age: 25, position: "тестувальник" },
        { name: "Петро", age: 35, position: "розробник" }
    ];

    // 1. Сортування за іменами
    let sortedEmployees = employees.slice().sort((a, b) => a.name.localeCompare(b.name));
    console.log("1. Масив працівників за іменами:", sortedEmployees);

    // 2. Пошук розробників
    let developers = employees.filter(employee => employee.position === "розробник");
    console.log("2. Розробники:", developers);

    // 3. Видалення працівника за певною умовою (наприклад, за віком)
    let ageToDelete = 30;
    let indexToDelete = employees.findIndex(employee => employee.age === ageToDelete);
    if (indexToDelete !== -1) {
        employees.splice(indexToDelete, 1);
    }
    console.log(`3. Видалено працівника з віком ${ageToDelete}:`, employees);

    // 4. Додавання нового працівника
    let newEmployee = { name: "Ольга", age: 28, position: "тестувальник" };
    employees.push(newEmployee);
    console.log("4. Додано нового працівника:", employees);
}

// Завдання 4
function task4() {
    let students = [
        { name: "Олексій", age: 22, course: 3 },
        { name: "Віктор", age: 20, course: 2 },
        { name: "Наталія", age: 21, course: 3 }
    ];

    // 1. Видалення студента з ім'ям "Олексій"
    students = students.filter(student => student.name !== "Олексій");
    console.log("1. Масив студентів після видалення студента з ім'ям 'Олексій':", students);

    // 2. Додавання нового студента
    let newStudent = { name: "Ірина", age: 23, course: 1 };
    students.push(newStudent);
    console.log("2. Додано нового студента:", students);

    // 3. Сортування студентів за віком від найстаршого до наймолодшого
    students.sort((a, b) => b.age - a.age);
    console.log("3. Студенти за віком від найстаршого до наймолодшого:", students);

    // 4. Пошук студента, який навчається на 3-му курсі
    let courseToFind = 3;
    let studentOnCourse = students.find(student => student.course === courseToFind);
    console.log(`4. Студент на ${courseToFind}-му курсі:`, studentOnCourse);
}

// Завдання 5
function task5() {
    let numbers = [1, 2, 3, 4, 5];

    // 1. Піднесення кожного числа до квадрату
    let squaredNumbers = numbers.map(number => number ** 2);
    console.log("1. Числа після піднесення до квадрату:", squaredNumbers);

    // 2. Фільтрація лише парних чисел
    let evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log("2. Парні числа:", evenNumbers);

    // 3. Знаходження суми всіх елементів масиву
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("3. Сума всіх елементів масиву:", sum);

    // 4. Додавання нових чисел до масиву
    let additionalNumbers = [6, 7, 8, 9, 10];
    numbers.push(...additionalNumbers);
    console.log("4. Масив після додавання нових чисел:", numbers);

    // 5. Видалення перших трьох елементів
    numbers.splice(0, 3);
    console.log("5. Масив після видалення перших трьох елементів:", numbers);
}

// Завдання 6
function task6() {
    function libraryManagement() {
        let library = [];

        function addBook(title, author, genre, pages) {
            library.push({ title, author, genre, pages, isAvailable: true });
        }

        function removeBook(title) {
            let index = library.findIndex(book => book.title === title);
            if (index !== -1) {
                library.splice(index, 1);
            }
        }

        function findBooksByAuthor(author) {
            return library.filter(book => book.author === author);
        }

        function toggleBookAvailability(title, isBorrowed) {
            let book = library.find(book => book.title === title);
            if (book) {
                book.isAvailable = !isBorrowed;
            }
        }

        function sortBooksByPages() {
            library.sort((a, b) => a.pages - b.pages);
        }

        function getBooksStatistics() {
            let totalBooks = library.length;
            let availableBooks = library.filter(book => book.isAvailable).length;
            let borrowedBooks = totalBooks - availableBooks;
            let totalPages = library.reduce((sum, book) => sum + book.pages, 0);
            let averagePages = totalBooks > 0 ? totalPages / totalBooks : 0;

            return {
                totalBooks,
                availableBooks,
                borrowedBooks,
                averagePages
            };
        }

        // Додамо деякі книги для тестування
        addBook("Зелена книга", "Олександр Петров", "Пригоди", 200);
        addBook("Червона книга", "Іван Сидоренко", "Детектив", 300);
        addBook("Синя книга", "Марія Іванова", "Фантастика", 250);

        console.log("Початкова бібліотека:", library);

        // Виклик функцій управління бібліотекою
        removeBook("Червона книга");
        console.log("Після видалення книги:", library);

        console.log("Книги Марії Іванової:", findBooksByAuthor("Марія Іванова"));

        toggleBookAvailability("Зелена книга", true);
        console.log("Після позначення 'Зелена книга' як взятої:", library);

        sortBooksByPages();
        console.log("Після сортування книг за кількістю сторінок:", library);

        console.log("Статистика про книги:", getBooksStatistics());
    }

    libraryManagement();
}

// Виклик усіх функцій
task1();
task2();
task3();
task4();
task5();
task6();