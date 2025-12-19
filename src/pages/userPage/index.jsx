import { useLocation, useParams } from "react-router-dom";
import { useGitHub } from "../../hooks/useGitHub";
import { useEffect } from "react";
import { Container } from "../../components/ui/Container";

export const UserPage = () => {
    const { username } = useParams();
    const location = useLocation();

    const initialUserData = location.state?.user;
    const initialReposData = location.state?.repos;

    const { data: userData, fetchUser } = useGitHub();
    const { data: reposData, fetchUserRepos } = useGitHub();

    useEffect(() => {
        if (username && !initialUserData) {
            fetchUser(username);
            fetchUserRepos(username);
        }
    }, [username, initialUserData, fetchUser, fetchUserRepos]);

    const user = userData || initialUserData;
    const repos = reposData || initialReposData;

    //console.log(user)
    //console.log(repos)

    return (
        <Container>
            <div>Страница пользователя {user.login}</div>    
        </Container>
    )
};