function days(day)
{
  let num = 'error';
  if (day == "Monday")
  {
    num = 1;
  }
  else if (day == "Tuesday")
  {
    num = 2;
  }
  else if (day == "Wednesday")
  {
    num = 3;
  }
  else if (day == "Thursday")
  {
    num = 4;
  }
  else if (day == "Friday")
  {
    num = 5;
  }
  else if (day == "Saturday")
  {
    num = 6;
  }
  else if (day == "Sunday")
  {
    num = 7;
  }

  console.log(num);
}

days('Monday')
days('Friday')
days('Invalid')