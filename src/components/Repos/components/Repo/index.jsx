import { Link } from "../../../ui/Link";

import * as SC from "./styles";

export const Repo = ({ repo }) => {
    return (
        <SC.Repo>    
            <SC.Title>{repo.name}</SC.Title>
            <SC.Subtitle>Язык: {repo.language}</SC.Subtitle>
            <Link to={`/repos/${repo.owner.login}/${repo.name}`} state={{ repo: repo }}>Подробнее</Link>
        </SC.Repo>
    )
};