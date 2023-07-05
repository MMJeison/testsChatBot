const expandIcon = `<svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
<path fill="#ffffff" fill-rule="evenodd" d="M19 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 001.414 1.414L17 4.414V8a1 1 0 102 0V2zM1 18a1 1 0 001 1h6a1 1 0 100-2H4.414l3.793-3.793a1 1 0 10-1.414-1.414L3 15.586V12a1 1 0 10-2 0v6z"></path>
</svg>`
const collapseIcon = `<svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill="#ffffff" fill-rule="evenodd" d="M11 8a1 1 0 001 1h6a1 1 0 100-2h-3.586l3.793-3.793a1 1 0 00-1.414-1.414L13 5.586V2a1 1 0 10-2 0v6zm-2 4a1 1 0 00-1-1H2a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 101.414 1.414L7 14.414V18a1 1 0 102 0v-6z"></path>
</svg>`

const writeFile = ({ content, filename }) => {
  const file = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

const handleResponseReceived = (event) => {
  console.log('inside handleResponseReceived')
  const queryResult = event.detail.response.queryResult
  // console.log('queryResult: ', queryResult)
  const df_img_udea = document.querySelector('.df-img-udea')
  if (
    queryResult.fulfillmentMessages &&
    queryResult.fulfillmentMessages.length
  ) {
    // console.log('queryResult.fulfillmentMessages: ', queryResult.fulfillmentMessages);
    for (const message of queryResult.fulfillmentMessages) {
      if (
        message.payload &&
        message.payload.richContent &&
        message.payload.richContent.length
      ) {
        const contents = message.payload.richContent
        setTimeout(() => {
          let images = []
          // console.log('contents: ', contents)
          const chatbot = document.querySelector('df-messenger')
          // console.log('chatbot: ', chatbot)
          const df_msg_chat =
            chatbot.shadowRoot.querySelector('df-messenger-chat')
          const df_msg_list =
            df_msg_chat.shadowRoot.querySelector('df-message-list')
          const df_chips = df_msg_list.shadowRoot.querySelectorAll('df-chips')
          for (const df_chip of df_chips) {
            const as = df_chip.shadowRoot.querySelectorAll('a')
            for (const a of as) {
              a.style.fontSize = 'large'
            }
          }
          const df_cards = df_msg_list.shadowRoot.querySelectorAll('df-card')
          // console.log('df_cards: ', df_cards)
          for (const df_card of df_cards) {
            df_card.style.backgroundColor = 'transparent'
            df_card.style.boxShadow = 'none'
            df_card.style.border = 'none'
            const df_titles = df_card.shadowRoot.querySelectorAll('df-title')
            for (const df_title of df_titles) {
              const divtitles = df_title.shadowRoot.querySelectorAll('div')
              for (const div of divtitles) {
                div.style.fontSize = 'large'
              }
            }
            const df_descriptions =
              df_card.shadowRoot.querySelectorAll('df-description')
            for (const df_description of df_descriptions) {
              const divdescriptions =
                df_description.shadowRoot.querySelectorAll('div')
              for (const div of divdescriptions) {
                div.style.fontSize = 'large'
              }
            }
            const df_images = df_card.shadowRoot.querySelectorAll('df-image')
            for (const df_image of df_images) {
              // df_image.style.backgroundColor = 'blue'
              const img = df_image.shadowRoot.querySelector('img')
              // img.style.backgroundColor = 'green'
              images.push(img)
            }
          }
          // console.log('images: ', images)
          for (const card of contents[0]) {
            // console.log('card: ', card);
            if (card.type === 'image') {
              const myimg = document.createElement('img')
              myimg.src = card.rawUrl
              for (const image of images) {
                if (image.src === card.rawUrl) {
                  // console.log('Matched image: ', image)
                  // agregemos un evento onclick a la imagen
                  // console.log('image addEventListener: ', image)
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
        }, 300)
      }
    }
  }
}
const chatbot = document.querySelector('df-messenger')

chatbot.addEventListener('df-response-received', handleResponseReceived)

const handleDfLoaded = (elem) => {
  console.log('inside handleDfLoaded')
  const handleMaximize = (elem) => {
    const stylesBtn = elem.shadowRoot.querySelector(
      'style[scope="df-messenger"]'
    )
    let stylesBtnStr = stylesBtn.innerHTML
    // console.log('stylesBtnStr: ', stylesBtnStr)
    stylesBtnStr = stylesBtnStr.replace(
      '@media screen and (max-width: 500px)',
      '@media screen and (max-width: 2000px)'
    )
    stylesBtnStr = stylesBtnStr.replace(
      '@media screen and (min-width: 501px)',
      '@media screen and (min-width: 2001px)'
    )
    stylesBtn.innerHTML = stylesBtnStr
    const df_msg_chat = elem.shadowRoot.querySelector('df-messenger-chat')
    const stylesChat = df_msg_chat.shadowRoot.querySelector(
      'style[scope="df-messenger-chat"]'
    )
    let stylesChatStr = stylesChat.innerHTML
    stylesChatStr = stylesChatStr.replace(
      '@media screen and (max-width: 500px)',
      '@media screen and (max-width: 2000px)'
    )
    stylesChatStr = stylesChatStr.replace(
      '@media screen and (min-width: 501px)',
      '@media screen and (min-width: 2001px)'
    )
    stylesChat.innerHTML = stylesChatStr
    const df_msg_titlebar = df_msg_chat.shadowRoot.querySelector(
      'df-messenger-titlebar'
    )
    const stylesTitlebar = df_msg_titlebar.shadowRoot.querySelector(
      'style[scope="df-messenger-titlebar"]'
    )
    let stylesTitlebarStr = stylesTitlebar.innerHTML
    stylesTitlebarStr = stylesTitlebarStr.replace(
      '@media screen and (min-width: 501px)',
      '@media screen and (min-width: 2001px)'
    )
    stylesTitlebar.innerHTML = stylesTitlebarStr
  }
  const handleMinimize = (elem) => {
    const stylesBtn = elem.shadowRoot.querySelector(
      'style[scope="df-messenger"]'
    )
    let stylesBtnStr = stylesBtn.innerHTML
    stylesBtnStr = stylesBtnStr.replace(
      '@media screen and (max-width: 2000px)',
      '@media screen and (max-width: 500px)'
    )
    stylesBtnStr = stylesBtnStr.replace(
      '@media screen and (min-width: 2001px)',
      '@media screen and (min-width: 501px)'
    )
    stylesBtn.innerHTML = stylesBtnStr
    const df_msg_chat = elem.shadowRoot.querySelector('df-messenger-chat')
    const stylesChat = df_msg_chat.shadowRoot.querySelector(
      'style[scope="df-messenger-chat"]'
    )
    let stylesChatStr = stylesChat.innerHTML
    stylesChatStr = stylesChatStr.replace(
      '@media screen and (max-width: 2000px)',
      '@media screen and (max-width: 500px)'
    )
    stylesChatStr = stylesChatStr.replace(
      '@media screen and (min-width: 2001px)',
      '@media screen and (min-width: 501px)'
    )
    stylesChat.innerHTML = stylesChatStr
    const df_msg_titlebar = df_msg_chat.shadowRoot.querySelector(
      'df-messenger-titlebar'
    )
    const stylesTitlebar = df_msg_titlebar.shadowRoot.querySelector(
      'style[scope="df-messenger-titlebar"]'
    )
    let stylesTitlebarStr = stylesTitlebar.innerHTML
    stylesTitlebarStr = stylesTitlebarStr.replace(
      '@media screen and (min-width: 2001px)',
      '@media screen and (min-width: 501px)'
    )
    stylesTitlebar.innerHTML = stylesTitlebarStr
  }
  const df_msg_chat = elem.shadowRoot.querySelector('df-messenger-chat')
  //
  // actualizando esilos de df-message-list
  const df_msg_list = df_msg_chat.shadowRoot.querySelector('df-message-list')
  const stylesMsgList = df_msg_list.shadowRoot.querySelector(
    'style[scope="df-message-list"]'
  )
  let stylesMsgListStr = stylesMsgList.innerHTML
  // encontremos en que posicion esta el #messageList .bot-animation {
  const posBotAnimation = stylesMsgListStr.indexOf(
    '\n#messageList .bot-animation {'
  )
  // encontramos el siguiente } despues de #messageList .bot-animation {
  const posEndBotAnimation = stylesMsgListStr.indexOf('}', posBotAnimation)
  const classBotAnimation =
    stylesMsgListStr.substring(posBotAnimation, posEndBotAnimation - 1) +
    '\n\tmax-width: 700px;\n\tfont-size: large;\n}'
  // console.log('classBotAnimation: ', classBotAnimation)
  // encontremos en que posicion esta el #messageList .user-animation {
  const posUserAnimation = stylesMsgListStr.indexOf(
    '\n#messageList .user-animation {'
  )
  // encontramos el siguiente } despues de #messageList .user-animation {
  const posEndUserAnimation = stylesMsgListStr.indexOf('}', posUserAnimation)
  const classUserAnimation =
    stylesMsgListStr.substring(posUserAnimation, posEndUserAnimation - 1) +
    '\n\tmax-width: 700px;\n\tfont-size: large;\n}'
  // console.log('classUserAnimation: ', classUserAnimation)
  stylesMsgListStr =
    stylesMsgListStr.substring(0, posBotAnimation) +
    classBotAnimation +
    stylesMsgListStr.substring(posEndBotAnimation + 1, posUserAnimation) +
    classUserAnimation +
    stylesMsgListStr.substring(posEndUserAnimation + 1)
  stylesMsgList.innerHTML = stylesMsgListStr
  //
  // actualizando estilos de df-messenger-user-input
  const df_msg_user_input = df_msg_chat.shadowRoot.querySelector(
    'df-messenger-user-input'
  )
  const stylesUserInput = df_msg_user_input.shadowRoot.querySelector(
    'style[scope="df-messenger-user-input"]'
  )
  let stylesUserInputStr = stylesUserInput.innerHTML
  // encontremos en que posicion esta el .input-container input {
  const posInputContainer = stylesUserInputStr.indexOf(
    '\n.input-container input {'
  )
  // encontramos el siguiente } despues de .input-container input {
  const posEndInputContainer = stylesUserInputStr.indexOf(
    '}',
    posInputContainer
  )
  let classInputContainer =
    stylesUserInputStr.substring(posInputContainer, posEndInputContainer) +
    '\n\tmax-width: 700px;\n}'
  // encontremos en que posicion esta el font-size: dentro de .input-container input {
  const posFontSize = classInputContainer.indexOf('font-size:')
  // encontramos el siguiente ; despues de font-size: dentro de .input-container input {
  const posEndFontSize = classInputContainer.indexOf(';', posFontSize)
  classInputContainer =
    classInputContainer.substring(0, posFontSize) +
    'font-size: large;' +
    classInputContainer.substring(posEndFontSize + 1)
  // console.log('classInputContainer: ', classInputContainer)
  stylesUserInputStr =
    stylesUserInputStr.substring(0, posInputContainer) +
    classInputContainer +
    stylesUserInputStr.substring(posEndInputContainer + 1)
  // console.log('stylesUserInputStr: ', stylesUserInputStr)
  stylesUserInput.innerHTML = stylesUserInputStr
  //
  //
  const df_msg_titlebar = df_msg_chat.shadowRoot.querySelector(
    'df-messenger-titlebar'
  )
  const stylesTitlebar = df_msg_titlebar.shadowRoot.querySelector(
    'style[scope="df-messenger-titlebar"]'
  )
  let stylesTitlebarStr = stylesTitlebar.innerHTML
  // agreguemos al final una nueva clase
  stylesTitlebarStr +=
    '\n@media screen and (max-width: 500px) {\n\t.btn-max-min {\n\t\tdisplay: none;\n\t}\n}\n.btn-max-min {\n\twidth: 24px;\n\theight: 24px;\n\tcursor: pointer;\n}'
  // console.log('stylesTitlebarStr: ', stylesTitlebarStr)
  stylesTitlebar.innerHTML = stylesTitlebarStr
  const title_wrapper =
    df_msg_titlebar.shadowRoot.querySelector('.title-wrapper')
  const divWrapperBtns = document.createElement('div')
  divWrapperBtns.className = 'btn-max-min'
  divWrapperBtns.innerHTML = expandIcon
  divWrapperBtns.addEventListener('click', () => {
    if (divWrapperBtns.innerHTML === collapseIcon) {
      divWrapperBtns.innerHTML = expandIcon
      handleMinimize(elem)
    } else {
      divWrapperBtns.innerHTML = collapseIcon
      handleMaximize(elem)
    }
  })
  title_wrapper.style.padding = '0 10px'
  title_wrapper.appendChild(divWrapperBtns)
}
chatbot.addEventListener('df-messenger-loaded', () => handleDfLoaded(chatbot))
const df_img_udea = document.querySelector('.df-img-udea')
const handleHidden = () => {
  df_img_udea.className = 'df-img-udea hidden'
}
df_img_udea.addEventListener('click', handleHidden)
