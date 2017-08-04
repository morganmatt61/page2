$( document ).ready(function(){
	console.log('doc ready');
	$('#aboutMe').load('aboutMe.html');
	$('#skills').load('skills.html');
	$('#objectives').load('objectives.html');
	$('#contact').load('contact.html');
	$('#footer').load('footer.html');
});

function showBody(body){
	$('.contentBody').css('display', 'none');
	$('#' + body).css('display', 'block');
}

function showSkill(skill){
	$('.skillDisplay').css('display', 'none');
	$('#' + skill + 'Skills').css('display', 'block');
	$('#skillsBar li').removeClass('active');
	console.log(skill);
	$('#' + skill + 'Pill').parent().addClass('active');
}