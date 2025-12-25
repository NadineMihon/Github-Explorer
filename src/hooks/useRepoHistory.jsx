import { useEffect, useState } from "react";

export const useRepoHistory = () => {
    const [history, setHistory] = useState(() => {
        try {
            const reposInHistory = localStorage.getItem('history');
            return reposInHistory ? JSON.parse(reposInHistory) : [];    
        } catch (e) {
            console.log(e);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('history', JSON.stringify(history));   
        } catch (e) {
            console.log(e);
        }
    }, [history]);

    const addRepo = (repo) => {
        setHistory(prev => {
            const repoInHistory = prev.find(item => item.id === repo.id);

            if (!repoInHistory && prev.length < 10) {
                return [{ ...repo }, ...prev];
            }

            if (repoInHistory) {
                const updatedHistory = prev.filter(item => item.id !== repo.id);
                return [{...repo}, ...updatedHistory];
            }

            if (!repoInHistory && prev.length === 10) {
                const limitedHistory = prev.slice(0, -1);
                return[{...repo}, ...limitedHistory];
            }
        })
    };

    return { history, addRepo }
};