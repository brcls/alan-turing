import { FaSolidArrowDownLong } from "solid-icons/fa";
import { Component } from "solid-js";

interface IProps {
  mainRef: HTMLDivElement | null;
}

const ScrollButton: Component<IProps> = ({ mainRef }) => {
  const scrollToNext = () => {
    if (mainRef) {
      const scrollableDiv = mainRef;
      const currentScroll = scrollableDiv.scrollTop;
      const windowHeight = window.innerHeight;

      const nextScroll = currentScroll + windowHeight;

      scrollableDiv.scrollTo({
        top: nextScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      class="fixed bottom-4 left-4 z-10 m-auto flex h-10 w-min animate-bounce items-center justify-center gap-4 rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold"
    >
      <FaSolidArrowDownLong /> Próximo
    </button>
  );
};

export default ScrollButton;
