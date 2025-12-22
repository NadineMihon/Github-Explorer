import { useCallback, useState } from "react"

export const useGitHub = () => {
    const [data, setData] = useState(null);

    const fetchUser = useCallback(async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) throw new Error('Пользователь не найден');

            const userData = await response.json();
            setData(userData);

            return userData;

        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchUserRepos = useCallback(async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);

            if (!response.ok) throw new Error('Репозитории не найдены');

            const reposData = await response.json();
            setData(reposData);

            return reposData;

        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchUserRepo = useCallback(async (username, repoName) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

            if (!response.ok) throw new Error('Репозиторий не найден');

            const repoData = await response.json();
            setData(repoData);

            return repoData;

        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchRepoReadme = useCallback(async (username, repoName) =>{
        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`);

            if (!response.ok) throw new Error('Файл README не найден');

            const readmeData = await response.json();
            setData(readmeData);

            return readmeData;

        } catch (e) {
            console.log(e);
        }
    }, []);

    const decodeReadme = useCallback((base64Content) => {
        if (!base64Content) return '';

        try {
            return atob(base64Content);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return { data, fetchUser, fetchUserRepos, fetchUserRepo, fetchRepoReadme, decodeReadme };
};