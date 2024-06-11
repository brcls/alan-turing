import { FaSolidArrowDownLong } from "solid-icons/fa";
import { Component } from "solid-js";

const ScrollButton: Component = () => {
  const handleOnClickBottom = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top: pageHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleOnClickBottom}
      class="fixed bottom-4 left-4 z-10 m-auto flex h-10 w-min animate-bounce items-center justify-center gap-4 rounded-lg border border-zinc-700/50 bg-zinc-800 px-6 py-4 text-center font-bold"
    >
      <FaSolidArrowDownLong /> Próximo
    </button>
  );
};

export default ScrollButton;
