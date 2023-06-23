let employ = [{ "id": 1, "first_name": "Damara", "last_name": "Behne", "image": "http://dummyimage.com/250x100.png/5fa2dd/ffffff" },
{ "id": 2, "first_name": "Luciana", "last_name": "Stallwood", "image": "http://dummyimage.com/240x100.png/ff4444/ffffff" },
{ "id": 3, "first_name": "Maud", "last_name": "Summergill", "image": "http://dummyimage.com/239x100.png/cc0000/ffffff" },
{ "id": 4, "first_name": "Kaylee", "last_name": "Cantu", "image": "http://dummyimage.com/165x100.png/dddddd/000000" },
{ "id": 5, "first_name": "Cosetta", "last_name": "Seleway", "image": "http://dummyimage.com/184x100.png/dddddd/000000" },
{ "id": 6, "first_name": "Ammamaria", "last_name": "Lark", "image": "http://dummyimage.com/206x100.png/cc0000/ffffff" },
{ "id": 7, "first_name": "Phineas", "last_name": "Lamond", "image": "http://dummyimage.com/111x100.png/5fa2dd/ffffff" },
{ "id": 8, "first_name": "Dom", "last_name": "Zimek", "image": "http://dummyimage.com/202x100.png/ff4444/ffffff" },
{ "id": 9, "first_name": "Nedi", "last_name": "Gummer", "image": "http://dummyimage.com/207x100.png/ff4444/ffffff" },
{ "id": 10, "first_name": "Dorotea", "last_name": "Schreiner", "image": "http://dummyimage.com/137x100.png/ff4444/ffffff" }]
function dispData() {

    row = ''
    for (emp of employ) {
        row = row + `<tr><td>${emp.id}</td>`
        row = row + `<td>${emp.first_name}</td>`
        row = row + `<td>${emp.last_name}</td>`
        row = row + `<td><img src="${emp.image}"/></td></tr>`
    }







    document.getElementById("nandu").innerHTML = row

}