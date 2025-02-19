import { useState, useEffect } from "react";
import { JokePreview } from "./JokePreview.tsx";
import { Joke } from "../interfaces/Types.ts";

export default function JokeListContent() {
    const [jokes, setJokes] = useState<Joke[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/random/10`);
            const data = await res.json();
            //console.log("data", typeof(data))
            setJokes(data);
            //console.log("jokes1", jokes)
        }
      fetchData().then(()=>console.log("Okay")).catch(e => console.error("this went wrong" + e));
    }, [jokes.length]);
    //console.log(jokes)

    return (
        <div>
            <JokePreview data={jokes} />
        </div>
    )
}
