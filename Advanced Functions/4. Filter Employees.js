function filterEmployees(input , critery) {

    const employees = JSON.parse(input);
    const [typeCriteries , nameCriteries] = critery.split(`-`);
    let counter = 0;

    for(const employee of employees) {

        if(employee[typeCriteries] === nameCriteries) {
            prints(employee)
        } 
        else if(typeCriteries === 'all') {
            prints(employee)
        }   
    }

    function prints (employee) {
        console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        counter++;
    }
}