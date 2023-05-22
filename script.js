let myTable = document.getElementsByClassName("my-table")[0];
let friendTable = document.getElementsByClassName("friend-table")[0];

let show = true;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function createTable(table) {
  for (let i = 0; i < 10; i++) {
    let newRow = `
        <tr>
            <td id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div9" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div10" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
        </tr>  
        `;
    table.innerHTML += newRow;
  }
}

createTable(myTable);
createTable(friendTable);

let busyTd = [];

function randomPc(typeShip, amount) {
  if (typeShip == 1) {
    for (let i = 0; i < amount; i++) {
      let randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

      if (busyTd.includes(randomNumber)) {
        randomPc(typeShip, amount - i);
      } else {
        document
          .getElementsByTagName("td")
          [randomNumber].classList.add("ship-item");
        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 1);
        busyTd.push(randomNumber);
      }
    }
  }

  if (typeShip == 2) {
    for (let i = 0; i < amount; i++) {
      let randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

      if (busyTd.includes(randomNumber)) {
        randomPc(typeShip, amount - i);
      } else {
        document
          .getElementsByTagName("td")
          [randomNumber].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber + 1].classList.add("ship-item");
        busyTd.push(randomNumber);
        busyTd.push(randomNumber + 1);

        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 2);
        busyTd.push(randomNumber + 1);
        busyTd.push(randomNumber);
      }
    }
  }

  if (typeShip == 3) {
    for (let i = 0; i < amount; i++) {
      let randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

      if (busyTd.includes(randomNumber)) {
        randomPc(typeShip, amount - i);
      } else {
        document.getElementsByTagName("td")[randomNumber].classList.add("ship");
        document
          .getElementsByTagName("td")
          [randomNumber + 1].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber + 2].classList.add("ship-item");

        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 2);
        busyTd.push(randomNumber + 3);
        busyTd.push(randomNumber + 1);
        busyTd.push(randomNumber);
      }
    }
  }

  if (typeShip == 4) {
    let randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

    if (busyTd.includes(randomNumber)) {
      randomPc(typeShip);
    } else {
      document
        .getElementsByTagName("td")
        [randomNumber].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 1].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 2].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 3].classList.add("ship-item");

      busyTd.push(randomNumber - 1);
      busyTd.push(randomNumber + 2);
      busyTd.push(randomNumber + 3);
      busyTd.push(randomNumber + 4);
      busyTd.push(randomNumber + 1);
      busyTd.push(randomNumber);
    }
  }
}

randomPc(1, 4);
randomPc(2, 3);
randomPc(3, 2);
randomPc(4, 1);

document.getElementsByTagName("td")[0];

if (show == false) {
  for (let i = 0; i < 100; i++) {
    document.getElementsByTagName("td")[i].classList.add("ship-item");
  }
}

let a = 0;
let allShip = document.getElementsByClassName("ship-item");

for (let i = 0; i < allShip.length; i++) {
  allShip[i].addEventListener("click", function (e) {
    e.target.style.background = "red";

    a++;
    alert(++a);
  });
}

let dd = document.querySelectorAll("td:not(.ship-item)");
for (let i = 0; i < dd.length; i++) {
  dd[i].addEventListener("click", function (e) {
    e.target.style.background = "transparent";
  });
}
