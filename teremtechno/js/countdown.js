// Устанавливаем дату и время окончания акции
const targetDate = new Date("September 1, 2023 00:00:00").getTime();

// Обновляем таймер каждую секунду
const timer = setInterval(function() {
    // Получаем текущую дату и время
    const currentDate = new Date().getTime();

    // Вычисляем оставшееся время в миллисекундах
    const timeRemaining = targetDate - currentDate;

    // Вычисляем количество дней, часов, минут и секунд
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Обновляем значения на странице
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Если время вышло, останавливаем таймер
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Акция завершена!";
    }
}, 1000);
