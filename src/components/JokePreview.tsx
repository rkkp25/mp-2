import { Joke } from '../interfaces/Types.ts';
import { styled } from "styled-components";

const ParentDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const JokePreviewDiv = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    width: 20rem;
    background-color: palevioletred;
    border: #9a0a39 double 0.5vw;
    justify-content: center;
`;

export function JokePreview (temp: {data: Joke[]}) {
    console.log("temps", temp)
    return (
        <ParentDiv>
        {
            temp.data.map((joke: Joke) =>
                <JokePreviewDiv>
                    <h2>Joke #{joke.id}</h2>
                    <p>{joke.setup}</p>
                    <p>{joke.punchline}</p>
                </JokePreviewDiv>
            )
        }
        </ParentDiv>
    );
}
