import { Component } from "solid-js";

export const Header: Component = () => {
  return (
    <div class="fixed z-10 flex h-16 w-screen items-center justify-between border border-zinc-700/50 bg-zinc-800 p-2">
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Introdução
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Biografias
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Linha do Tempo
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Galeria
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Conceitos
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Aplicações
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Recursos Educacionais
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Influência e Legado
      </button>
      <button class="flex h-10 w-min items-center justify-center text-nowrap rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold transition duration-500 hover:scale-105">
        Debate
      </button>
    </div>
  );
};
