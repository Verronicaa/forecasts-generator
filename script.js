/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector('.forecast-btn');
const currentBox = document.querySelector('.current-forecast');
const textForecast = currentBox.querySelector('h1');
const percentForecast = currentBox.querySelector('p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecastList = document.querySelector('.forecasts'); 

const predictions = [
    { text: "Улыбайся чаще, и счастье обязательно найдет тебя! ", chance: "99%" },
    { text: "На этой неделе твоя стиральная машина соберет совет директоров и обсудит, как часто ты забываешь вынимать белье.", chance: "65%" },
    { text: "На этой неделе ты встретишь интересного человека.", chance: "60%" },
    { text: "Не переживай из-за мелочей, они быстро уйдут из твоей жизни.", chance: "82%"},
    { text: "Этот период может быть немного сложным, но он пройдет.", chance: "87%"},
    { text: "Сегодняшний день может быть немного скучным, но это отличная возможность для отдыха.", chance: "70%"},
    { text: "Маленькие шаги вперед приведут к большим достижениям.", chance: "95%" },
    { text: "Ты можешь столкнуться с недопониманием в близких отношениях, но честный разговор поможет разрешить конфликт.", chance: "75%"},
    { text: "В этом месяце тебя ждет неожиданное приключение.", chance: "88%" },
    { text: "Твоя творческая идея получит признание.", chance: "80%"},
    { text: "Сегодня стоит уделить внимание здоровью и внутренней гармонии.", chance: "98%"},
    { text: "Не забывай о своих мечтах, они станут реальностью.", chance: "95%"},
    { text: "Лучшие решения принимаются в спокойствии. Не спешите, чтобы избежать ошибок.", chance: "97%"},
    { text: "В ближайшие дни у тебя будет возможность сделать что-то дерзкое и необычное.", chance: "70%"},
    { text: "Сегодня подходящее время для саморазвития и учебы. Узнайте что-то новое и расширьте горизонты.", chance: "94%"},
    { text: "Не стесняйтесь выразить свои чувства и эмоции близкому человеку. Откровенность усилит вашу связь.", chance: "96%"},
    { text: "Не упустите возможность попробовать новое блюдо или кухню. Сегодняшний день благоприятен для гастрономических открытий.", chance: "78%"},
    { text: "Ваша связь будет становиться все крепче, и вы будете довольны, что нашли друг друга.", chance: "91%"}

  ];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomPrediction() {
    const randomIndex = getRandom(0, predictions.length - 1);
    return predictions[randomIndex];
  }

  function templatePrediction(prediction) {
    const elem = forecastTemplate.content.cloneNode(true);
    elem.querySelector('h3').textContent = prediction.text;
    elem.querySelector('p').textContent = `Вероятность: ${prediction.chance}`;
    forecastList.prepend(elem);
  }

  button.addEventListener('click', function() {
    const randomPrediction = generateRandomPrediction();
    textForecast.textContent = randomPrediction.text;
    percentForecast.textContent = `Вероятность события: ${randomPrediction.chance}`;
    templatePrediction(randomPrediction);
});





  