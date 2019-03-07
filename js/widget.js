var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        //document.getElementById('').innerHTML = xhr.responseText;
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].inoffice) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name + '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }

};
xhr.open('GET', 'data/employees.json');
xhr.send();