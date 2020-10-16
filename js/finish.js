/* Перенаправление обратно на тест, если сессии пустые: */
if (sessionStorage.getItem('name') == null) {
	document.location.href = 'quest.html';
}

$('#winAnswers').text(sessionStorage.getItem('win'));
$('#loseAnswers').text(20 - sessionStorage.getItem('win'));
$('#nameAnswers').text(sessionStorage.getItem('name'));
$('#surnameAnswers').text(sessionStorage.getItem('surname'));
$('#groupAnswers').text(sessionStorage.getItem('group'));
$('#15_q').html(sessionStorage.getItem('name')+', проверим твою внимательность, какое количество воинов было награждено медалью «За взятие Берлина»? Ответ на этот вопрос был в тексте первого вопроса.');

/* Расставка (Правильный \ Неправильный) вопрос: */
/* Вопрос 1: */
if (sessionStorage.getItem('1_answ_q1') == 'win') {
	$('#title_q1').css('color', 'green');
	$('#title_q1').text('(Правильный)');
}else {
	$('#title_q1').css('color', 'red');
	$('#title_q1').text('(Неправильный)');
}
/* Вопрос 2: */
if (sessionStorage.getItem('4_answ_q2') == 'win') {
	$('#title_q2').css('color', 'green');
	$('#title_q2').text('(Правильный)');
}else {
	$('#title_q2').css('color', 'red');
	$('#title_q2').text('(Неправильный)');
}
/* Вопрос 3: */
if (sessionStorage.getItem('2_answ_q3') == 'win') {
	$('#title_q3').css('color', 'green');
	$('#title_q3').text('(Правильный)');
}else {
	$('#title_q3').css('color', 'red');
	$('#title_q3').text('(Неправильный)');
}
/* Вопрос 4: */
if (sessionStorage.getItem('2_answ_q4') == 'win') {
	$('#title_q4').css('color', 'green');
	$('#title_q4').text('(Правильный)');
}else {
	$('#title_q4').css('color', 'red');
	$('#title_q4').text('(Неправильный)');
}
/* Вопрос 5: */
if (sessionStorage.getItem('3_answ_q5') == 'win') {
	$('#title_q5').css('color', 'green');
	$('#title_q5').text('(Правильный)');
}else {
	$('#title_q5').css('color', 'red');
	$('#title_q5').text('(Неправильный)');
}
/* Вопрос 6: */
if (sessionStorage.getItem('1_answ_q6') == 'win') {
	$('#title_q6').css('color', 'green');
	$('#title_q6').text('(Правильный)');
}else {
	$('#title_q6').css('color', 'red');
	$('#title_q6').text('(Неправильный)');
}
/* Вопрос 7: */
if (sessionStorage.getItem('1_answ_q7') == 'win') {
	$('#title_q7').css('color', 'green');
	$('#title_q7').text('(Правильный)');
}else {
	$('#title_q7').css('color', 'red');
	$('#title_q7').text('(Неправильный)');
}
/* Вопрос 8: */
if (sessionStorage.getItem('2_answ_q8') == 'win') {
	$('#title_q8').css('color', 'green');
	$('#title_q8').text('(Правильный)');
}else {
	$('#title_q8').css('color', 'red');
	$('#title_q8').text('(Неправильный)');
}
/* Вопрос 9: */
if (sessionStorage.getItem('4_answ_q9') == 'win') {
	$('#title_q9').css('color', 'green');
	$('#title_q9').text('(Правильный)');
}else {
	$('#title_q9').css('color', 'red');
	$('#title_q9').text('(Неправильный)');
}
/* Вопрос 10: */
if (sessionStorage.getItem('2_answ_q10') == 'win') {
	$('#title_q10').css('color', 'green');
	$('#title_q10').text('(Правильный)');
}else {
	$('#title_q10').css('color', 'red');
	$('#title_q10').text('(Неправильный)');
}
/* Вопрос 11: */
if (sessionStorage.getItem('1_answ_q11') == 'win') {
	$('#title_q11').css('color', 'green');
	$('#title_q11').text('(Правильный)');
}else {
	$('#title_q11').css('color', 'red');
	$('#title_q11').text('(Неправильный)');
}
/* Вопрос 12: */
if (sessionStorage.getItem('1_answ_q12') == 'win') {
	$('#title_q12').css('color', 'green');
	$('#title_q12').text('(Правильный)');
}else {
	$('#title_q12').css('color', 'red');
	$('#title_q12').text('(Неправильный)');
}
/* Вопрос 13: */
if (sessionStorage.getItem('3_answ_q13') == 'win') {
	$('#title_q13').css('color', 'green');
	$('#title_q13').text('(Правильный)');
}else {
	$('#title_q13').css('color', 'red');
	$('#title_q13').text('(Неправильный)');
}
/* Вопрос 14: */
if (sessionStorage.getItem('5_answ_q14') == 'win') {
	$('#title_q14').css('color', 'green');
	$('#title_q14').text('(Правильный)');
}else {
	$('#title_q14').css('color', 'red');
	$('#title_q14').text('(Неправильный)');
}
/* Вопрос 15: */
if (sessionStorage.getItem('2_answ_q15') == 'win') {
	$('#title_q15').css('color', 'green');
	$('#title_q15').text('(Правильный)');
}else {
	$('#title_q15').css('color', 'red');
	$('#title_q15').text('(Неправильный)');
}
/* Вопрос 16: */
if (sessionStorage.getItem('3_answ_q16') == 'win') {
	$('#title_q16').css('color', 'green');
	$('#title_q16').text('(Правильный)');
}else {
	$('#title_q16').css('color', 'red');
	$('#title_q16').text('(Неправильный)');
}
/* Вопрос 17: */
if (sessionStorage.getItem('3_answ_q17') == 'win') {
	$('#title_q17').css('color', 'green');
	$('#title_q17').text('(Правильный)');
}else {
	$('#title_q17').css('color', 'red');
	$('#title_q17').text('(Неправильный)');
}
/* Вопрос 18: */
if (sessionStorage.getItem('1_answ_q18') == 'win') {
	$('#title_q18').css('color', 'green');
	$('#title_q18').text('(Правильный)');
}else {
	$('#title_q18').css('color', 'red');
	$('#title_q18').text('(Неправильный)');
}
/* Вопрос 19: */
if (sessionStorage.getItem('1_answ_q19') == 'win') {
	$('#title_q19').css('color', 'green');
	$('#title_q19').text('(Правильный)');
}else {
	$('#title_q19').css('color', 'red');
	$('#title_q19').text('(Неправильный)');
}
/* Вопрос 20: */
if (sessionStorage.getItem('2_answ_q20') == 'win') {
	$('#title_q20').css('color', 'green');
	$('#title_q20').text('(Правильный)');
}else {
	$('#title_q20').css('color', 'red');
	$('#title_q20').text('(Неправильный)');
}

/* Выставление ответов пользователя на вопросах: */
/* Вопрос 1: */
$('#answer_user_q1').text(sessionStorage.getItem('answ_q1_text'));
/* Вопрос 2: */
$('#answer_user_q2').text(sessionStorage.getItem('answ_q2_text'));
/* Вопрос 3: */
$('#answer_user_q3').text(sessionStorage.getItem('answ_q3_text'));
/* Вопрос 4: */
$('#answer_user_q4').text(sessionStorage.getItem('answ_q4_text'));
/* Вопрос 5: */
$('#answer_user_q5').text(sessionStorage.getItem('answ_q5_text'));
/* Вопрос 6: */
$('#answer_user_q6').text(sessionStorage.getItem('answ_q6_text'));
/* Вопрос 7: */
$('#answer_user_q7').text(sessionStorage.getItem('answ_q7_text'));
/* Вопрос 8: */
$('#answer_user_q8').text(sessionStorage.getItem('answ_q8_text'));
/* Вопрос 9: */
$('#answer_user_q9').text(sessionStorage.getItem('answ_q9_text'));
/* Вопрос 10: */
$('#answer_user_q10').text(sessionStorage.getItem('answ_q10_text'));
/* Вопрос 11: */
$('#answer_user_q11').text(sessionStorage.getItem('answ_q11_text'));
/* Вопрос 12: */
$('#answer_user_q12').text(sessionStorage.getItem('answ_q12_text'));
/* Вопрос 13: */
$('#answer_user_q13').text(sessionStorage.getItem('answ_q13_text'));
/* Вопрос 14: */
$('#answer_user_q14').text(sessionStorage.getItem('answ_q14_text'));
/* Вопрос 15: */
$('#answer_user_q15').text(sessionStorage.getItem('answ_q15_text'));
/* Вопрос 16: */
$('#answer_user_q16').text(sessionStorage.getItem('answ_q16_text'));
/* Вопрос 17: */
$('#answer_user_q17').text(sessionStorage.getItem('answ_q17_text'));
/* Вопрос 18: */
$('#answer_user_q18').text(sessionStorage.getItem('answ_q18_text'));
/* Вопрос 19: */
$('#answer_user_q19').text(sessionStorage.getItem('answ_q19_text'));
/* Вопрос 20: */
$('#answer_user_q20').text(sessionStorage.getItem('answ_q20_text'));