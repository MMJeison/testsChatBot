import {
  expandIcon,
  collapseIcon,
  styles_df_msg,
  styles_df_msg_chat,
  styles_df_msg_titlebar,
  styles_df_msg_list,
  styles_df_msg_user_input,
  styles_df_card_img,
  styles_df_card_title,
  styles_df_chips,
  styles_df_description
} from './assets.js'

import { minimize, maximize } from './utils.js'

const $qs = (selector) => document.querySelector(selector)
const chatbot = $qs('df-messenger')

// funcion para ejecutar cuando se cargue el chatbot
const handleDFLoaded = () => {
  // cargamos los estilos
  const df_msg_styles = chatbot.shadowRoot.querySelector('style')
  df_msg_styles.innerHTML = styles_df_msg()
  const df_msg_chat = chatbot.shadowRoot.querySelector('df-messenger-chat')
  const df_msg_chat_styles = df_msg_chat.shadowRoot.querySelector('style')
  df_msg_chat_styles.innerHTML = styles_df_msg_chat()
  const df_msg_titlebar = df_msg_chat.shadowRoot.querySelector(
    'df-messenger-titlebar'
  )
  const df_msg_titlebar_styles =
    df_msg_titlebar.shadowRoot.querySelector('style')
  df_msg_titlebar_styles.innerHTML = styles_df_msg_titlebar()
  const df_msg_list = df_msg_chat.shadowRoot.querySelector('df-message-list')
  const df_msg_list_styles = df_msg_list.shadowRoot.querySelector('style')
  df_msg_list_styles.innerHTML = styles_df_msg_list()
  const df_msg_user_input = df_msg_chat.shadowRoot.querySelector(
    'df-messenger-user-input'
  )
  const df_msg_user_input_styles =
    df_msg_user_input.shadowRoot.querySelector('style')
  df_msg_user_input_styles.innerHTML = styles_df_msg_user_input()
  // creamos boton para maximizar/minimizar
  const title_wrapper =
    df_msg_titlebar.shadowRoot.querySelector('.title-wrapper')
  const divWrapperBtns = document.createElement('div')
  divWrapperBtns.className = 'btn-max-min'
  divWrapperBtns.innerHTML = expandIcon
  // agregamos eventos al boton
  divWrapperBtns.addEventListener('click', () => {
    if (divWrapperBtns.innerHTML === collapseIcon) {
      divWrapperBtns.innerHTML = expandIcon
      minimize()
    } else {
      divWrapperBtns.innerHTML = collapseIcon
      maximize()
    }
  })
  // agregamos el boton al titulo
  title_wrapper.appendChild(divWrapperBtns)
}
// agregamos evento para cuando se cargue el chatbot
chatbot.addEventListener('df-messenger-loaded', handleDFLoaded)
//
const df_img_udea = $qs('.df-img-udea')
const handleHidden = () => {
  df_img_udea.className = 'df-img-udea hidden'
}
df_img_udea.addEventListener('click', handleHidden)
// funcion para ejecutar cuando se reciba una respuesta
const handleResponseReceived = (event) => {
  console.log('inside handleResponseReceived')
  const queryResult = event.detail.response.queryResult
  // console.log('queryResult: ', queryResult);
  if (
    queryResult.fulfillmentMessages &&
    queryResult.fulfillmentMessages.length
  ) {
    // console.log('queryResult.fulfillmentMessages: ', queryResult.fulfillmentMessages);
    setTimeout(() => {
      let images = []
      // console.log('contents: ', contents)
      const df_msg_chat = chatbot.shadowRoot.querySelector('df-messenger-chat')
      const df_msg_list =
        df_msg_chat.shadowRoot.querySelector('df-message-list')
      const df_chips = df_msg_list.shadowRoot.querySelectorAll('df-chips')
      for (const df_chip of df_chips) {
        const df_chip_styles = df_chip.shadowRoot.querySelector('style')
        df_chip_styles.innerHTML = styles_df_chips()
      }
      const df_cards = df_msg_list.shadowRoot.querySelectorAll('df-card')
      // console.log('df_cards: ', df_cards)
      for (const df_card of df_cards) {
        const df_titles = df_card.shadowRoot.querySelectorAll('df-title')
        for (const df_title of df_titles) {
          const df_title_styles = df_title.shadowRoot.querySelector('style')
          df_title_styles.innerHTML = styles_df_card_title()
        }
        const df_descriptions =
          df_card.shadowRoot.querySelectorAll('df-description')
        for (const df_description of df_descriptions) {
          const df_description_styles =
            df_description.shadowRoot.querySelector('style')
          df_description_styles.innerHTML = styles_df_description()
        }
        const df_images = df_card.shadowRoot.querySelectorAll('df-image')
        for (const df_image of df_images) {
          const img = df_image.shadowRoot.querySelector('img')
          images.push(img)
        }
      }
      // console.log('images: ', images)
      for (const message of queryResult.fulfillmentMessages) {
        if (
          message.payload &&
          message.payload.richContent &&
          message.payload.richContent.length
        ) {
          const contents = message.payload.richContent
          for (const card of contents[0]) {
            // console.log('card: ', card);
            if (card.type === 'image') {
              const myimg = document.createElement('img')
              myimg.src = card.rawUrl
              for (const image of images) {
                if (image.src === card.rawUrl) {
                  image.addEventListener('click', () => {
                    df_img_udea.innerHTML = ''
                    df_img_udea.className = 'df-img-udea show'
                    df_img_udea.appendChild(myimg)
                  })
                  // break
                }
              }
            }
          }
        }
      }
    }, 300)
  }
}
// agregamos evento para cuando se reciba una respuesta
chatbot.addEventListener('df-response-received', handleResponseReceived)
