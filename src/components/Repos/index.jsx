import { Container } from "../ui/Container";
import { Repo } from "./components/Repo";

import * as SC from "./styles";

export const Repos = ({ repos }) => (
    <Container>       
        <SC.Repos>
            {
                repos.map((repo) => <Repo key={repo.id} repo={repo} />)
            }
        </SC.Repos>
    </Container>
);