function Province(lang) {

  let province_data

  if (lang == "th"){
    province_data = [
			"เชียงใหม่",
      "เชียงราย",
      "เพชรบุรี",
    ]
  }else{
    province_data = [
      "Amnat Charoen",
      "Ang Thong",
      "Bangkok",
    ]
  }


  return province_data;
}

export { Province };
