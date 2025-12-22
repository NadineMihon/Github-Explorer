import { useNavigate } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Wrapper } from "../../components/ui/Wrapper";
import { SearchForm } from "./components/SearchForm";
import { useGitHub } from "../../hooks/useGitHub";

export const MainPage = () => {
    const navigate = useNavigate();
    const { fetchUser, fetchUserRepos } = useGitHub();

    const onSubmitForm = async (formValue) => {
        const userData = await fetchUser(formValue);
        
        if (!userData) {
            alert('Пользователь не найден');
            return;
        }

        const reposData = await fetchUserRepos(formValue);

        navigate(`/users/${formValue}`, { 
            state: { 
                user: userData,
                repos: reposData
            }
        });
    };

    return (
        <Container>
            <Wrapper>
                <SearchForm onSubmitForm={onSubmitForm} />
            </Wrapper>  
        </Container>
    )
};