import { Component } from "solid-js";
import { TextContainer } from "./TextContainer";

export const Applications: Component = () => {
  return (
    <TextContainer title="Aplicações">
      <div class="flex h-full divide-x divide-solid">
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="https://uhe.edu.pk/wp-content/uploads/2022/10/1.png"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
          <div>
            <p class="mb-2 text-2xl font-bold">Computação e Criptografia</p>
            <p>
              O trabalho de Alan Turing na decifração de códigos durante a
              Segunda Guerra Mundial lançou as bases para a criptografia
              moderna, que é essencial para a segurança da informação.
            </p>
          </div>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <div>
            <p class="mb-2 text-2xl font-bold">Complexidade Computacional</p>
            <p>
              Os conceitos introduzidos por Stephen Cook são fundamentais para a
              otimização e ciência de dados, ajudando a identificar quais
              problemas podem ser resolvidos eficientemente.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Complexity_subsets_pspace.svg/1920px-Complexity_subsets_pspace.svg.png"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-10 border-zinc-800 px-4">
          <img
            src="https://www.colorado.edu/lab/clear/sites/default/files/styles/medium/public/block/infographs-16_1.png?itok=HJRrMXs0"
            alt=""
            class="h-1/2 rounded-xl object-cover"
          />
          <div>
            <p class="mb-2 text-2xl font-bold">Linguística Computacional</p>
            <p>
              As teorias de Noam Chomsky sobre a estrutura da linguagem
              influenciam o desenvolvimento de tecnologias de processamento de
              linguagem natural, usadas em assistentes virtuais, tradução
              automática e muito mais.
            </p>
          </div>
        </div>
      </div>
    </TextContainer>
  );
};
