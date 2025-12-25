import { useLocation, useParams } from "react-router-dom";
import { useGitHub } from "../../hooks/useGitHub";
import { useEffect } from "react";
import { Container } from "../../components/ui/Container";
import { Wrapper } from "../../components/ui/Wrapper";
import { Typo } from "../../components/ui/Typo";
import { Field } from "../../components/ui/Field";
import { Subtitle } from "../../components/ui/Subtitle";
import { Repos } from "../../components/Repos";
import { Loader } from "../../components/ui/Loader";

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

    if (!user || !repos ) return <Loader />

    return (
        <Container>
            <Wrapper>
                <Typo>Страница пользователя - {user.login}</Typo>
                {
                    !repos.length && <Subtitle>Репозитории отсутствуют</Subtitle>
                }
                {
                    !repos.length || <>
                        <Subtitle>Список доступных репозиториев:</Subtitle>
                        <Field>
                            <Repos repos={repos} />
                        </Field>
                    </>
                }    
            </Wrapper>
        </Container>
    )
};