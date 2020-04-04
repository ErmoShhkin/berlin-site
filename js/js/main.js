function testong() // Нажата кнопка регистрации квеста:
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

		$(".block__get__info__user").fadeToggle(100); // Убираем блок сбора данных о пользователе.

		setTimeout(function(){ // Выполнение кода только после прошедшей секунды.
			$(".block__osn__question").fadeToggle(100); // Показываем блок с заданиями.
		}, 1000);
	}

}



// Начало квеста:

function start__quest()
{
	alert("test"); // ПРОДОЛЖИТЬ ТУТ!
}