function rem(){
  let width = document.documentElement.clientWidth   //视觉视口(设备宽度)
  let fontSize = width / 10
  document.documentElement.style = `font-size:${fontSize}px`
}

rem()



