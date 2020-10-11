import image from './assets/image.png'

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      tag: 'h2',
      styles: `text-align: center;`
    }
  },
  {
    type: 'text',
    value: 'Here we go with some text'
  },
  { type: 'columns',
    value: [
      '111111111',
      '222222222',
      '333333333'
    ]},
  {
    type: 'image',
    value: image
  }
]