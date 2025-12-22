import { useLocation, useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Wrapper } from "../../components/ui/Wrapper";
import { Typo } from "../../components/ui/Typo";
import { Subtitle } from "../../components/ui/Subtitle";
import { useGitHub } from "../../hooks/useGitHub";
import { useEffect } from "react";
import ReactMarkdown from 'react-markdown';

import * as SC from "./styles";

export const RepoPage = () => {
    const location = useLocation();
    const { username, repoName } = useParams();

    const initialRepoData = location.state?.repo;

    const { data: repoData, fetchUserRepo } = useGitHub();
    const { data: readmeData, fetchRepoReadme, decodeReadme } = useGitHub();

    useEffect(() => {
        if (username && repoName) {
            fetchUserRepo(username, repoName);
            fetchRepoReadme(username, repoName);
        }
    }, [username, repoName, initialRepoData, fetchUserRepo, fetchRepoReadme]);

    const repo = repoData || initialRepoData;
    const readmeContent = readmeData ? decodeReadme(readmeData.content) : '';

    return (
        <Container>
            <Wrapper>
                <Typo>Страница репозитория - {repo?.name}</Typo>
                <Subtitle>Язык: {repo?.language}</Subtitle>
                {
                    !readmeContent || <>
                        <Subtitle>Содержание файла README.md:</Subtitle>
                        <SC.Content>
                            <ReactMarkdown>
                                {readmeContent}
                            </ReactMarkdown>    
                        </SC.Content>
                    </>
                }
            </Wrapper>
        </Container>
    )
};