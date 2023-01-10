function echo(a,b,c){
    let totalLegnth = a.length + b.length + c.length;
    let avgLength = Math.floor(totalLegnth / 3);

    console.log(totalLegnth);
    console.log(avgLength);
}

echo('chocolate', 'ice cream', 'cake');
echo('pasta', '5', '22.3');