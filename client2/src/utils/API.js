import axios from "axios";
// import filterParams from "./filterParams";

export default {
  getResources: function() {
    return axios.get("/api/resources");
  },
  getSavedResources: function() {
    return axios.get("/api/resources");
  },
  getTrendingTopics: function() {
    return axios.get("/api/resources/trending");
  },
  getNewTopics: function() {
    return axios.get("/api/resources/new");
  },
  deleteResource: function(id) {
    return axios.delete("/api/ressouces/" + id);
  },
  saveResource: function(resourcesData) {
    console.log('resourcesData: from API util', resourcesData);
    return axios.post("/api/resources", resourcesData);
  },
  update: function(id) {
    return axios.put("/resources/" + id);
  }
};
