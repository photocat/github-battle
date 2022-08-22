import axios from "axios";

export const fetchPopularRepos = (lang) => {
    const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc');
    return axios.get(encodeURI)
        .then((resp) => {
            return resp.data.items;
        })
}