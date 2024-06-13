import { Component } from "solid-js";
import { TextContainer } from "./TextContainer";

export const IntroductionSection: Component = () => {
  return (
    <TextContainer title="Introdução">
      <div class="flex h-full items-center gap-10">
        <div class="flex h-full w-1/2 flex-col justify-between gap-10 pt-6">
          <p>
            Bem-vindo ao nosso site sobre Teoria da Computação! Este site foi
            criado como parte de um trabalho de extensão para a matéria de
            Introdução à Teoria da Computação. Aqui, exploramos as vidas e
            contribuições de Alan Turing, Stephen Cook e Noam Chomsky, três
            gigantes cujas obras moldaram o campo da ciência da computação.
            Esperamos que este site inspire você a aprender mais sobre essa
            fascinante área e sua importância para o mundo moderno.
          </p>
          <ul class="flex flex-1 flex-col justify-around">
            <div class="flex items-center gap-5">
              <img
                src="/images/alan-turing.png"
                class="h-20 w-20 rounded-full object-cover"
                alt=""
              />
              <li>
                "A única maneira de descobrir os limites do possível é ir além
                deles para o impossível." <p class="font-bold">- Alan Turing</p>
              </li>
            </div>
            <div class="flex items-center gap-5">
              <img
                src="/images/stephen-cook.png"
                class="h-20 w-20 rounded-full object-cover"
                alt=""
              />
              <li>
                "A complexidade de um problema é a quantidade de recursos
                necessários para resolvê-lo."{" "}
                <p class="font-bold">- Stephen Cook</p>
              </li>
            </div>
            <div class="flex items-center gap-5">
              <img
                src="/images/noam-chomsky.png"
                class="h-20 w-20 rounded-full object-cover"
                alt=""
              />
              <li>
                "A linguagem é um processo de livre criação; suas leis e
                princípios são fixos, mas a maneira como os princípios da
                geração são usados é livre e infinitamente variada."{" "}
                <p class="font-bold">- Noam Chomsky</p>
              </li>
            </div>
          </ul>
        </div>
        <div class="flex h-full w-1/2 flex-col gap-4">
          <img
            src="/images/non-automaton.png"
            class="h-full rounded-2xl object-cover"
            alt=""
          />
          <img
            src="/images/automaton.png"
            class="h-full rounded-2xl object-cover"
            alt=""
          />
        </div>
      </div>
    </TextContainer>
  );
};
