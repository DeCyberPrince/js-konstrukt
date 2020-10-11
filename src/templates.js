import { row, col } from "./utils";

function title(block) {
  const { tag = 'h1', styles } = block.options
  return row(
    col(`<${tag}> ${block.value} </${tag}>`),
    styles
  )
}

function text(block) {
  return row(
    col( `<p> ${block.value} </p>` )
  )
}

function columns(block) {
  let columns = block.value.map(column => col(column))
  return row(columns.join(''))
}

function image(block) {
  return row(`<img src="${block.value}" alt="img" />`)
}

export const templates = {
  title,
  text,
  image,
  columns
}