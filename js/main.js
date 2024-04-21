window.addEventListener('load', function () {

    const userArray = [
        {
            id: 1,
            name: "Erling Haaland",
            age: 22,
            photo: "img/holland.jpg",
            club: "Manchester Citi",
            position: "Forward",
            price: 100,
        },

        {
            id: 2,
            name: "Kylian Mbappé",
            age: 24,
            photo: "img/mbape.jpg",
            club: "FC Paris Saint-Germain",
            position: "Forward",
            price: 100,
        },

        {
            id: 3,
            name: "Vinicius Junior",
            age: 23,
            photo: "img/vinicius.jpg",
            club: "Real Madrid",
            position: "Forward",
            price: 95,
        },

        {
            id: 4,
            name: "Bukayo Saka",
            age: 21,
            photo: "img/saka.jpg",
            club: "FC Arsenal",
            position: "Forward",
            price: 92,
        },

        {
            id: 5,
            name: "Victor Osimhen",
            age: 24,
            photo: "img/osimhen.jpg",
            club: "Napoli",
            position: "Defender",
            price: 90,
        },

        {
            id: 6,
            name: "Jamal Musiala",
            age: 20,
            photo: "img/musiala.jpg",
            club: "Bayern München",
            position: "Defender",
            price: 88,
        },

        {
            id: 7,
            name: "Pedri",
            age: 24,
            photo: "img/pedri.jpg",
            club: "FC Barcelona",
            position: "Midfielder",
            price: 88,
        },

        {
            id: 8,
            name: "Federico Valverde",
            age: 24,
            photo: "img/valverde.jpg",
            club: "Real Madrid",
            position: "Midfielder",
            price: 85,
        },

        {
            id: 9,
            name: "Rafael Leão",
            age: 24,
            photo: "img/leao.jpg",
            club: "AC Milan",
            position: "Midfielder",
            price: 80,
        },

        {
            id: 10,
            name: "Milan Skriniar",
            age: 28,
            photo: "img/skriniar.jpg",
            club: "FC Paris Saint-Germain",
            position: "Defender",
            price: 55,
        },

        {
            id: 11,
            name: "Alessandro Bastoni",
            age: 24,
            photo: "img/bastoni.jpg",
            club: "Inter Milan",
            position: "Defender",
            price: 60,
        },

        {
            id: 12,
            name: "Neymar",
            age: 31,
            photo: "img/neymar.jpg",
            club: "FC Paris Saint-Germain",
            position: "Forward",
            price: 52,
        },

        {
            id: 13,
            name: "Oleksandr Zinchenko",
            age: 26,
            photo: "img/zina.jpg",
            club: "FC Arsenal",
            position: "Midfielder",
            price: 42,
        },

        {
            id: 14,
            name: "Fabinho",
            age: 27,
            photo: "img/holland.jpg",
            club: "Liverpool",
            position: "Defender",
            price: 38,
        },

        {
            id: 15,
            name: "Max Kilman",
            age: 26,
            photo: "img/kilman.jpg",
            club: "Wolverhampton",
            position: "Defender",
            price: 30,
        },

        {
            id: 16,
            name: "Eljif Elmas",
            age: 23,
            photo: "img/elmas.jpg",
            club: "Napoli",
            position: "Midfielder",
            price: 25,
        },

        {
            id: 17,
            name: "Vitaliy Mykolenko",
            age: 24,
            photo: "img/mykolenko.jpg",
            club: "FC Everton",
            position: "Defender",
            price: 23,
        },

        {
            id: 18,
            name: "Joe Gomez",
            age: 26,
            photo: "img/gomes.jpg",
            club: "Liverpool",
            position: "Midfielder",
            price: 20,
        },

        {
            id: 19,
            name: "Mykola Matvienko",
            age: 27,
            photo: "img/matvienko.jpg",
            club: "Shakhtar Donetsk",
            position: "Midfielder",
            price: 18,
        },
 
        {
            id: 20,
            name: "Lautaro Martínez",
            age: 25,
            photo: "img/martinez.jpg",
            club: "Inter Milan",
            position: "Forward",
            price: 16,
        },
    ];

    const container = document.querySelector(".users-container");
    const nameFilter = document.querySelector("#nameFilter");
    const priceFilter = document.querySelector("#priceFilter");
    const positionFilter = document.querySelector(".js-filter");


    container.insertAdjacentHTML('beforeend', createMarkup(userArray));
    function createMarkup(arr) {
        return arr
            .map(person =>
                `
                <div class="user">
                        <div class="person-card">
                            <img src="${person.photo}" class="img-fluid" alt="${person.card}">
                        </div>
                        <div class="person-name">${person.name}</div>
                        <div class="person-age">${person.age}</div>
                        <div class="person-club">${person.club}</div>
                        <div class="person-position">${person.position}</div>
                        <div class="person-price">${person.price}</div>
                    </div> 
            `).join("")

    }

    nameFilter.addEventListener("input", (event) => {
        const filteredUsersName = userArray.filter((user) =>
            user.name.toLowerCase().includes(nameFilter.value.toLowerCase())
        );
        container.innerHTML = createMarkup(filteredUsersName);
    });
    
    priceFilter.addEventListener("input", (event) => {
        const filteredUsersPrice = userArray.filter(
            (user) => user.price >= Number(event.target.value)
        );
        container.innerHTML = createMarkup(filteredUsersPrice);
    });
    
    positionFilter.addEventListener("change", (event) => {
        const filteredPosition = event.target.value.toLowerCase();
        if (filteredPosition === "all") {
            return container.innerHTML = createMarkup(userArray);
        };
        const filteredUsersPosition = userArray.filter(
            (user) =>
                user.position.toLocaleLowerCase() === filteredPosition);
        container.innerHTML = createMarkup(filteredUsersPosition);
    });

    /* priceFilter.addEventListener("input", (event) => {
        state.price = Number(event.target.value);
        updateView();
    });

    positionFilter.addEventListener('change', (event) => {
        state.position = event.target.value.toLowerCase();
        if (state.position === "all") {
          return (container.innerHTML = createMarkup(userArray));
        } else {
            
        }
        updateView();
   })
    
     const state = {
       position: "all",
       price: 100,
     };

     function filterData() {
       return userArray.filter((user) => {
         const setName = user.price <= state.price;
         const setPosition =
           state.position === "all" || user.position === state.position;
         return setName && setPosition;
       });
     }

    function updateView() {
      const filteredData = filterData();
      container.innerHTML = createMarkup(filteredData);
    } */
    

});


