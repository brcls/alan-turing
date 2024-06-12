import { Component } from "solid-js";

interface IProps {
  mainRef: HTMLDivElement | null;
}

export const Header: Component<IProps> = ({ mainRef }) => {
  const handleOnClickBottom = (position: number) => {
    if (mainRef) {
      const scrollableDiv = mainRef;
      const windowHeight = window.innerHeight;

      const targetPosition = windowHeight * position;

      scrollableDiv.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div class="fixed top-0 z-10 flex h-12 w-screen items-center justify-between gap-2 border border-zinc-700/50 bg-zinc-800 p-2">
      <button
        onClick={() => handleOnClickBottom(0)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Introdução
      </button>
      <button
        onClick={() => handleOnClickBottom(1)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Biografias
      </button>
      <button
        onClick={() => handleOnClickBottom(4)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Timeline
      </button>
      <button
        onClick={() => handleOnClickBottom(5)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Galeria
      </button>
      <button
        onClick={() => handleOnClickBottom(6)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Conceitos
      </button>
      <button
        onClick={() => handleOnClickBottom(7)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Aplicações
      </button>
      <button
        onClick={() => handleOnClickBottom(8)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Recursos Educacionais
      </button>
      <button
        onClick={() => handleOnClickBottom(9)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Influência e Legado
      </button>
      <button
        onClick={() => handleOnClickBottom(10)}
        class="flex h-8 w-full items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105"
      >
        Debate
      </button>
    </div>
  );
};
