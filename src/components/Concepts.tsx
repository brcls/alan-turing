import { Component } from "solid-js";
import { TextContainer } from "./TextContainer";

export const Concepts: Component = () => {
  return (
    <TextContainer title="Conceitos">
      <div class="flex h-full divide-x divide-solid">
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/558dd098e4b04b60d9638dc5/1462150953462-S2SSX0RG5F5ZHQS5TKMN/image-asset.jpeg"
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
            src="https://miro.medium.com/v2/resize:fit:746/0*nedxMbwYe3CzPGga.png"
            alt=""
            class="h-1/2 rounded-xl bg-white object-contain p-4"
          />
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Verb_Movement.jpg/562px-Verb_Movement.jpg"
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
