import { getCollection } from "astro:content";

export async function getPublishedBlogs() {
  return (await getCollection('blog', ({ data }) => {
    // console.log(import.meta.env.PROD, 'PPPP')
    // return import.meta.env.PROD ? data.draft !== true : true;
    console.log('data.draft:', data, data.draft)
    return data.draft !== true;
  })).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
