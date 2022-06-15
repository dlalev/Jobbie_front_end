export const msalConfig = {
    auth: {
      clientId: "f90fe3fb-86dc-4fb1-a82a-7a727b1ce477",
      authority: "https://login.microsoftonline.com/jobbiecom.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };

  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };

  export const appRoles = {
    Admin: "jobbie.admin"
  } 