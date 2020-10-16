// Создаём переменные js для более лёгкого управления данными пользователя:
var name = ""; // Имя.
var surname = ""; // Фамилия.
var number__group_1 = 0; // Первый номер группы.
var number__group_2 = 0; // Второй номер группы.

// Переменные для ключевых слов:
var sdelal = ""; // Сделал - Сделала.
var proshel = ""; // Прошёл - Прошла.
var videl = ""; // Видел - Видела.
var gotov = ""; // Готов - Готова.
var otvetil = ""; // Ответил - Ответила.
var podvel = ""; // Подвёл - Подвела.
var povisil = ""; // Повысил - Повысила.

/* Очистка всех сессий: */
sessionStorage.clear();

// Скрываем кнопку с проверкой ответов от пользователя:
$("#button__get__static__user").hide();
$("#button__go__to__index").hide();

function reg__func() // Нажата кнопка регистрации квеста:
{

	// Проверка на пустые поля:
	if ( $("#name__user").val() != "" && $("#surname__user").val() != "" && $("#group__number__1").val() != "" && $("#group__number__2").val() != "" )
	{
		// Меняем переменные js под пользователя:
		name = $("#name__user").val(); // Имя.
		surname = $("#surname__user").val(); // Фамилия.
		number__group_1 = $("#group__number__1").val(); // Первый номер группы.
		number__group_2 = $("#group__number__2").val(); // Второй номер группы.

		// Проверка введённого гендера:
		if ( $("#select__male").val() == 1 ) // Если был введён мужской пол:
		{
			// Меняем ключевые слова под мужской род:
			$("#male__sdelal").text("сделал");
			$("#male__proshel").text("прошёл");
			$("#male__videl").text("видел");
			$("#male__gotov").text("готов");

			// Замена ключевых слов для использоваения в js:
			sdelal = "сделал";
			proshel = "прошёл";
			videl = "видел";
			gotov = "готов";
			otvetil = "ответил";
			podvel = "подвёл";
			povisil = "повысил";
		}else if ( $("#select__male").val() == 2 ) // Если был введён женский пол:
		{
			// Меняем ключевые слова под женский род:
			$("#male__sdelal").text("сделала");
			$("#male__proshel").text("прошла");
			$("#male__videl").text("видела");
			$("#male__gotov").text("готова");

			// Замена ключевых слов для использоваения в js:
			sdelal = "сделала";
			proshel = "прошла";
			videl = "видела";
			gotov = "готова";
			otvetil = "ответила";
			podvel = "подвела";
			povisil = "повысила";
		}

		$("#get__name").text(name); // Все текста с айди get__name будут со значением имени пользоателя. И т.д. т.п.
		$("#get__surname").text(surname);
		$("#get__number__group_1").text(number__group_1);
		$("#get__number__group_2").text(number__group_2);

		$(".block__get__info__user").slideToggle(700); // Убираем блок сбора данных о пользователе.

		setTimeout(function(){ // Выполнение кода только после прошедшей секунды.
			$(".block__osn__question").slideToggle(700); // Показываем блок с заданиями.
		}, 1000);
	}

}

// Функция показа статистики правильных и неправильных ответов для админа:
function states() 
{
	alert(win + " - правильных.\n"+ lose+ " - неправильных.");
}


// ПЕРЕМЕННЫЕ:
var win = 0; // Счётчик правильных ответов.
var lose = 0; // Счётчик неправильных ответов.
var question__count = 1; // Создаём счётчик вопросов для js.

// Управление вопросами:
question__count = 1; // Сразу перейти на определённый вопрос.


// Начало квеста:
function start__quest()
{
	$(".section__title__start__quest").slideToggle(700); // Скрытие вступительного текста перед квестом.

	$("#text__answer__from__user").show(); // Прячем тектовое поле ответа, если нужны только кнопки.
	$("#button__questions__5").hide();
	$("#button__questions__4").hide();
	$("#button__questions__3").hide();
	$("#button__questions__2").hide();
	$(".counter__questions").text("1 / 20");
	$("#button__questions__1").text("Ответить"); // Ставим текст на кнопку - Ответить
	$(".text__questions").text("Начнём с лёгкого вопроса: как ты думаешь, как назывался город, за который 1082 воина были награждены медалью, а шестьсот заслужили звание Героя Советского Союза?");

	setTimeout(function(){
		$(".section__questions__quest").slideToggle(700);
	}, 800)
}



// КНОПКИ:

// 1
function clicked__button__question__1()
{
	if ( question__count == 1 ) // Кнопка нажата при первом вопросе:
	{
		if ( $("#text__answer__from__user").val() == "берлин" || $("#text__answer__from__user").val() == "Берлин" ) // Если пользователь написал в текстовое поле правильное слово:
		{
			sessionStorage.setItem('1_answ_q1', 'win');
			sessionStorage.setItem('answ_q1_text', $("#text__answer__from__user").val());
			win++;
			question__count++;
			question_2(); // Вызываем функцию второго вопроса.
		}else // Если слово неправильное - засчитываем неправльный ответ.
		{
			if ($("#text__answer__from__user").val() == "") {
				sessionStorage.setItem('answ_q1_text', 'Нет ответа');
			}else{
				sessionStorage.setItem('answ_q1_text', $("#text__answer__from__user").val());
			}
			lose++;
			question__count++;
			question_2();
		}
	}else if ( question__count == 2 ) // 1 кнопка нажата при 2 вопросе:
	{
		sessionStorage.setItem('answ_q2_text', '36');
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 1 кнопка нажата при 3 вопросе:
	{
		sessionStorage.setItem('answ_q3_text', '"За победу!"');
		lose++;
		question__count++;
		question_4();
	}else if ( question__count == 4 ) // 1 кнопка нажата при 4 вопросе:
	{
		sessionStorage.setItem('answ_q4_text', 'Знамя Красной армии');
		lose++;
		question__count++;
		question_5();
	}else if ( question__count == 5 ) // 1 кнопка нажата при 5 вопросе:
	{
		sessionStorage.setItem('answ_q5_text', '12 февраля 1944 года');
		lose++;
		question__count++;
		question_6();
	}else if ( question__count == 6 ) // 1 кнопка нажата при 6 вопросе:
	{
		if ( $("#text__answer__from__user").val() == "Жуков" || $("#text__answer__from__user").val() == "жуков" ) // Если пользователь написал в текстовое поле правильное слово:
		{
			sessionStorage.setItem('1_answ_q6', 'win');
			sessionStorage.setItem('answ_q6_text', $("#text__answer__from__user").val());
			win++;
			question__count++;
			question_7();
		}else // Если слово неправильное - засчитываем неправльный ответ.
		{
			if ($("#text__answer__from__user").val() == "") {
				sessionStorage.setItem('answ_q6_text', 'Нет ответа');
			}else{
				sessionStorage.setItem('answ_q6_text', $("#text__answer__from__user").val());
			}
			lose++;
			question__count++;
			question_7();
		}
	}else if ( question__count == 7 ) // 1 кнопка нажата при 7 вопросе:
	{
		if ( $("#text__answer__from__user").val() == "Рейхстаг" || $("#text__answer__from__user").val() == "рейхстаг" ) // Если пользователь написал в текстовое поле правильное слово:
		{
			sessionStorage.setItem('1_answ_q7', 'win');
			sessionStorage.setItem('answ_q7_text', $("#text__answer__from__user").val());
			win++;
			question__count++;
			question_8();
		}else // Если слово неправильное - засчитываем неправльный ответ.
		{
			if ($("#text__answer__from__user").val() == "") {
				sessionStorage.setItem('answ_q7_text', 'Нет ответа');
			}else{
				sessionStorage.setItem('answ_q7_text', $("#text__answer__from__user").val());
			}
			lose++;
			question__count++;
			question_8();
		}
	}else if ( question__count == 8 ) // 1 кнопка нажата при 8 вопросе:
	{
		sessionStorage.setItem('answ_q8_text', 'Норвегии');
		lose++;
		question__count++;
		question_9();
	}else if ( question__count == 9 ) // 1 кнопка нажата при 9 вопросе:
	{
		sessionStorage.setItem('answ_q9_text', 'Борман');
		lose++;
		question__count++;
		question_10();
	}else if ( question__count == 10 ) // 1 кнопка нажата при 10 вопросе:
	{
		sessionStorage.setItem('answ_q10_text', 'Река Висла');
		lose++;
		question__count++;
		question_11();
	}else if ( question__count == 11 ) // 1 кнопка нажата при 11 вопросе:
	{
		sessionStorage.setItem('1_answ_q11', 'win');
		sessionStorage.setItem('answ_q11_text', 'Вейдлинг');
		win++;
		question__count++;
		question_12();
	}else if ( question__count == 12 ) // 1 кнопка нажата при 12 вопросе:
	{
		sessionStorage.setItem('1_answ_q12', 'win');
		sessionStorage.setItem('answ_q12_text', '30 Апреля 1945 года');
		win++;
		question__count++;
		question_13();
	}else if ( question__count == 13 ) // 1 кнопка нажата при 13 вопросе:
	{
		sessionStorage.setItem('answ_q13_text', 'Чуйков');
		lose++;
		question__count++;
		question_14();
	}else if ( question__count == 14 ) // 1 кнопка нажата при 14 вопросе:
	{
		sessionStorage.setItem('answ_q14_text', '9 мая 1945 года, Жуков');
		lose++;
		question__count++;
		question_15();
	}else if ( question__count == 15 ) // 1 кнопка нажата при 15 вопросе:
	{
		sessionStorage.setItem('answ_q15_text', 'Около 1200 воинов');
		lose++;
		question__count++;
		question_16();
	}else if ( question__count == 16 ) // 1 кнопка нажата при 16 вопросе:
	{
		sessionStorage.setItem('answ_q16_text', 'А.И. Негода');
		lose++;
		question__count++;
		question_17();
	}else if ( question__count == 17 ) // 1 кнопка нажата при 17 вопросе:
	{
		sessionStorage.setItem('answ_q17_text', '8 мая');
		lose++;
		question__count++;
		question_18();
	}else if ( question__count == 18 ) // 1 кнопка нажата при 18 вопросе:
	{
		sessionStorage.setItem('1_answ_q18', 'win');
		sessionStorage.setItem('answ_q18_text', 'План войны союзников против СССР');
		win++;
		question__count++;
		question_19();
	}else if ( question__count == 19 ) // 1 кнопка нажата при 19 вопросе:
	{
		sessionStorage.setItem('1_answ_q19', 'win');
		sessionStorage.setItem('answ_q19_text', '1-й Белорусский и 1-й Украинский');
		win++;
		question__count++;
		question_20();
	}else if ( question__count == 20 ) // 1 кнопка нажата при 20 вопросе:
	{
		sessionStorage.setItem('answ_q20_text', 'И.С. Конев');
		lose++;
		end_quest();
	}
}

// 2
function clicked__button__question__2()
{
	if ( question__count == 2 ) // 2 кнопка нажата при 2 вопросе:
	{
		sessionStorage.setItem('answ_q2_text', '18');
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 2 кнопка нажата при 3 вопросе:
	{
		sessionStorage.setItem('2_answ_q3', 'win');
		sessionStorage.setItem('answ_q3_text', '"Мы из Ельца"');
		win++;
		question__count++;
		question_4();
	}else if ( question__count == 4 ) // 2 кнопка нажата при 4 вопросе:
	{
		sessionStorage.setItem('2_answ_q4', 'win');
		sessionStorage.setItem('answ_q4_text', 'Знамя победы');
		win++;
		question__count++;
		question_5();
	}else if ( question__count == 5 ) // 2 кнопка нажата при 5 вопросе:
	{
		sessionStorage.setItem('answ_q5_text', '26 мая 1945 года');
		lose++;
		question__count++;
		question_6();
	}else if ( question__count == 8 ) // 2 кнопка нажата при 8 вопросе:
	{
		sessionStorage.setItem('2_answ_q8', 'win');
		sessionStorage.setItem('answ_q8_text', 'Польши');
		win++;
		question__count++;
		question_9();
	}else if ( question__count == 9 ) // 2 кнопка нажата при 9 вопросе:
	{
		sessionStorage.setItem('answ_q9_text', 'Гимлер');
		lose++;
		question__count++;
		question_10();
	}else if ( question__count == 10 ) // 2 кнопка нажата при 10 вопросе:
	{
		sessionStorage.setItem('2_answ_q10', 'win');
		sessionStorage.setItem('answ_q10_text', 'Река Одер');
		win++;
		question__count++;
		question_11();
	}else if ( question__count == 11 ) // 2 кнопка нажата при 11 вопросе:
	{
		sessionStorage.setItem('answ_q11_text', 'Кейтель');
		lose++;
		question__count++;
		question_12();
	}else if ( question__count == 12 ) // 2 кнопка нажата при 12 вопросе:
	{
		sessionStorage.setItem('answ_q12_text', '1 мая 1945 года');
		lose++;
		question__count++;
		question_13();
	}else if ( question__count == 13 ) // 2 кнопка нажата при 13 вопросе:
	{
		sessionStorage.setItem('answ_q13_text', 'Кантария');
		lose++;
		question__count++;
		question_14();
	}else if ( question__count == 14 ) // 2 кнопка нажата при 14 вопросе:
	{
		sessionStorage.setItem('answ_q14_text', '15 мая 1945 года, Василевский');
		lose++;
		question__count++;
		question_15();
	}else if ( question__count == 15 ) // 2 кнопка нажата при 15 вопросе:
	{
		sessionStorage.setItem('2_answ_q15', 'win');
		sessionStorage.setItem('answ_q15_text', 'Около 1082 воина');
		win++;
		question__count++;
		question_16();
	}else if ( question__count == 16 ) // 2 кнопка нажата при 16 вопросе:
	{
		sessionStorage.setItem('answ_q16_text', 'И.С. Конев');
		lose++;
		question__count++;
		question_17();
	}else if ( question__count == 17 ) // 2 кнопка нажата при 17 вопросе:
	{
		sessionStorage.setItem('answ_q17_text', '9 мая');
		lose++;
		question__count++;
		question_18();
	}else if ( question__count == 18 ) // 2 кнопка нажата при 18 вопросе:
	{
		sessionStorage.setItem('answ_q18_text', 'Подписание союзниками сепаратного мира с Германией');
		lose++;
		question__count++;
		question_19();
	}else if ( question__count == 19 ) // 2 кнопка нажата при 19 вопросе:
	{
		sessionStorage.setItem('answ_q19_text', '2-й Белорусский и 1-й Украинский');
		lose++;
		question__count++;
		question_20();
	}else if ( question__count == 20 ) // 2 кнопка нажата при 20 вопросе:
	{
		sessionStorage.setItem('2_answ_q20', 'win');
		sessionStorage.setItem('answ_q20_text', 'Г.К. Жуков');
		win++;
		end_quest();
	}
}

// 3
function clicked__button__question__3()
{
	if ( question__count == 2 ) // 3 кнопка нажата при 2 вопросе:
	{
		sessionStorage.setItem('answ_q2_text', '24');
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 3 кнопка нажата при 3 вопросе:
	{
		sessionStorage.setItem('answ_q3_text', '"Берлин наш!"');
		lose++;
		question__count++;
		question_4();
	}else if ( question__count == 4 ) // 3 кнопка нажата при 4 вопросе:
	{
		sessionStorage.setItem('answ_q4_text', 'Знамя Отечества');
		lose++;
		question__count++;
		question_5();
	}else if ( question__count == 5 ) // 3 кнопка нажата при 5 вопросе:
	{
		sessionStorage.setItem('3_answ_q5', 'win');
		sessionStorage.setItem('answ_q5_text', '16 апреля 1945 года');
		win++;
		question__count++;
		question_6();
	}else if ( question__count == 8 ) // 3 кнопка нажата при 8 вопросе:
	{
		sessionStorage.setItem('answ_q8_text', 'Чехии');
		lose++;
		question__count++;
		question_9();
	}else if ( question__count == 9 ) // 3 кнопка нажата при 9 вопросе:
	{
		sessionStorage.setItem('answ_q9_text', 'Геринг');
		lose++;
		question__count++;
		question_10();
	}else if ( question__count == 10 ) // 3 кнопка нажата при 10 вопросе:
	{
		sessionStorage.setItem('answ_q10_text', 'Река Эльба');
		lose++;
		question__count++;
		question_11();
	}else if ( question__count == 11 ) // 3 кнопка нажата при 11 вопросе:
	{
		sessionStorage.setItem('answ_q11_text', 'Кребс');
		lose++;
		question__count++;
		question_12();
	}else if ( question__count == 12 ) // 3 кнопка нажата при 12 вопросе:
	{
		sessionStorage.setItem('answ_q12_text', '29 Апреля 1945 года');
		lose++;
		question__count++;
		question_13();
	}else if ( question__count == 13 ) // 3 кнопка нажата при 13 вопросе:
	{
		sessionStorage.setItem('3_answ_q13', 'win');
		sessionStorage.setItem('answ_q13_text', 'Егоров');
		win++;
		question__count++;
		question_14();
	}else if ( question__count == 14 ) // 3 кнопка нажата при 14 вопросе:
	{
		sessionStorage.setItem('answ_q14_text', '5 июня 1945 года, Егоров');
		lose++;
		question__count++;
		question_15();
	}else if ( question__count == 15 ) // 3 кнопка нажата при 15 вопросе:
	{
		sessionStorage.setItem('answ_q15_text', 'Около 1500 воинов');
		lose++;
		question__count++;
		question_16();
	}else if ( question__count == 16 ) // 3 кнопка нажата при 16 вопросе:
	{
		sessionStorage.setItem('3_answ_q16', 'win');
		sessionStorage.setItem('answ_q16_text', 'В.М. Шатилов');
		win++;
		question__count++;
		question_17();
	}else if ( question__count == 17 ) // 3 кнопка нажата при 17 вопросе:
	{
		sessionStorage.setItem('3_answ_q17', 'win');
		sessionStorage.setItem('answ_q17_text', '2 мая');
		win++;
		question__count++;
		question_18();
	}else if ( question__count == 18 ) // 3 кнопка нажата при 18 вопросе:
	{
		sessionStorage.setItem('answ_q18_text', 'План взятия Берлина');
		lose++;
		question__count++;
		question_19();
	}else if ( question__count == 20 ) // 3 кнопка нажата при 20 вопросе:
	{
		sessionStorage.setItem('answ_q20_text', 'К.К. Рокоссовский');
		lose++;
		end_quest();
	}
}

// 4
function clicked__button__question__4()
{
	if ( question__count == 2 ) // 4 кнопка нажата при 2 вопросе:
	{
		sessionStorage.setItem('4_answ_q2', 'win');
		sessionStorage.setItem('answ_q2_text', '23');
		win++;
		question__count++;
		question_3();
	}else if ( question__count == 4 ) // 4 кнопка нажата при 4 вопросе:
	{
		sessionStorage.setItem('answ_q4_text', 'Знамя Отечества');
		lose++;
		question__count++;
		question_5();
	}else if ( question__count == 5 ) // 4 кнопка нажата при 5 вопросе:
	{
		sessionStorage.setItem('answ_q5_text', '18 марта 1944 года');
		lose++;
		question__count++;
		question_6();
	}else if ( question__count == 8 ) // 4 кнопка нажата при 8 вопросе:
	{
		sessionStorage.setItem('answ_q8_text', 'Югославии');
		lose++;
		question__count++;
		question_9();
	}else if ( question__count == 9 ) // 4 кнопка нажата при 9 вопросе:
	{
		sessionStorage.setItem('4_answ_q9', 'win');
		sessionStorage.setItem('answ_q9_text', 'Дёниц');
		win++;
		question__count++;
		question_10();
	}else if ( question__count == 14 ) // 4 кнопка нажата при 14 вопросе:
	{
		sessionStorage.setItem('answ_q14_text', '28 мая 1945 года, Конев');
		lose++;
		question__count++;
		question_15();
	}else if ( question__count == 20 ) // 4 кнопка нажата при 20 вопросе:
	{
		sessionStorage.setItem('answ_q20_text', 'В.М. Мамонтов');
		lose++;
		end_quest();
	}
}

// 5
function clicked__button__question__5()
{
	if ( question__count == 2 ) // 5 кнопка нажата при 2 вопросе:
	{
		sessionStorage.setItem('answ_q2_text', '58');
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 4 ) // 5 кнопка нажата при 4 вопросе:
	{
		sessionStorage.setItem('answ_q4_text', 'Знамя Отечества');
		lose++;
		question__count++;
		question_5();
	}else if ( question__count == 14 ) // 5 кнопка нажата при 14 вопросе:
	{
		sessionStorage.setItem('5_answ_q14', 'win');
		sessionStorage.setItem('answ_q14_text', '28 июня 1945 года, Рокоссовский');
		win++;
		question__count++;
		question_15();
	}
}



// Тех. часть:

// 2 вопрос:
function question_2()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Сколько дней продолжалась Берлинская наступательная операция?"); // Текст вопроса.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		$("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();


		$("#button__questions__5").text("58");
		$("#button__questions__4").text("23");
		$("#button__questions__3").text("24");
		$("#button__questions__2").text("18");
		$("#button__questions__1").text("36"); // Ставим текст на кнопку.
		$(".counter__questions").text("2 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800)
}

// 3 вопрос:
function question_3()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Что за надпись на стене Рейхстага увековечила название одного из древнейших городов Липецкой области?"); // Текст вопроса.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("«Берлин наш!»"); // Ставим текст на кнопку.
		$("#button__questions__2").text("«Мы из Ельца!»"); // Ставим текст на кнопку.
		$("#button__questions__1").text("«За победу!»"); // Ставим текст на кнопку.
		$(".counter__questions").text("3 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 4 вопрос:
function question_4()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Как  после  1 мая 1945 года стали называть штурмовой флаг 150-й ордена Кутузова II степени Идрицкой стрелковой дивизии?"); // Текст вопроса.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("Знамя Отечества"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Знамя Победы"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Знамя Красной армии"); // Ставим текст на кнопку.
		$(".counter__questions").text("4 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 5 вопрос:
function question_5()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Когда началась Берлинская наступательная операция советских войск?"); // Текст вопроса.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__4").text("18 марта 1944 года"); // Ставим текст на кнопку.
		$("#button__questions__3").text("16 апреля 1945 года"); // Ставим текст на кнопку.
		$("#button__questions__2").text("26 мая 1945 года"); // Ставим текст на кнопку.
		$("#button__questions__1").text("12 февраля 1944 года"); // Ставим текст на кнопку.
		$(".counter__questions").text("5 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 6 вопрос:
function question_6()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){
		$(".text__questions").text(name + ", Напиши фамилию маршала первого Белорусского фронта во время взятия Берлина."); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").show(); // Показываем тектовое поле.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		// $("#button__questions__5").hide();
		// $("#button__questions__4").hide();
		// $("#button__questions__3").hide();
		// $("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		// $("#button__questions__3").show();
		// $("#button__questions__2").show();
		$("#button__questions__1").show();


		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").text("Ответить"); // Ставим текст на кнопку.
		$(".counter__questions").text("6 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 7 вопрос:
function question_7()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("На каком объекте Берлина было установлено красное знамя, позднее названное Знаменем Победы?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").show(); // Показываем тектовое поле.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		// $("#button__questions__5").hide();
		// $("#button__questions__4").hide();
		// $("#button__questions__3").hide();
		// $("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		// $("#button__questions__3").show();
		// $("#button__questions__2").show();
		$("#button__questions__1").show();


		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").text("Ответить"); // Ставим текст на кнопку.
		$(".counter__questions").text("7 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800)
}

// 8 вопрос:
function question_8()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("В ходе второй мировой войны Красная Армия полностью освободила территорию:"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__4").text("Югославии"); // Ставим текст на кнопку.
		$("#button__questions__3").text("Чехии"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Польши"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Норвегии"); // Ставим текст на кнопку.
		$(".counter__questions").text("8 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 9 вопрос:
function question_9()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Кто после самоубийства Гитлера стал новым главой Третьего Рейха?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__4").text("Дёниц"); // Ставим текст на кнопку.
		$("#button__questions__3").text("Геринг"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Гимлер"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Борман"); // Ставим текст на кнопку.
		$(".counter__questions").text("9 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 10 вопрос:
function question_10()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Как называлась последняя крупная водная преграда перед Берлином?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("Река Эльба"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Река Одер"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Река Висла"); // Ставим текст на кнопку.
		$(".counter__questions").text("10 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 11 вопрос:
function question_11()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Кто командовал обороной Берлина?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("Кребс"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Кейтель"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Вейдлинг"); // Ставим текст на кнопку.
		$(".counter__questions").text("11 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 12 вопрос:
function question_12()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Когда было водружено Знамя Победы над Рейхстагом?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("29 апреля 1945 года "); // Ставим текст на кнопку.
		$("#button__questions__2").text("1 мая 1945 года"); // Ставим текст на кнопку.
		$("#button__questions__1").text("30 апреля 1945 года"); // Ставим текст на кнопку.
		$(".counter__questions").text("12 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 13 вопрос:
function question_13()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Кто водрузил Знамя Победы над Рейхстагом?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("Егоров"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Кантария"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Чуйков"); // Ставим текст на кнопку.
		$(".counter__questions").text("13 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 14 вопрос:
function question_14()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Когда был проведен Парад Победы на Красной площади в Москве? Кто им командовал?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		$("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();


		$("#button__questions__5").text("24 июня 1945 года, Рокоссовский"); // Ставим текст на кнопку.
		$("#button__questions__4").text("28 мая 1945 года, Конев"); // Ставим текст на кнопку.
		$("#button__questions__3").text("5 июня 1945 года, Егоров"); // Ставим текст на кнопку.
		$("#button__questions__2").text("15 мая 1945 года, Василевский"); // Ставим текст на кнопку.
		$("#button__questions__1").text("9 мая 1945 года, Жуков"); // Ставим текст на кнопку.
		$(".counter__questions").text("14 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 15 вопрос:
function question_15()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text(name + ", проверим твою внимательность, какое количество воинов было награждено медалью «За взятие Берлина»? Ответ на этот вопрос был в тексте первого вопроса."); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("Около 1500 воинов"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Около 1082 воина"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Около 1200 воинов"); // Ставим текст на кнопку.
		$(".counter__questions").text("15 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 16 вопрос:
function question_16()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Кто командовал 150-й стрелковой дивизией?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("В.М. Шатилов"); // Ставим текст на кнопку.
		$("#button__questions__2").text("И.С. Конев"); // Ставим текст на кнопку.
		$("#button__questions__1").text("А.И. Негода"); // Ставим текст на кнопку.
		$(".counter__questions").text("16 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 17 вопрос:
function question_17()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Какого числа закончилась Берлинская операция?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("2 мая"); // Ставим текст на кнопку.
		$("#button__questions__2").text("9 мая"); // Ставим текст на кнопку.
		$("#button__questions__1").text("8 мая"); // Ставим текст на кнопку.
		$(".counter__questions").text("17 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 18 вопрос:
function question_18()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Операция «Немыслимое» это:"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__3").text("План взятия Берлина"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Подписание союзниками сепаратного мира с Германией"); // Ставим текст на кнопку.
		$("#button__questions__1").text("План войны союзников против СССР"); // Ставим текст на кнопку.
		$(".counter__questions").text("18 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 19 вопрос:
function question_19()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Какие два фронта окружили Берлин?"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		// $("#button__questions__4").show();
		// $("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__2").text("2-й Белорусский и 1-й Украинский"); // Ставим текст на кнопку.
		$("#button__questions__1").text("1-й Белорусский и 1-й Украинский"); // Ставим текст на кнопку.
		$(".counter__questions").text("19 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

// 20 вопрос:
function question_20()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Советский военачальник, подписавший акт о капитуляции Германии от имени СССР:"); // Текст вопроса.
		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();

		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:
		// $("#button__questions__5").show();
		$("#button__questions__4").show();
		$("#button__questions__3").show();
		$("#button__questions__2").show();
		$("#button__questions__1").show();

		$("#button__questions__4").text("В.М. Мамонтов"); // Ставим текст на кнопку.
		$("#button__questions__3").text("К.К. Рокоссовский"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Г.К. Жуков"); // Ставим текст на кнопку.
		$("#button__questions__1").text("И.С. Конев"); // Ставим текст на кнопку.
		$(".counter__questions").text("20 / 20"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800);
}



// Окончание квеста:
function end_quest()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Вопросы закончились, надеюсь тебе понравилось. Самое время проверить твои ответы!");
		$('#doGoFinishTest').show();

		/* Записываем в сессию значения нужных переменных: */
		sessionStorage.setItem('win', win);
		sessionStorage.setItem('name', name);
		sessionStorage.setItem('surname', surname);
		sessionStorage.setItem('group', number__group_1 +'-'+ number__group_2);

		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();
		$('#button__go__to__index').show();
		$(".counter__questions").hide(); // Счётчик вопросов.

		$("#button__get__static__user").show();
		
		$(".section__questions__quest").slideToggle(700);
	}, 800);
}

function get__static__user__answers()
{
	$(".section__questions__quest").slideToggle(700);

	/* Записываем в сессию значения нужных переменных: */
	sessionStorage.setItem('win', win);
	sessionStorage.setItem('name', name);
	sessionStorage.setItem('lose_answers', name);

	setTimeout(function(){

		if ( win < 10 &&  win > 5 ) // Если правильных ответов меньше 10 но больше 5:
		{
			$(".text__questions").text(name + ", правильных ответов у тебя: "+ win + " из 20. Это не очень много, меньше половины. А вот неправильных ответов: "+ lose +". Видимо тебе стоит ещё лучше узнать о великой Отечественной войне. Оценка «3».");
			$('#doGoFinishTest').show();
		}else if ( win > 10 && win < 20 ) // Если правильных ответов больше 10 но меньше 20:
		{
			$(".text__questions").text(name + ", правильных ответов у тебя: "+ win + " из 20. Это хороший результат, но можно было лучше, всё же неправильных ответов у тебя: "+ lose +". Результат на «4».");
			$('#doGoFinishTest').show();
		}else if ( win == 20 ) // Если всё правильно:
		{
			$(".text__questions").text(name + ", это идеально! Правильных ответов у тебя: "+ win + " из 20. Это отличный результат, ты идеально знаешь историю взятия Берлина и самой Великой Отечественной войны! Ты "+ povisil +" репутацию своей группы. Неправильных ответов: "+ lose +". Результат на твёрдую «5».");
		}else if ( win < 5 ) // Если правильных ответов меньше 5:
		{
			$(".text__questions").text(name + ", это очень плохо! Правильных ответов у тебя: "+ win + " из 20. Это худший результат, тебе нужно лучше знать историю Великой Отечественной войны. Неправильных ответов: "+ lose +", ты очень сильно "+ podvel +" группу "+ number__group_1 +"-"+ number__group_2 +". Результат на твёрдую «2».");
			$('#doGoFinishTest').show();
		}

		$("#text__answer__from__user").val(""); // Очистка тектового поля для дальнейшего заполнения.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.

		// Скрытие кнопок: ( Исправление бага на мобильной версии )
		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").hide();
		$("#button__questions__2").hide();
		$("#button__questions__1").hide();
		$(".counter__questions").show(); // Счётчик вопросов.
		$(".counter__questions").text("Квест окончен!"); // Счётчик вопросов.

		$("#button__get__static__user").hide();
		$("#button__go__to__index").show();
		
		$(".section__questions__quest").slideToggle(700);
	}, 800);
}