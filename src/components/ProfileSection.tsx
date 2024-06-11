import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import { Container } from "./Container";

interface ProfileSectionProps {
  image?: string;
  alt: string;
  title: string;
  life: string;
  contributions: string;
  legacy: string;
}

const ProfileSection: Component<ProfileSectionProps> = ({
  image,
  alt,
  title,
  life,
  contributions,
  legacy,
}) => {
  return (
    <Container className="flex p-6 pt-24">
      {image && (
        <Motion.img
          inView={{ opacity: [0, 1] }}
          transition={{ duration: 7, easing: "linear" }}
          inViewOptions={{ once: true }}
          class="h-full w-1/2 cursor-pointer rounded-xl object-cover transition duration-500 hover:scale-[1.01]"
          src={image}
          alt={alt}
        />
      )}
      <div class={`px-6 ${image ? "w-1/2" : "w-full"}`}>
        <p class="text-3xl font-bold">{title}</p>
        <p class="mb-2 mt-5 text-xl font-bold">Vida e Educação</p>
        <p>{life}</p>
        <p class="mb-2 mt-5 text-xl font-bold">Contribuições Científicas</p>
        <p>{contributions}</p>
        <p class="mb-2 mt-5 text-xl font-bold">Legado</p>
        <p>{legacy}</p>
      </div>
    </Container>
  );
};

export default ProfileSection;
