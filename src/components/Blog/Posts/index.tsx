import { Subtitle } from "./Subtitle";
import { ListItem } from "./ListItem";
import { PostContainer } from "./PostContainer";
import { posts } from "./content";
import Image from "next/image";
import { Title } from "./Title";
import { Button } from "./Button";
export function Posts() {
  return (
    <section 
      className="flex flex-col items-center px-6"
    >
      <section
        className="md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        {
          posts.map(({ title, imgSrc, author, content }) => (
            <PostContainer>
              <div
                className="space-y-4"
              >
                <Image 
                  src='/blog/ig-blog.png' 
                  width={595} 
                  height={399}
                  alt="computer"
                />
                <h3
                  className="font-bold text-xl text-gray-500"
                >Como criar uma estratégia de marketing eficaz: um guia passo passo</h3>
                <p
                  className="font-normal text-base text-gray-500/50"
                >Uma estratégia de marketing eficaz é essencial para o sucesso de qualquer negócio...</p>
                
                <div
                  className="flex font-normal justify-between text-sm text-gray-500/50"
                >
                  <span>Domingos Henriques</span>
                  <span>17 Mar | Leitura: 9min</span>
                </div>

                <button
                  className="px-6 py-3 bg-white text-gray-500/50 border border-gray-500/50 rounded-3xl"
                >Ler mais</button>
              </div>
            </PostContainer>
          ))
        }
      </section>
      <Button>ver mais posts</Button>
    </section>
  )
}