import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Wrapper } from "../../components/ui/Wrapper";
import { SearchForm } from "./components/SearchForm";
import { Loader } from "../../components/ui/Loader";
import { useGitHub } from "../../hooks/useGitHub";
import { useRepoHistory } from "../../hooks/useRepoHistory";
import { Repos } from "../../components/Repos";
import { Subtitle } from "../../components/ui/Subtitle";

export const MainPage = () => {
    const navigate = useNavigate();
    const { fetchUser, fetchUserRepos } = useGitHub();
    const { history } = useRepoHistory();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmitForm = async (formValue) => {
        if (!formValue.trim()) return;

        setIsLoading(true);

        const userData = await fetchUser(formValue);
        
        if (!userData) {
            alert('Пользователь не найден');
            setIsLoading(false);
            return;
        }

        const reposData = await fetchUserRepos(formValue);

        navigate(`/users/${formValue}`, { 
            state: { 
                user: userData,
                repos: reposData
            }
        });

        setIsLoading(false);
    };

    return (
        <Container>
            {
                isLoading && <Loader />
            }
            <Wrapper>
                <SearchForm onSubmitForm={onSubmitForm} />
            </Wrapper>    
                {
                    history.length ? <Wrapper>
                        <Subtitle>Просмотренные репозитории:</Subtitle>
                        <Repos repos={history} />
                    </Wrapper>
                    : <></>
                }
              
        </Container>
    )
};