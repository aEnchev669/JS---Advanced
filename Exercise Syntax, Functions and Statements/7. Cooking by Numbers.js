function cooking(num, cmd1, cmd2, cmd3, cmd4, cmd5)
{
const cmds = [cmd1, cmd2, cmd3, cmd4, cmd5];
let number = Number(num);
  for (let i = 0; i < cmds.length; i++) 
  {
    if(cmds[i] == 'chop')
    {
       number = number / 2;
    }
    else if(cmds[i] == 'dice')
    {
        number = Math.sqrt(number);
    }
    else if(cmds[i] == 'spice')
    {
        number ++;
    }
    else if(cmds[i] == 'bake')
    {
       number *= 3;
    }
    else if(cmds[i] == 'fillet')
    {
       number *= 0.8;
    }
    console.log(number);
  }
}

cooking('9', 'dice', 'spice', 'chop', 'bake','fillet');