import {col, css, row} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Method toHTML must be initialized')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options
    return row(
      col(`<${tag}> ${this.value} </${tag}>`),
      css(styles)
    )
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'p', styles } = this.options
    return row(
      col( `<${tag}> ${this.value} </${tag}>` ),
      css(styles)
    )
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { classes, styles, imageStyles, alt = '' } = this.options
    return row(
      `<img class="${classes.join(' ')}" style="${css(imageStyles)}" src="${this.value}" alt="${alt}" />`,
      css(styles)
    )
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options
    let columns = this.value.map(column => col(column))
    return row(columns.join(''), css(styles))
  }
}