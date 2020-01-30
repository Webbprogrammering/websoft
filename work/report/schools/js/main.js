const table = document.getElementById('table');
const schoolForm = document.getElementById("schoolForm");
const schoolOptions = document.getElementById("schoolOptions");

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
    fetch("https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/" + schoolCode + ".json")
    /*fetch("data/" + schoolCode + ".json")*/
        .then((response) => {
            console.log("Something");
            return response.json();
        })
        .then((myJson) => {
            appendToTable(myJson);
        })
        .catch(() => table.innerHTML = 'No data');
}

function appendToTable(SchoolResponse) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<th>Skolenhetskod</th> <th>Skolenhetsnamn</th> <th>KommunKod</th> <th>PeOrgNr</th> </tr>';
    table.append(tr);
    SchoolResponse.Skolenheter.forEach(function (Skolenheter) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td>' + Skolenheter.Skolenhetskod + '</td>' +
            '<td>' + Skolenheter.Skolenhetsnamn + '</td>' +
            '<td>' + Skolenheter.Kommunkod + '</td>' +
            '<td>' + Skolenheter.PeOrgNr + '</td>';
        table.append(tr);
    });
}

function populateRegionSchools() {
    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun')
    /*fetch('data/schools.json')*/
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            myJson.Kommuner.forEach(school => {
                const element = document.createElement("option");
                element.text = school.Namn;
                element.value = school.Kommunkod;
                schoolOptions.appendChild(element);
            });
        });
}