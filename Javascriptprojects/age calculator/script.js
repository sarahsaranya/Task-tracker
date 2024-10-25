function getDOB() {
    const getDate = document.getElementById('inputDOB').value;
    const currdate = document.getElementById('cdate').value;
    if(!getDate || !currdate){
        alert('enter start and end date to calculate age');
        return;
    }

    const gets = new Date(getDate);
    const curre = new Date(currdate);

    let age = curre.getFullYear() - gets.getFullYear();
    const month = curre.getMonth() - gets.getMonth();
    if( month < 0 || (month === 0 && curre.getDate() < gets.getDate())){
        age--;
    }
    document.getElementById('currentage').textContent = `Your age is ${age} years`;
}