import axios from "axios";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: import.meta.env.DEV ? import.meta.env.VITE_GIT_TOKEN : '',
});

export const fetchPopularRepos = (lang) => {
    const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc');
    return axios.get(encodeURI)
        .then((resp) => {
            return resp.data.items;
        })
}

const getReposList = async (nickname) => {
    const result = await octokit.request('GET /users/{username}/repos', {
        username: nickname
    });

    return result.data;
}

export const getUserData = async (nickname) => {
    const result = await octokit.request('GET /users/{username}', {
        username: nickname
    });
    if (result) {
        return result.data;
    } else {
        console.log(result.status);
    }
}

const calculateRating = (profile, repos) => {
    const followers = profile.followers;
    const stars = repos.reduce((count, repo) => 
        count + repo.stargazers_count
    , 0);
    return {
        value: (followers * 5) + (stars * 10) + (repos.length * 5),
        stars
    };
}

export const summaryData = (nickname) => {
    return Promise.all([
        getUserData(nickname),
        getReposList(nickname)
    ]).then(([profile, repos]) => {
        return {
            profile,
            score: calculateRating(profile, repos),
        }
    });
}