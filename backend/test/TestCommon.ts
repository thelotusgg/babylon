
export const BASE_URL = "https://localhost:3000/";

// Otherwise axios is going to throws exceptions on 4xx errors
export const AXIOS_OPTIONS = {
  validateStatus: function (){
    return true;
  }
}
