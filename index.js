const model = [
  { type: 'title', value: 'Hallo world from JS' },
  { type: 'text', value: 'Here we go with some text' },
  { type: 'columns', value: [
      '111111111',
      '222222222',
      '333333333'
    ]},
  { type: 'image', value: './assets/image.png' }
]

const $site = document.querySelector('#site')

model.forEach(block => {

  let html = ''

  if (block.type === 'title') {
    html = title(block)
  } else if (block.type === 'text') {
    html = text(block)
  } else if (block.type === 'columns') {
    html = columns(block)
  } else if (block.type === 'image') {
    html = image(block)
  }

  $site.insertAdjacentHTML('beforeend', html)

})

function title(block) {
  return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
  `
}

function text(block) {
  return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
  `
}

function columns(block) {
  let columns = block.value.map(column => ` <div class="col-sm"> <p> ${column} </p> </div> `)
  return `
    <div class="row">
        ${columns.join('')}
    </div>
  `
}

function image(block) {
  return `
    <div class="row">
        <img src="${block.value}" alt="img" />
    </div>
  `
}