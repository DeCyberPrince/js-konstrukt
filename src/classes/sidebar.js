import { block } from '../utils'
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
            block('img'),
            block('columns'),
        ].join('')
    }

    add(event) {
        event.preventDefault()
        const type = event.target.name,
            value = event.target.value.value,
            styles = event.target.styles.value,
            imageStyles = event.target.imageStyles?.value

        let newBlock
        switch (type) {
            case 'title':
                newBlock = new TitleBlock(value, { styles })
                break
            case 'text':
                newBlock = new TextBlock(value, { styles })
                break
            case 'img':
                newBlock = new ImageBlock(value, { styles, imageStyles })
                break
            case 'columns':
                newBlock = new ColumnsBlock(value.split(','), { styles })
                break
            default:
        }
        this.update(newBlock)
        event.target.value.value = event.target.styles.value = ''
        if (imageStyles) {
            event.target.imageStyles.value = ''
        }
    }
}