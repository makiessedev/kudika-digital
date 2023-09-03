import { Paragraph } from "./Paragraph";
import { PostsContainer } from "./PostsContainer";
import { Title } from "./Title";

export function LearningToday() {
  return (
    <section
      className="px-6 lg:px-20 mt-8 space-y-4"
    >
      <Title>
        aprendizado de hoje
      </Title>
      <Paragraph>
        Veja os últimos textos da equipe kudika digital
      </Paragraph>
      <section
        className="md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="flex justify-center items-center text-gray-100 h-[305px] font-black text-2xl bg-red-500 p-7 space-y-2 mb-4 md:m-6">POST_1</div>
        <div className="flex justify-center items-center text-gray-100 h-[305px] font-black text-2xl bg-red-500 p-7 space-y-2 mb-4 md:m-6">POST_2</div>
        <div className="flex justify-center items-center text-gray-100 h-[305px] font-black text-2xl bg-red-500 p-7 space-y-2 mb-4 md:m-6">POST_3</div>
      </section>
    </section>
  )
}