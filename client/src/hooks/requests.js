const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw error;
  }
}

httpGetPlanets()
  .then(planets => {
    // Process the planets data
    console.log(planets);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

  
async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
