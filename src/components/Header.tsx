import { Component, createSignal } from "solid-js";

interface IProps {
  mainRef: HTMLDivElement | null;
}

export const Header: Component<IProps> = ({ mainRef }) => {
  const [isActive, setIsActive] = createSignal(false);

  const handleOnClickBottom = (position: number) => {
    if (mainRef) {
      const scrollableDiv = mainRef;
      const windowHeight = window.innerHeight;

      const targetPosition = windowHeight * position;

      scrollableDiv.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setIsActive(false);
    }
  };

  return (
    <>
      <div class="fixed top-0 z-10 hidden h-12 w-screen items-center justify-between gap-2 border border-zinc-800/50 bg-zinc-950 p-2 md:flex">
        <button
          onClick={() => handleOnClickBottom(0)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Introdução
        </button>
        <button
          onClick={() => handleOnClickBottom(1)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Biografias
        </button>
        <button
          onClick={() => handleOnClickBottom(4)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Timeline
        </button>
        <button
          onClick={() => handleOnClickBottom(5)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Conceitos
        </button>
        <button
          onClick={() => handleOnClickBottom(6)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Aplicações
        </button>
        <button
          onClick={() => handleOnClickBottom(7)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Recursos Educacionais
        </button>
        <button
          onClick={() => handleOnClickBottom(9)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Influência e Legado
        </button>
        <button
          onClick={() => handleOnClickBottom(11)}
          class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
        >
          Formulário
        </button>
      </div>
      <div class="fixed right-6 top-4 z-10 flex md:hidden">
        <div class="inline-flex items-center overflow-hidden rounded-md border border-zinc-800/50 bg-zinc-900 hover:scale-105 hover:bg-zinc-800">
          <button
            onClick={() => setIsActive((old) => !old)}
            class="h-full border-zinc-800/50 bg-zinc-900 p-2 hover:scale-105 hover:bg-zinc-800"
          >
            <span class="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          class={`${isActive() ? "flex" : "hidden"} absolute end-0 z-10 mt-10 w-min rounded-md border border-zinc-800/50 bg-zinc-950 shadow-lg`}
          role="menu"
        >
          <div class="flex flex-col gap-1 p-1">
            <button
              onClick={() => handleOnClickBottom(0)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Introdução
            </button>
            <button
              onClick={() => handleOnClickBottom(1)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Biografias
            </button>
            <button
              onClick={() => handleOnClickBottom(4)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Timeline
            </button>
            <button
              onClick={() => handleOnClickBottom(5)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Conceitos
            </button>
            <button
              onClick={() => handleOnClickBottom(6)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Aplicações
            </button>
            <button
              onClick={() => handleOnClickBottom(7)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Recursos Educacionais
            </button>
            <button
              onClick={() => handleOnClickBottom(9)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Influência e Legado
            </button>
            <button
              onClick={() => handleOnClickBottom(11)}
              class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-800/50 bg-zinc-950 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105 hover:bg-zinc-800"
            >
              Formulário
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
