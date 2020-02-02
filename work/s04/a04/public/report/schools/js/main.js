const table = document.getElementById('table');
const schoolForm = document.getElementById("schoolForm");
const schoolOptions = document.getElementById("schoolOptions");

const Person = {
    id: Object,
    firstName: Object,
    lastName: Object,
};

(function init() {
    populateRegionSchools();
    schoolForm.onsubmit = () => {
        clearTable();
        fetchSchools(schoolOptions.value);
        return false;
    }
})();

function clearTable() {
    table.innerHTML = ''
}

function fetchSchools(schoolCode) {
    fetch("https://rem.dbwebb.se/api/users/" + schoolCode)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            appendToTable(myJson);
        })
        .catch(() => table.innerHTML = 'No data');
}

function appendToTable(response) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<th>ID</th><th>First Name</th><th>Last Name</th>';
    table.append(tr);
    const tr1 = document.createElement('tr');
    tr1.innerHTML = '<td>' + response.id + '</td>' +
        '<td>' + response.firstName + '</td>' +
        '<td>' + response.lastName + '</td>';
    table.append(tr1);
}

function populateRegionSchools() {
    fetch(`https://rem.dbwebb.se/api/users`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            myJson.data.forEach(person => {
                const element = document.createElement("option");
                element.text = `${person.firstName} ${person.lastName}`;
                element.value = person.id;
                schoolOptions.appendChild(element);
            });
        });
}