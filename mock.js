let employ = [{ "id": 1, "first_name": "Ginny", "last_name": "Dunn", "email": "gdunn0@youtu.be" },
{ "id": 2, "first_name": "Lori", "last_name": "Goade", "email": "lgoade1@topsy.com" },
{ "id": 3, "first_name": "Elsa", "last_name": "Hatley", "email": "ehatley2@bing.com" },
{ "id": 4, "first_name": "Theda", "last_name": "Buche", "email": "tbuche3@cmu.edu" },
{ "id": 5, "first_name": "Che", "last_name": "Stepto", "email": "cstepto4@si.edu" },
{ "id": 6, "first_name": "Hendrik", "last_name": "Cowcha", "email": "hcowcha5@ucoz.com" },
{ "id": 7, "first_name": "Pansie", "last_name": "Vassay", "email": "pvassay6@earthlink.net" },
{ "id": 8, "first_name": "Rosco", "last_name": "Curmi", "email": "rcurmi7@examiner.com" },
{ "id": 9, "first_name": "Dalston", "last_name": "Jimenez", "email": "djimenez8@icq.com" },
{ "id": 10, "first_name": "Alena", "last_name": "Passman", "email": "apassman9@reddit.com" }]
function dispData() {
    let row = ""

    for (emp of employ) {
        row = row + `<tr><td>${emp.id}</td>`
        row = row + `<td>${emp.first_name}</td>`
        row = row + `<td>${emp.last_name}</td>`
        row = row + `<td>${emp.email}</td></tr>`





    }
    document.getElementById("nandu").innerHTML = row

}