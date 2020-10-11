import image from './assets/image.png'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
  new TitleBlock( 'Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      'text-align': 'center',
      background: 'gray',
      color: '#fff'
    }
  }),
  new TextBlock( 'Here we go with some text', {
    tag: 'p',
    styles: {}
  }),
  new ColumnsBlock( [
    '111111111',
    '222222222',
    '333333333'
  ], {
    styles: {}
  }),
  new ImageBlock(image, {
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