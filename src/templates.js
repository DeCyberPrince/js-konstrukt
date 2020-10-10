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

export const templates = {
  title,
  text,
  image,
  columns
}