export class News {
    constructor({
      article_id,
      country,    
      category,  
      language,    
      image,       
      title,       
      description, 
      source_name, 
      pubDate,      
    }) {
      this.article_id = article_id ;
      this.country = country ;
      this.category = category ;
      this.language = language ;
      this.image = image ;
      this.title = title ;
      this.description = description ;
      this.source_name = source_name ;
      this.pubDate = pubDate ;
    }
}
