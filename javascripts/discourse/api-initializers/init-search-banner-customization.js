import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
    api.onPageChange((url) => {
        // Check if we're on the homepage and add the "home-search-banner" css class to html tag
        if (url == "/" ){
            document.querySelector("html").classList.add("home-search-banner");
        }
        else {
            document.querySelector("html").classList.remove("home-search-banner");
        }
    });
});
