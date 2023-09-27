export function readingRate(content: string) {
  let readingRateInMinuts = 0
  const wordCount = content.split(" ").length;
  readingRateInMinuts = ((wordCount*60)/200)/60;
  return Math.ceil(readingRateInMinuts);
}