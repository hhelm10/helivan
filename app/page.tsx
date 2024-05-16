import path from "path";
import fs from "fs";
import { Landing, Slideshow, getHTML } from "@/components/landing";

export default async function Home() {

  const directory = path.resolve('./app/posts');
  const fileNames = fs.readdirSync(directory);
  const slugs = fileNames
      .filter((fileName: string) => fileName.endsWith('mdx'))
      .map((fileName) => fileName.replace('.mdx', ''));
  const metas = slugs.map((slug) => getSlideMeta(slug));

  return (
      <div>
          <Landing/>
      </div>
  );
}

async function getSlideMeta(slide: string) {
    const mod = await import(`./posts/${slide}.mdx`);
    return mod.meta;
}