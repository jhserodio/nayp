// TOGGLE ELEMENTS

import * as header from './components/header'
import * as footer from './components/footer'
import { cartPreview } from './components/cartPreview'
import { toggleDisplay } from './utils/toggleElements'

// declaração carrinho
cartPreview();
toggleDisplay('active-product-social');
