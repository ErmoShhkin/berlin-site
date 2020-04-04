function reg__func() // Нажата кнопка регистрации квеста:
{

	// Проверка на пустые поля:
	if ( $("#name__user").val() != "" && $("#surname__user").val() != "" && $("#group__number__1").val() != "" && $("#group__number__2").val() != "" )
	{
		// Создаём переменные js для более лёгкого управления данными пользователя:
		var name = $("#name__user").val(); // Имя.
		var surname = $("#surname__user").val(); // Фамилия.
		var number__group_1 = $("#group__number__1").val(); // Первый номер группы.
		var number__group_2 = $("#group__number__2").val(); // Второй номер группы.

		// Проверка введённого гендера:
		if ( $("#select__male").val() == 1 ) // Если был введён мужской пол:
		{
			// Меняем ключевые слова под мужской род:
			$("#male__sdelal").text("сделал");
			$("#male__proshel").text("прошёл");
			$("#male__videl").text("видел");
			$("#male__gotov").text("готов");
		}else if ( $("#select__male").val() == 2 ) // Если был введён женский пол:
		{
			// Меняем ключевые слова под женский род:
			$("#male__sdelal").text("сделала");
			$("#male__proshel").text("прошла");
			$("#male__videl").text("видела");
			$("#male__gotov").text("готова");
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


// ПЕРЕМЕННЫЕ:
var win = 0; // Счётчик правильных ответов.
var lose = 0; // Счётчик неправильных ответов.
var question__count = 1; // Создаём счётчик вопросов для js.


// Начало квеста:
function start__quest()
{
	$(".section__title__start__quest").slideToggle(700); // Скрытие вступительного текста перед квестом.

	$("#text__answer__from__user").show(); // Прячем тектовое поле ответа, если нужны только кнопки.
	$("#button__questions__5").hide();
	$("#button__questions__4").hide();
	$("#button__questions__3").hide();
	$("#button__questions__2").hide();
	$(".counter__questions").text("1/25");
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
			win++;
			question__count++;
			question_2(); // Вызываем функцию второго вопроса.
		}else
		{
			lose++;
			question__count++;
			question_2();
		}
	}else if ( question__count == 2 ) // 1 кнопка нажата при 2 вопросе:
	{
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 1 кнопка нажата при 3 вопросе:
	{
		lose++;
		question__count++;
		question_4();
	}
}

// 2
function clicked__button__question__2()
{
	if ( question__count == 2 ) // 2 кнопка нажата при 2 вопросе:
	{
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 2 кнопка нажата при 3 вопросе:
	{
		win++;
		question__count++;
		question_4();
	}
}

// 3
function clicked__button__question__3()
{
	if ( question__count == 2 ) // 2 кнопка нажата при 2 вопросе:
	{
		lose++;
		question__count++;
		question_3();
	}else if ( question__count == 3 ) // 3 кнопка нажата при 3 вопросе:
	{
		lose++;
		question__count++;
		question_4();
	}
}

// 4
function clicked__button__question__4()
{
	if ( question__count == 2 ) // 4 кнопка нажата при 2 вопросе:
	{
		win++;
		question__count++;
		question_3();
	}
}

// 5
function clicked__button__question__5()
{
	if ( question__count == 2 ) // 5 кнопка нажата при 2 вопросе:
	{
		lose++;
		question__count++;
		question_3();
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
		$(".counter__questions").text("2/25"); // Счётчик вопросов.

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
		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:

		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").text("«Берлин наш!»"); // Ставим текст на кнопку.
		$("#button__questions__2").text("«Мы из Ельца!»"); // Ставим текст на кнопку.
		$("#button__questions__1").text("«За победу!»"); // Ставим текст на кнопку.
		$(".counter__questions").text("3/25"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700);
	}, 800)
}

// 3 вопрос:
function question_4()
{
	$(".section__questions__quest").slideToggle(700);

	setTimeout(function(){

		$(".text__questions").text("Как  после  1 мая 1945 года стали называть штурмовой флаг 150-й ордена Кутузова II степени Идрицкой стрелковой дивизии?"); // Текст вопроса.
		$("#text__answer__from__user").hide(); // Прячем тектовое поле ответа, если нужны только кнопки.
		// Показываем спрятанные ранее кнопки чтобы в них написать варианты ответов:

		$("#button__questions__5").hide();
		$("#button__questions__4").hide();
		$("#button__questions__3").text("Знамя Победы"); // Ставим текст на кнопку.
		$("#button__questions__2").text("Знамя отечества"); // Ставим текст на кнопку.
		$("#button__questions__1").text("Знамя Красной армии"); // Ставим текст на кнопку.
		$(".counter__questions").text("3/25"); // Счётчик вопросов.

		$(".section__questions__quest").slideToggle(700); // ПРОДОЛЖИТЬ ТУТ!
	}, 800)
}
