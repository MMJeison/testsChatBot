export const expandIcon = `
	<svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
	<path fill="#ffffff" fill-rule="evenodd" d="M19 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 001.414 1.414L17 4.414V8a1 1 0 102 0V2zM1 18a1 1 0 001 1h6a1 1 0 100-2H4.414l3.793-3.793a1 1 0 10-1.414-1.414L3 15.586V12a1 1 0 10-2 0v6z"></path>
	</svg>
	`
export const collapseIcon = `
	<svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
		<path fill="#ffffff" fill-rule="evenodd" d="M11 8a1 1 0 001 1h6a1 1 0 100-2h-3.586l3.793-3.793a1 1 0 00-1.414-1.414L13 5.586V2a1 1 0 10-2 0v6zm-2 4a1 1 0 00-1-1H2a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 101.414 1.414L7 14.414V18a1 1 0 102 0v-6z"></path>
	</svg>`

export const styles_df_msg = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .df-messenger-wrapper {
      background-color: white;
      border: 0;
      bottom: 20px;
      color: rgba(0,0,0,0.87);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin: 0;
      padding: 0;
      position: fixed;
      right: 20px;
      text-decoration: none;
      z-index: 100;
    }
    .df-messenger-wrapper a, .df-messenger-wrapper button {
      cursor: pointer;
    }
    .df-messenger-wrapper svg {
      fill: rgba(0,0,0,0.87);
      margin: 0;
      padding: 0;
    }
    .df-messenger-wrapper img {
      border: 0;
      margin: 0;
      padding: 0;
    }
    button#widgetIcon {
      background: #42A5F5;
      background: var(--df-messenger-button-titlebar-color);
      border: none;
      border-radius: 50%;
      bottom: 0px;
      box-shadow: rgba(0, 0, 0, 0.24) 1px 4px 15px 0px;
      cursor: pointer;
      height: 56px;
      position: absolute;
      right: 0px;
      width: 56px;
    }
    button#widgetIcon:focus {
      outline-width: 0;
    }
    button#widgetIcon .df-chat-icon {
      height: 36px;
      left: 10px;
      opacity: 1;
      position: absolute;
      top: 10px;
      transition: opacity 0.5s;
      width: 36px;
    }
    button#widgetIcon .df-chat-icon.hidden {
      opacity: 0;
    }
    button#widgetIcon div.rotate-fade #closeSvg {
      opacity: 1;
      transform: rotate(-90deg);
    }
    button#widgetIcon div #closeSvg {
      fill: white;
      fill: var(--df-messenger-button-titlebar-font-color);
      left: 15px;
      opacity: 0;
      position: absolute;
      top: 15px;
      transition: transform 0.5s, opacity 0.5s;
    }
    button#widgetIcon .df-chat-icon.default {
      display: none;
    }
    button#widgetIcon .df-chat-icon.default.show {
      display: initial;
    }
    @media screen and (max-width: ${maxwidth}px) {
      .expanded > #widgetIcon {
        visibility: hidden;
      }
    }
    @media screen and (min-width: ${minwidth}px) {
      .expanded > #widgetIcon {
        visibility: visible;
      }
    }
    .cls-1 {
      clip-path: url(#clip-path);
    }
    .cls-2 {
      fill: #ef6c00;
    }
    .cls-3 {
      fill: #ff9800;
    }
    .cls-4 {
      fill: #bf360c;
    }
    .cls-4, .cls-5 {
      opacity: 0.1;
    }
    .cls-5 {
      fill: #fff;
    }
    `
}
export const styles_df_msg_chat = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
  div.chat-wrapper {
    background-color: #e5e5e5;
    border-radius: 4px;
    bottom: 105px;
    box-shadow: rgba(0, 0, 0, 0.24) 1px 4px 15px 0px;
    display: flex;
    flex-direction: column;
    height: 0;
    opacity: 0;
    position: fixed;
    right: 20px;
    transform: translateX(25%) translateY(35%) scale(0.5, 0.5);
    transition: transform 0.2s ease, opacity 0.2s ease-in, height 0s ease 0.2s;
    width: 370px;
    overflow: hidden;
  }
  div.chat-min {
    background-color: #fafafa;
    bottom: 20px;
    height: 0;
    max-width: 370px;
    right: 100px;
    width: auto;
  }
  div.chat-wrapper.chat-min[opened="true"] {
    height: auto;
  }
  div.chat-wrapper[opened="true"] {
    height: 560px;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale(1, 1);
    transition: transform 0.2s ease, opacity 0.2s ease-in;
  }
  div.chat-min df-message-list {
    background-color: #fafafa;
    background-color: var(--df-messenger-chat-background-color);
  }
  div.chat-min df-messenger-titlebar {
    display: none;
  }
  div.chat-min df-messenger-user-input {
    display: none;
  }
  df-message-list {
    background-color: #fafafa;
    background-color: var(--df-messenger-chat-background-color);
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 250px;
  }
  df-messenger-titlebar {
    z-index: 2;
  }
  @media screen and (max-width: ${maxwidth}px) {
    div.chat-wrapper {
      bottom: 0;
      right: 0;
      width: 100%;
    }
    div.chat-wrapper[opened="true"] {
      height: 100%;
    }
  }
  `
}
export const styles_df_msg_titlebar = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .title-wrapper {
      align-items: center;
      background-color: #42A5F5;
      background-color: var(--df-messenger-button-titlebar-color);
      border-radius: 5px 5px 0 0;
      box-shadow: 0px 3px 6px 0px #00000029;
      color: white;
      color: var(--df-messenger-button-titlebar-font-color);
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      height: 50px;
      /* justify-content: space-between; */
      padding-left: 15px;
      /* new styles */
      padding-right: 15px;
    }
    /* new class */
    .title-wrapper #dfTitlebar {
      margin-right: auto;
    }
    #minimizeIcon {
      fill: white;
      fill: var(--df-messenger-button-titlebar-font-color);
      margin: 15px;
      transform: rotate(90deg);
    }
    @media screen and (min-width: ${minwidth}px) {
      #minimizeIcon {
        visibility: hidden;
      }
    }
    /* new class */
    @media screen and (max-width: 500px) {
      .btn-max-min {
        display: none;
      }
    }
    /* new class */
    .btn-max-min {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    `
}
export const styles_df_msg_list = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .message-list-wrapper.minimized {
      flex-direction: row;
    }
    .message-list-wrapper.minimized #messageList {
      overflow-y: hidden;
    }
    .message-list-wrapper.minimized #messageList .message {
      cursor: pointer;
      margin: 0;
    }
    .minimized #messageList > :not(:first-child) {
      display: none;
    }
    .message-list-wrapper #dismissIcon {
      display: none;
    }
    .message-list-wrapper.minimized #dismissIcon {
      align-self: flex-start;
      cursor: pointer;
      display: initial;
      fill: rgba(0,0,0,0.87);
      fill: var(--df-messenger-minimized-chat-close-icon-color);
      flex: 0 0 auto;
      padding: 10px;
    }
    .message-list-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
    }
    #messageList {
      display: flex;
      flex-direction: column;
      flex: 1 1;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 10px;
    }
    #messageList #typing {
      font-size: 14px;
    }
    #messageList .message {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      color: rgba(0,0,0,0.87);
      color: var(--df-messenger-font-color);
      flex: 0 0 auto;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      margin-top: 10px;
      max-width: calc(100% - 28px);
      padding: 7px 16px;
      word-break: break-word;
      word-wrap: break-word;
    }
    #messageList .bot-animation {
      animation: present-yourself 0.3s ease 0.1s forwards;
      opacity: 0;
      /* new styles */
      max-width: 700px;
      font-size: large;
      background-color: transparent;
      box-shadow: none;
      border: none;
    }
    #messageList .user-animation {
      animation: present-yourself 0.3s ease 0.1s forwards;
      opacity: 0;
      /* new styles */
      max-width: 700px;
      font-size: large;
    }
    #messageList > :first-child {
      margin-top: auto !important;
    }
    #messageList .message.bot-message {
      align-self: flex-start;
      background-color: #E1F5FE;
      background-color: var(--df-messenger-bot-message);
      margin-right: 75px;
      line-height: 1.4;
    }
    #messageList .message.user-message {
      align-self: flex-end;
      background-color: #eeeeee;
      background-color: var(--df-messenger-user-message);
      margin-left: 75px;
    }
    #typing:after {
      content: ".";
      animation: fade_pulse 1s linear infinite;
    }
    .minimized .error {
      display: none;
    }
    .error {
      align-items: center;
      align-self: center;
      background-color: black;
      box-shadow: 1px 4px 15px 0 rgba(0, 0, 0, 0.24);
      color: white;
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      justify-content: center;
      margin-top: 0;
      opacity: 0;
      padding: 10px;
      position: absolute;
      transition: transform 0.2s, opacity 0.2s;
      transform: translateY(-100%);
      width: 95%;
      z-index: 1;
    }
    .error.show {
      opacity: 0.8;
      transform: translateY(0);
    }
    df-card {
      background-color: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24);
      margin-top: 10px;
    }
    @keyframes fade_pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes present-yourself {
      to {
        opacity: 1;
      }
    }
    `
}
export const styles_df_msg_user_input = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
  .input-box-wrapper {
    align-items: center;
    background-color: white;
    background-color: var(--df-messenger-input-box-color);
    border-top: 1px solid #eeeeee;
    display: flex;
    font-family: 'Roboto', sans-serif;
    height: 50px;
    z-index: 2;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    height: 50px;
  }
  .input-container input {
    background-color: white;
    background-color: var(--df-messenger-input-box-color);
    border: none;
    border-radius: 0 0 4px 4px;
    color: rgba(0,0,0,0.87);
    color: var(--df-messenger-input-font-color);
    font-size: large; /* 14px */
    padding-left: 15px;
    width: 100%;
  }
  ::placeholder {
    color: #757575;
    color: var(--df-messenger-input-placeholder-font-color);
    opacity: 1;
  }
  :--ms-input-placeholder {
    color: #757575;
    color: var(--df-messenger-input-placeholder-font-color);
  }
  ::-ms-input-placeholder {
    color: #757575;
    color: var(--df-messenger-input-placeholder-font-color);
  }
  input:focus {
    outline-width: 0;
  }
  #sendIcon {
    cursor: pointer;
    fill: #42A5F5;
    fill: var(--df-messenger-send-icon);
    flex: 0 0 auto;
    height: 24px;
    margin: 15px;
    viewbox: 0 0 24 24;
    width: 24px;
    transform: scale(0.01, 0.01);
    transition: 0.3s ease;
  }
  #sendIcon:hover {
    fill: green;
  }
  .valid #sendIcon {
    transform: scale(1, 1);
  }
  .check-input {
    background-color: #E53935;
    color: #fafafa;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: bold;
    height: 50px;
    line-height: 1.7;
    margin-bottom: -50px;
    padding-left: 10px;
    transition: transform 0.2s;
    transform: translateY(0);
    z-index: 1;
  }
  div.check-input.too-long {
    transform: translateY(-100%);
  }
  `
}
export const styles_df_card_img = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    img {
      border-radius: 8px;
      border-style: none;
      width: 100%;
    }
    .loading {
      height: 200px;
    }
    `
}
export const styles_df_card_title = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .image {
      background-repeat: no-repeat;
      background-size: contain;
      margin-right: 24px;
      max-height: 24px;
      max-width: 24px;
      padding-right: 24px;
    }
    .link-wrapper {
      text-decoration: none;
    }
    .title {
      color: black;
      font-weight: bold;
      /* new styles */
      font-size: large;
    }
    .subtitle {
      color: #757575;
      padding-top: 8px;
    }
    .title-card-elements {
      background-color: white;
      border-radius: 8px;
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      padding: 16px;
    }
    `
}
export const styles_df_chips = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .df-chips-wrapper {
      padding: 10px;
    }
  
    .df-chips-wrapper.clicked {
      display: none;
    }
  
    .df-chips-wrapper a {
      align-items: center;
      background-color: white;
      background-color: var(--df-messenger-chip-color);
      border-radius: 20px;
      border: 1px solid;
      border-color: #e0e0e0;
      border-color: var(--df-messenger-chip-border-color);
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24);
      color: black;
      cursor: pointer;
      display: inline-flex;
      font-family: 'Roboto', sans-serif;
      font-size: large; /* 14px */
      height: 35px;
      margin: 0 10px 10px 0;
      padding: 0 16px;
      text-decoration: none;
      vertical-align: bottom;
    }
  
    .df-chips-wrapper a:hover {
      background: hsl(0,0%,90%);
    }
  
    .df-chips-wrapper a > img {
      margin-right: 8px;
      max-height: 17.5px;
      max-width: 17.5px;
    }
  
    .df-chips-wrapper a[href]:after {
      background: center / contain no-repeat url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' fill='black' height='24' viewBox='0 0 24 24' width='24'> <path d='M0 0h24v24H0z' fill='none'/> <path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/> </svg>");
      content: "";
      display: inline-block;
      height: 15px;
      margin-left: 8px;
      width: 15px;
    }
    `
}
export const styles_df_description = (props = {}) => {
  const { maxwidth = 500, minwidth = 501 } = props
  return `
    .description-line {
      color: rgba(0,0,0,0.87);
      font-size: large; /* 14px */
      padding-top: 8px;
      word-break: break-word;
    }
    #descriptionWrapper {
      background-color: white;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', sans-serif;
      padding: 16px;
    }
    .title {
      color: black;
      font-size: large; /* 14px */
      font-weight: bold;
    }
    `
}
