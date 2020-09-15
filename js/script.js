fecha = new Date();

dia = new String(fecha.getDate());
mes = new String(fecha.getMonth()+1);
anio = new String(fecha.getFullYear());

hora = new String(fecha.getHours());
minuto = new String(fecha.getMinutes());

if(dia.length==1)
	dia = "0" + dia;
if(mes.length==1)
	mes = "0" + mes;
if(hora.length==1)
	hora = "0" + hora;
if(minuto.length==1)
	minuto = "0" + minuto;

document.getElementById("fecha").innerHTML= dia + "/" + mes + "/" + anio;

document.getElementById("hora").innerHTML= hora + ":" + minuto