export const maximize = () => {
  df_msg_styles.innerHTML = styles_df_msg({
    maxwidth: 2000,
    minwidth: 2001
  })
  df_msg_chat_styles.innerHTML = styles_df_msg_chat({
    maxwidth: 2000,
    minwidth: 2001
  })
  df_msg_titlebar_styles.innerHTML = styles_df_msg_titlebar({
    maxwidth: 2000,
    minwidth: 2001
  })
}
export const minimize = () => {
  df_msg_styles.innerHTML = styles_df_msg({
    maxwidth: 500,
    minwidth: 501
  })
  df_msg_chat_styles.innerHTML = styles_df_msg_chat({
    maxwidth: 500,
    minwidth: 501
  })
  df_msg_titlebar_styles.innerHTML = styles_df_msg_titlebar({
    maxwidth: 500,
    minwidth: 501
  })
}

export const writeFile = ({ content, filename }) => {
  const file = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
export const processStyles = (styles) => {
  // si econtramos mas de un salto de linea, lo reemplazamos por uno solo
  // entre los pares { y } todas las lineas deben tener un tab de mas
  // console.log('styles: ', styles)
  let newStyles = ''
  let tabs = 0
  styles.split('\n').forEach((line) => {
    if (line.trim() === '') return
    if (line.includes('}')) tabs--
    newStyles += `${'\t'.repeat(tabs)}${line.trim()}\n`
    if (line.includes('{')) tabs++
  })
  return newStyles
}
