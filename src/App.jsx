import axios from "axios";
import { createSignal, onMount } from "solid-js";
import EpisodeBox from "./components/episode-box";

const fetchEpisodes = async () =>
  await axios.get("https://rickandmortyapi.com/api/episode"); // The API

function App() {
  const [episodes, setEpisodes] = createSignal(null);

  onMount(async () => {
    setEpisodes((await fetchEpisodes()).data);
    console.log(episodes());
  });

  return (
    <>
      <div class="flex justify-center items-center flex-col p-10">
        <h2 class=" font-medium text-4xl my-5">Episode with Characters</h2>
        <div style={{ width: "1000px" }}>
          <For each={episodes()?.results} fallback={<p>Loading...</p>}>
            {(episode) => (
              <div>
                <EpisodeBox episode={episode} />
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
}
export default App;
