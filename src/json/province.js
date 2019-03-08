function Province(lang) {

  let province_data

  if (lang == "th"){
    province_data = [
        {"label" : "เชียงใหม่"},
        {"label" : "เชียงราย"},
        {"label" : "เพชรบุรี"}
  ]
  }else{
    province_data = [
        {"label" : "Amnat Charoen"},
        {"label" : "Ang Thong"},
        {"label" : "Bangkok"}
    ]
  }


  return province_data;
}

export { Province };
