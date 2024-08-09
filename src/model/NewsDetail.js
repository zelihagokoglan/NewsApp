class NewsQuery {
  constructor({
    apikey,
    id, 
    q,
    timeframe, 
    country, // country code: gb tr
    category, 
    language, // language code: en tr
    timezone, 
    image = 1, 
    video = 0, 

  }) {
    this.apikey = apikey;
    this.id = id;
    this.q = q;
    this.timeframe = timeframe;
    this.country = country;
    this.category = category;
    this.language = language;
    this.timezone = timezone; 
    this.image = image;
    this.video = video;

  }}