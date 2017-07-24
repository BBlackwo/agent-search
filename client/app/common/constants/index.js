const baseUrl = 'https://api.ratemyagent.com.au';
// const baseUrl = `//${window.location.hostname}:3000`; // Uncomment for local testing

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
