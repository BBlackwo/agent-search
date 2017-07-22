// const baseUrl = 'https://api.ratemyagent.com.au'; // Uncomment for local
const baseUrl = `//${window.location.hostname}:3000`;

const Endpoints = {
  AGENTS_SEARCH: `${baseUrl}/autosearch/agents`
};

const Messages = {
  Error: {
    GENERIC_ERROR: `Sorry something's gone wrong with your request. Please try again later`
  }
};

export {
  Endpoints,
  Messages
}
