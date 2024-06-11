import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <div class="flex">
        <div class="h-screen w-1/2 p-6">
          <div class="h-full overflow-clip rounded-xl">
            <img
              src="/images/alan-turing.png"
              class="h-full object-cover"
              alt="Solid logo"
            />
          </div>
        </div>
        <div class="w-1/2 p-6">
          <p class="text-3xl font-bold">
            Alan Turing: Pioneiro da Computação e da Inteligência Artificial
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Vida e Educação</p>
          <p>
            Alan Turing nasceu em 23 de junho de 1912 em Londres, Inglaterra.
            Desde cedo, mostrou uma aptidão excepcional para matemática e
            ciências. Turing estudou na Universidade de Cambridge, onde se
            formou com honras em matemática, e mais tarde obteve seu doutorado
            na Universidade de Princeton.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Contribuições Científicas </p>
          <p>
            Turing é amplamente reconhecido como o pai da ciência da computação.
            Em 1936, ele publicou o artigo "On Computable Numbers, with an
            Application to the Entscheidungsproblem", onde introduziu o conceito
            de uma "Máquina de Turing", uma abstração matemática que define os
            princípios fundamentais de um computador. Durante a Segunda Guerra
            Mundial, Turing trabalhou no Bletchley Park, onde desenvolveu a
            máquina Bombe, essencial para decifrar os códigos da máquina Enigma
            usada pelos nazistas. Seu trabalho contribuiu significativamente
            para a vitória dos Aliados. Após a guerra, Turing se dedicou à
            pesquisa em inteligência artificial e computação, propondo o famoso
            "Teste de Turing" para avaliar a inteligência das máquinas.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Legado</p>
          <p>
            Alan Turing faleceu em 7 de junho de 1954, mas seu legado continua a
            influenciar a ciência da computação e a inteligência artificial. Em
            2013, ele foi oficialmente perdoado pelo governo britânico por sua
            condenação injusta devido à sua orientação sexual, e em 2019, foi
            escolhido para estampar a nova nota de £50, destacando sua
            importância para a ciência e a sociedade.
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/3 p-6">
          <p class="text-3xl font-bold">
            Stephen Cook: Teórico da Complexidade Computacional
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Vida e Educação</p>
          <p>
            Stephen Cook nasceu em 14 de dezembro de 1939 em Buffalo, Nova York.
            Ele completou seu bacharelado em matemática na Universidade de
            Michigan e obteve seu doutorado no Instituto de Tecnologia de
            Harvard em 1966.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Contribuições Científicas </p>
          <p>
            Stephen Cook é mais conhecido por suas contribuições à teoria da
            complexidade computacional. Em 1971, ele publicou o artigo seminal
            "The Complexity of Theorem-Proving Procedures", onde introduziu o
            conceito de problemas NP-completos e formulou a famosa "Hipótese de
            Cook" ou "Teorema de Cook-Levin". Esse trabalho estabeleceu a base
            para a teoria da NP-completude, que é fundamental para a compreensão
            da dificuldade dos problemas computacionais e para a área de
            algoritmos.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Legado</p>
          <p>
            O trabalho de Cook na complexidade computacional teve um impacto
            profundo na ciência da computação teórica. Ele recebeu diversos
            prêmios e honrarias por suas contribuições, incluindo o Prêmio
            Turing em 1982. Suas pesquisas continuam a influenciar o
            desenvolvimento de algoritmos e a teoria da computação, sendo um
            pilar fundamental para os estudiosos da área.
          </p>
        </div>
        <div class="h-screen w-2/3 p-6">
          <div class="h-full overflow-clip rounded-xl">
            <img
              src="/images/stephen-cook.png"
              class="h-full object-cover"
              alt="Solid logo"
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="h-screen w-1/2 p-6">
          <div class="h-full overflow-clip rounded-xl">
            <img
              src="/images/noam-chomsky.png"
              class="h-full object-cover"
              alt="Solid logo"
            />
          </div>
        </div>
        <div class="w-1/2 p-6">
          <p class="text-3xl font-bold">
            Noam Chomsky: Revolucionário da Linguística e Crítico Social
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Vida e Educação</p>
          <p>
            Noam Chomsky nasceu em 7 de dezembro de 1928 na Filadélfia,
            Pensilvânia. Ele estudou na Universidade da Pensilvânia, onde
            completou seu bacharelado, mestrado e doutorado em linguística.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Contribuições Científicas </p>
          <p>
            Chomsky é amplamente reconhecido como o fundador da linguística
            moderna. Em 1957, ele publicou "Syntactic Structures", uma obra
            revolucionária que introduziu a teoria da gramática gerativa, que
            propõe que a capacidade de produzir e compreender a linguagem é
            inata ao ser humano. Sua teoria transformou a forma como entendemos
            a aquisição e estrutura da linguagem. Além de seu trabalho em
            linguística, Chomsky é um influente crítico social e político, autor
            de inúmeros livros e artigos que questionam a política externa dos
            Estados Unidos e a mídia corporativa.
          </p>
          <p class="mb-1 mt-5 text-xl font-bold">Legado</p>
          <p>
            O impacto de Noam Chomsky transcende a linguística, influenciando
            áreas como psicologia cognitiva, filosofia e ciência da computação.
            Sua teoria da gramática gerativa continua sendo um campo de estudo
            vital na linguística, e suas críticas sociais e políticas inspiram
            debates e movimentos ao redor do mundo. Chomsky permanece ativo como
            acadêmico e comentarista, contribuindo significativamente para o
            pensamento crítico contemporâneo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
