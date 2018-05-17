var kopchePamti;

function namestiGolemina() {
	document.getElementById('bigNav').style.height = '1px';
	var teloH = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight;
	var logoH = document.getElementById('logo').offsetHeight;
	logoH += parseInt(window.getComputedStyle(document.getElementById('logo')).marginTop, 10);
   logoH += parseInt(window.getComputedStyle(document.getElementById('logo')).marginBottom, 10);
   logoH += document.getElementById('linija').offsetHeight;
	var teloMinusLogoH = teloH - logoH;
	document.getElementById('bigNav').style.height = teloMinusLogoH + 'px';
	document.getElementById('ramka').style.height = teloMinusLogoH + 'px';
	document.getElementById('topka').style.height = teloMinusLogoH + 'px';
	var teloW = "innerWidth" in window 
               ? window.innerWidth
               : document.documentElement.offsetWidth;
	document.getElementById('topka').style.top = logoH + 4 + 'px';
	document.getElementById('topka').style.left = (teloW / 2) - (teloMinusLogoH / 2) + 'px';
}

window.onresize = function(event) {
	document.getElementById('bigNav').style.height = '1px';
	var teloH = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight;
	var logoH = document.getElementById('logo').offsetHeight;
	logoH += parseInt(window.getComputedStyle(document.getElementById('logo')).marginTop, 10);
   logoH += parseInt(window.getComputedStyle(document.getElementById('logo')).marginBottom, 10);
   logoH += document.getElementById('linija').offsetHeight;
	var teloMinusLogoH = teloH - logoH;
	document.getElementById('bigNav').style.height = teloMinusLogoH + 'px';
	document.getElementById('ramka').style.height = teloMinusLogoH + 'px';
	document.getElementById('topka').style.height = teloMinusLogoH + 'px';
	var teloW = "innerWidth" in window 
               ? window.innerWidth
               : document.documentElement.offsetWidth;
	document.getElementById('topka').style.top = logoH + 4 + 'px';
	document.getElementById('topka').style.left = (teloW / 2) - (teloMinusLogoH / 2) + 'px';
};

function posiviGi(uslov) {
	if(uslov) {
		document.getElementById('vulkan').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('drvo').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('sonce').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('atom').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('bran').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('voda').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('maslo').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
		document.getElementById('veter').style.filter = 'blur(4px) grayscale(1.0) opacity(0.5)';
	} else {
		document.getElementById('vulkan').style.filter = '';
		document.getElementById('drvo').style.filter = '';
		document.getElementById('sonce').style.filter = '';
		document.getElementById('atom').style.filter = '';
		document.getElementById('bran').style.filter = '';
		document.getElementById('voda').style.filter = '';
		document.getElementById('maslo').style.filter = '';
		document.getElementById('veter').style.filter = '';
	}
}

function boja(b) {
	switch(b) {
		case 'crvena':
			document.getElementById('logo').textContent = 'ГЕОТЕРМАЛНА';
			document.getElementById('telo').style.backgroundColor = '#E8D8DA';
			document.getElementById('logo').style.color = '#BB5547';
			document.getElementById('linija').style.color = '#BB5547';
			posiviGi(true);
			document.getElementById('vulkan').style.filter = '';
			break;
		case 'kafeava':
			document.getElementById('logo').textContent = 'БИОМАСНА';
			document.getElementById('telo').style.backgroundColor = '#E8E2DA';
			document.getElementById('logo').style.color = '#BB8E47';
			document.getElementById('linija').style.color = '#BB8E47';
			posiviGi(true);
			document.getElementById('drvo').style.filter = '';
			break;
		case 'zholta':
			document.getElementById('logo').textContent = 'СОЛАРНА';
			document.getElementById('telo').style.backgroundColor = '#E7E8DA';
			document.getElementById('logo').style.color = '#ACBB47';
			document.getElementById('linija').style.color = '#ACBB47';
			posiviGi(true);
			document.getElementById('sonce').style.filter = '';
			break;
		case 'zelena':
			document.getElementById('logo').textContent = 'НУКЛЕАРНА';
			document.getElementById('telo').style.backgroundColor = '#DAE8DB';
			document.getElementById('logo').style.color = '#47BB58';
			document.getElementById('linija').style.color = '#47BB58';
			posiviGi(true);
			document.getElementById('atom').style.filter = '';
			break;
		case 'cijan':
			document.getElementById('logo').textContent = 'ОКЕАНСКА';
			document.getElementById('telo').style.backgroundColor = '#DAE7E8';
			document.getElementById('logo').style.color = '#47ACBB';
			document.getElementById('linija').style.color = '#47ACBB';
			posiviGi(true);
			document.getElementById('bran').style.filter = '';
			break;
		case 'sina':
			document.getElementById('logo').textContent = 'ХИДРО';
			document.getElementById('telo').style.backgroundColor = '#DAE0E8';
			document.getElementById('logo').style.color = '#4773BB';
			document.getElementById('linija').style.color = '#4773BB';
			posiviGi(true);
			document.getElementById('voda').style.filter = '';
			break;
		case 'violetova':
			document.getElementById('logo').textContent = 'ФОСИЛСКА';
			document.getElementById('telo').style.backgroundColor = '#E2DAE8';
			document.getElementById('logo').style.color = '#8E47BB';
			document.getElementById('linija').style.color = '#8E47BB';
			posiviGi(true);
			document.getElementById('maslo').style.filter = '';
			break;
		case 'siva':
			document.getElementById('logo').textContent = 'ВЕТЕРНА';
			document.getElementById('telo').style.backgroundColor = '#E1E1E1';
			document.getElementById('logo').style.color = '#818181';
			document.getElementById('linija').style.color = '#818181';
			posiviGi(true);
			document.getElementById('veter').style.filter = '';
			break;
		case 'crna':
			document.getElementById('logo').textContent = 'ИЗВОРИ НА ЕНЕРГИЈА';
			document.getElementById('telo').style.backgroundColor = '#FFFFFF';
			document.getElementById('logo').style.color = '#000000';
			document.getElementById('linija').style.color = '';
			posiviGi(false);
	}
	if(b != 'crna') {
		document.getElementById('logo').textContent = document.getElementById('logo').textContent + ' ЕНЕРГИЈА';
	}
}

function klik(kopche) {
	kopchePamti = kopche;
	if(kopche == 'nazad') {
		document.getElementById('ramka').src = '';
		document.getElementById('bigNav').style.display = '';
		document.getElementById('nazad').style.display = 'none';
		document.getElementById('topka').style.display = 'none';
		document.getElementById('logo').textContent = 'ИЗВОРИ НА ЕНЕРГИЈА';
		document.getElementById('logo').style.color = '#000000';
	} else {
		document.getElementById('ramka').src = 'selekcijaMkL/' + kopche + '.html';
		document.getElementById('bigNav').style.display = 'none';
		document.getElementById('nazad').style.display = 'block';
		document.getElementById('topka').style.display = 'block';
		setTimeout(skrijJaTopkata, 600);
		document.getElementById('ramka').style.visibility = 'hidden';
	}
}

function skrijJaTopkata() {
	document.getElementById('topka').style.display = 'none';
	document.getElementById('ramka').style.visibility = '';
	switch(kopchePamti) {
		case 'vulkan':
			document.getElementById('logo').textContent = 'ГЕОТЕРМАЛНА';
			document.getElementById('logo').style.color = '#BB5547';
			break;
		case 'drvo':
			document.getElementById('logo').textContent = 'БИОМАСНА';
			document.getElementById('logo').style.color = '#BB8E47';
			break;
		case 'sonce':
			document.getElementById('logo').textContent = 'СОЛАРНА';
			document.getElementById('logo').style.color = '#ACBB47';
			break;
		case 'atom':
			document.getElementById('logo').textContent = 'НУКЛЕАРНА';
			document.getElementById('logo').style.color = '#47BB58';
			break;
		case 'bran':
			document.getElementById('logo').textContent = 'ОКЕАНСКА';
			document.getElementById('logo').style.color = '#47ACBB';
			break;
		case 'voda':
			document.getElementById('logo').textContent = 'ХИДРО';
			document.getElementById('logo').style.color = '#4773BB';
			break;
		case 'maslo':
			document.getElementById('logo').textContent = 'ФОСИЛСКА';
			document.getElementById('logo').style.color = '#8E47BB';
			break;
		case 'veter':
			document.getElementById('logo').textContent = 'ВЕТЕРНА';
			document.getElementById('logo').style.color = '#818181';
			break;
	}
	document.getElementById('logo').textContent = document.getElementById('logo').textContent + ' ЕНЕРГИЈА';
}