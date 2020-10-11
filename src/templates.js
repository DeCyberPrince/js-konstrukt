import { row, col, css } from "./utils";

function title(block) {
  const { tag = 'h1', styles } = block.options
  return row(
    col(`<${tag}> ${block.value} </${tag}>`),
    css(styles)
  )
}

function text(block) {
  const { tag = 'p', styles } = block.options
  return row(
    col( `<${tag}> ${block.value} </${tag}>` ),
    css(styles)
  )
}

function columns(block) {
  const { styles } = block.options
  let columns = block.value.map(column => col(column))
  return row(columns.join(''), css(styles))
}

function image(block) {
  const { classes, styles, imageStyles, alt = '' } = block.options
  return row(
    `<img class="${classes.join(' ')}" style="${css(imageStyles)}" src="${block.value}" alt="${alt}" />`,
    css(styles)
  )
}

export const templates = {
  title,
  text,
  image,
  columns
}