const apiKey = 'a3c6852dfe078f3244031cbd7c2e1c3d'; // Replace with your actual key
const city = 'Chennai'; // Replace with desired city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));

function displayWeather(data) {
    document.getElementById('city').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp + '°C';
    document.getElementById('description').textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weatherIcon').src = iconUrl;
}


function displayDateTime() {
    const now = new Date();
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = days[now.getDay()];
    
  const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
  
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    const formattedDateTime = `${day}, ${month} ${date}, ${year} - ${hours}:${minutes}:${seconds} ${amPm}`;
  
    const timeElement = document.getElementById('time');
    if (timeElement) {
      timeElement.textContent = formattedDateTime;
    } else {
      console.error("Element with id 'time' not found.");
    }
  }
  
  // Call the function initially to display the time
  displayDateTime();
  
  // Update the time every second
  setInterval(displayDateTime, 1000);

  
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = ''; // Clear input field
  }
});

function addTask(taskText) {
  const newTaskItem = document.createElement('li');
  newTaskItem.textContent = taskText;

  // Add a delete button to each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(newTaskItem); // Remove task when delete button is clicked
  });

  newTaskItem.appendChild(deleteButton);
  taskList.appendChild(newTaskItem);
}


const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');
const volumeControl = document.getElementById('volumeControl');
const progressBar = document.getElementById('progressBar');

if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => {
    playButton.click(); // Trigger your play function
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    pauseButton.click(); // Trigger your pause function
  });

  // ... (Add handlers for other actions like 'stop', 'seekbackward', etc.)

  // Update your UI based on mediaSession metadata
  navigator.mediaSession.metadata.addEventListener('change', () => {
    const metadata = navigator.mediaSession.metadata;
    if (metadata) {
      // Update your UI with title, artist, etc. from metadata
      console.log('Now playing:', metadata.title);
        console.log('Artist:', metadata.artist);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let timer;
  let seconds = 0;

  const timerDisplay = document.getElementById('timer');
  const startingButton = document.getElementById('start');
  const stopingButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');

  function updateTimerDisplay() {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timerDisplay.textContent = 
          String(minutes).padStart(2, '0') + ':' + 
          String(remainingSeconds).padStart(2, '0');
  }

  startingButton.addEventListener('click', () => {
      if (!timer) {
          timer = setInterval(() => {
              seconds++;
              updateTimerDisplay();
          }, 1000);
      }
  });

  stopingButton.addEventListener('click', () => {
      clearInterval(timer);
      timer = null;
  });

  resetButton.addEventListener('click', () => {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      updateTimerDisplay();
  });
});