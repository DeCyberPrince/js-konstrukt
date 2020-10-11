import image from './assets/image.png'
import { Block } from './classes/blocks'

export const model = [
  new Block('title', 'Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      'text-align': 'center',
      background: 'gray',
      color: '#fff'
    }
  }),
  new Block('text', 'Here we go with some text', {
    tag: 'p',
    styles: {}
  }),
  new Block('columns', [
    '111111111',
    '222222222',
    '333333333'
  ], {
    styles: {}
  }),
  new Block('image', image, {
    styles: {
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    classes: [''],
    alt: 'Picture'
  })
]