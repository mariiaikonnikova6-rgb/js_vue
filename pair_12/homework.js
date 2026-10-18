
const onlineCourses = [
    {id: 1, title: "Основи веб-розробки: HTML, CSS і JavaScript", category: "Програмування", price: 1200, duration: 45, rating: 4.8, available: true},
    {id: 2, title: "Графічний дизайн у Photoshop та Illustrator", category: "Дизайн", price: 1800, duration: 30, rating: 4.5, available: true},
    {id: 3, title: "Аналіз даних з Python", category: "Програмування", price: 2500, duration: 60, rating: 4.9, available: false},
    {id: 4, title: "Основи інтернет-маркетингу", category: "Маркетинг", price: 1500, duration: 25, rating: 4.2, available: true},
    {id: 5, title: "Англійська мова для IT", category: "Мови", price: 950, duration: 20, rating: 4.6, available: true},
    {id: 6, title: "Управління проєктами", category: "Менеджмент", price: 2100, duration: 35, rating: 4.7, available: true},
    {id: 7, title: "Створення додатків на Flutter", category: "Програмування", price: 2800, duration: 50, rating: 4.4, available: false},
    {id: 8, title: "Тестування програмного забезпечення", category: "Тестування", price: 1600, duration: 40, rating: 4.7, available: true}
];

function formatCourse(c) {
    return `ID: ${c.id} | ${c.title} | ${c.category} | ${c.price} грн | ${c.duration} год | Рейтинг: ${c.rating} | Доступний: ${c.available ? "Так" : "Ні"}`;
}
function formatList(arr) {
    return arr.map(c => formatCourse(c)).join("\n");
}

function findCourse(id) {
    return onlineCourses.find(c => c.id === id);
}

function findByCategory(category) {
    return onlineCourses.filter(c =>
        c.category.toLowerCase() === category.toLowerCase()
    );
}

function findByPrice(price) {
    return onlineCourses.filter(c => c.price <= price);
}

function findByTitle(text) {
    return onlineCourses.filter(c =>
        c.title.toLowerCase().includes(text.toLowerCase())
    );
}
function getTitles() {
    return onlineCourses.map(c => c.title);
}

function getDiscount() {
    return onlineCourses.map(c => ({
        title: c.title,
        price: Number((c.price * 0.85).toFixed(2))
    }));
}

function sortByPrice() {
    return [...onlineCourses].sort((a, b) => a.price - b.price);
}

function sortByRating() {
    return [...onlineCourses].sort((a, b) => b.rating - a.rating);
}

function sortByTitle() {
    return [...onlineCourses].sort((a, b) =>
        a.title.localeCompare(b.title, "uk")
    );
}

function getStatistics() {
    const available = onlineCourses.filter(c => c.available);
    const total = available.reduce((sum, c) => sum + c.price, 0);
    const average = available.length ? total / available.length : 0;

    return {
        total: total,
        average: Number(average.toFixed(2))
    };
}



function showResult(arr) {
    if (arr.length === 0) {
        alert("Курсів не знайдено.");
    } else {
        alert(formatList(arr));
    }
}

function runMenu() {
    let repeat = true;

    do {
        const choice = prompt(`
КАТАЛОГ ОНЛАЙН-КУРСІВ

1. Знайти курс за ID
2. Курси певної категорії
3. Курси за максимальною ціною
4. Пошук за частиною назви
5. Показати назви курсів
6. Ціни зі знижкою 15%
7. Сортування за ціною
8. Сортування за рейтингом
9. Сортування за назвою
10. Статистика доступних курсів
11. Показати всі курси

Введіть номер операції:`);

        if (choice === null) {
            if (confirm("Вийти з програми?")) {
                break;
            }
            continue;
        }

        switch (choice.trim()) {
            case "1": {
                const input = prompt("Введіть ID курсу:");
                if (input === null) break;

                const id = Number(input);

                if (!input.trim() || !Number.isInteger(id) || id < 1) {
                    alert("Неправильний ID!");
                    break;
                }

                const course = findCourse(id);
                alert(course ? formatCourse(course) : "Курс не знайдено.");
                break;
            }

            case "2": {
                const category = prompt("Введіть категорію:");
                if (category === null) break;



                if (!category.trim()) {
                    alert("Категорію не введено!");
                    break;
                }

                showResult(findByCategory(category.trim()));
                break;
            }

            case "3": {
                const input = prompt("Введіть максимальну ціну:");
                if (input === null) break;

                const price = Number(input);

                if (!input.trim() || !Number.isFinite(price) || price < 0) {
                    alert("Неправильна ціна!");
                    break;
                }

                showResult(findByPrice(price));
                break;
            }

            case "4": {
                const text = prompt("Введіть частину назви:");
                if (text === null) break;

                if (!text.trim()) {
                    alert("Введіть текст для пошуку!");
                    break;
                }

                showResult(findByTitle(text.trim()));
                break;
            }

            case "5": {
                alert(getTitles().join("\n"));
                break;
            }

            case "6": {
                const discounted = getDiscount();
                const result = discounted.map(c =>
                    `${c.title} — ${c.price} грн`
                ).join("\n");

                alert("Ціни зі знижкою 15%:\n" + result);
                break;
            }

            case "7": {
                showResult(sortByPrice());
                break;
            }

            case "8": {
                showResult(sortByRating());
                break;
            }

            case "9": {
                showResult(sortByTitle());
                break;
            }

            case "10": {
                const stats = getStatistics();

                alert(
                    `Загальна вартість: ${stats.total} грн\n` +
                    `Середня вартість: ${stats.average} грн`
                );
                break;
            }

            case "11": {
                showResult(onlineCourses);
                break;
            }

            default: {
                alert("Неправильний номер операції!");
            }
        }

        repeat = confirm("Повернутися до головного меню?");

    } while (repeat);

    alert("Роботу завершено!");
}

runMenu();
