import image from './assets/image.png'

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      tag: 'h2',
      styles: {
        'text-align': 'center',
        background: 'gray',
        color: '#fff'
      }
    }
  },
  {
    type: 'text',
    value: 'Here we go with some text',
    options: {
      tag: 'p',
      styles: {}
    }
  },
  { type: 'columns',
    value: [
      '111111111',
      '222222222',
      '333333333'
    ],
    options: {
      styles: {}
    }
  },
  {
    type: 'image',
    value: image,
    options: {
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
    }
  }
]