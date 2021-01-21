export function row(content, styles = '') {
  return `
  <div class="row" style="${styles}">
      ${content}
  </div>
  `
}

export function col(content) {
  return `
  <div class="col-sm">
      ${content}
  </div>
  `
}

export function css(styles = {}) {
  if (typeof styles === 'string') {
    return styles
  }
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    let html = `
        <form name="${type}" data-class="${convertTypeToClassName(type)}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            `
    if (type === 'img') {
        html += `
            <div class="form-group">
                <input class="form-control form-control-sm" name="imageStyles" placeholder="imageStyles">
            </div>`
    }
    html += `
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <hr/>`
    return html
}

function convertTypeToClassName(type = '') {
    return `${type[0].toUpperCase()}${type.slice(1)}Block`
}