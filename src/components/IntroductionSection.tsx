import { Component } from "solid-js";
import { TextContainer } from "./TextContainer";

export const IntroductionSection: Component = () => {
  return (
    <TextContainer title="Introdução">
      <div class="flex flex-col justify-between gap-20 pt-6">
        <p>
          Bem-vindo ao nosso site sobre Teoria da Computação! Este site foi
          criado como parte de um trabalho de extensão para a matéria de
          Introdução à Teoria da Computação. Aqui, exploramos as vidas e
          contribuições de Alan Turing, Stephen Cook e Noam Chomsky, três
          gigantes cujas obras moldaram o campo da ciência da computação.
          Esperamos que este site inspire você a aprender mais sobre essa
          fascinante área e sua importância para o mundo moderno.
        </p>
        <ul class="flex list-disc flex-col justify-between gap-20">
          <div class="flex items-center gap-10">
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
          <div class="flex items-center gap-10">
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
          <div class="flex items-center gap-10">
            <img
              src="/images/noam-chomsky.png"
              class="h-20 w-20 rounded-full object-cover"
              alt=""
            />
            <li>
              "A linguagem é um processo de livre criação; suas leis e
              princípios são fixos, mas a maneira como os princípios da geração
              são usados é livre e infinitamente variada."{" "}
              <p class="font-bold">- Noam Chomsky</p>
            </li>
          </div>
        </ul>
      </div>
    </TextContainer>
  );
};
