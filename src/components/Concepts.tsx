import { Component } from "solid-js";
import { TextContainer } from "./TextContainer";

export const Concepts: Component = () => {
  return (
    <TextContainer title="Conceitos">
      <div class="flex h-full divide-x divide-solid">
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="images/turing-machine.png"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
          <div>
            <p class="mb-2 text-2xl font-bold">Máquina de Turing</p>
            <p>
              A Máquina de Turing é um modelo teórico que define uma máquina que
              manipula símbolos em uma fita de acordo com um conjunto de regras.
              Esse modelo é fundamental para a teoria da computação e ajuda a
              entender o que pode ser computado.
            </p>
          </div>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <div>
            <p class="mb-2 text-2xl font-bold">NP-Completude</p>
            <p>
              Problemas NP-completos são uma classe de problemas que são, ao
              mesmo tempo, difíceis de resolver e fáceis de verificar. Esses
              problemas são fundamentais para a compreensão dos limites da
              computação.
            </p>
          </div>
          <img
            src="images/np-complete.png"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="images/generative.png"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
          <div>
            <p class="mb-2 text-2xl font-bold">Gramática gerativa</p>
            <p>
              A gramática gerativa é uma teoria que sugere que a capacidade de
              gerar e compreender frases gramaticais é inata aos seres humanos.
              Essa teoria transformou o estudo da linguística e influenciou
              várias outras disciplinas.
            </p>
          </div>
        </div>
      </div>
    </TextContainer>
  );
};
