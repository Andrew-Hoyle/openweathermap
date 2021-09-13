

// Create object for storing functions and variables
    // Define Key and then create fetch data function
    //API call with units to imperial
    //https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=4f0d2fbb02998d76f6593dfb62bd66b5


let weather = {
    myKey: config.MY_key,
    fetchData: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.myKey
        ).then((response) => response.json())
        .then((data) => this.loadData(data));
    },

    // function to display weather
    // build out the object and define data and route 
        // Then doc.querySelector() to tell JS where to Put Data on HTML
    loadData: function(data) {
        const { name } = data;
        const {description} = data.weather[0];
        const { temp, humidity } = data.main;
        const {speed } = data.wind;
        const { country } = data.sys;
        console.log(name,description,temp,humidity,speed)
        document.querySelector(".city").innerText = name+",";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = humidity + "% Humidity";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
        document.querySelector(".country").innerText = country
    },
    // Add search function that is routed to the search bar and takes given value
    search: function() {
        this.fetchData(document.querySelector(".search-bar").value);
    },
}


// SEARCH BUTTON
// Add functionality to search button to take input
// Add onclick or onsubmit or addEventListener("click")
// PLEASE MAKE THIS DAMN BUTTON WOR
        // When "click" -addEventListner calls Weather Object and runs search function
            // Which takes its value from the input value in the search 
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})


// Thank the internet