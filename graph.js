function calculate()
{

}


function polyDegree(p)
{
	var i = p.length - 1;
	while (p.length >= 0)
		if (p.length != 0)
			return i;
	return 0;
}

function addCoefficient(s, n)
{
	if (n == 0)
		return;
	if (n == 1)
	{
		s+='x';
		return;
	}

	s+=n+'x';
	return s;
}

function addPower(s,n)
{
	if (n == 0 || n == 1)
		return;

	s+= "^" + n;
	return s;
}

function print(a)
{
	var s = "";
	var i = a.length;
	var check = 0;
	while (i >= 0 && check == 0)
	{
		if (Math.abs(a[i]) >= .0000001)
		{
			if (a[i] < 0)
				s+="-";
			s = addCoefficient(s, Math.abs(a[i]));
			s = addPower(s,i);
			check++;
		}
		i--;
	}

	if (check == 0)
	{
		alert('0');
		return;
	}
	while (i > 0)
	{
		if (a[i] != 0)
		{
			if (a[i] > 0)
				s+= " + ";
			if (a[i] < 0)
				s+= " - ";
			s = addCoefficient(s, Math.abs(a[i]));
			s = addPower(s,i);
		}
		i--;
	}

	if (Math.abs(a[0]) > .0000001)
	{
		if (a[0] > 0)
			s+= " + ";
		else if (a[0] < 0)
			s+= " - ";
		s+=Math.abs(a[0]);
	}
	return s;
}

function polyPrint(p)
{
	if (p.length == 0)
		return;
	alert(print(p));
}

function graph()
{
	var func = document.getElementById('inputFunction').value;
	var simplifiedFunction = simplify(func);
	polyPrint(simplifiedFunction);
	alert(simplifiedFunction);
	return;
}