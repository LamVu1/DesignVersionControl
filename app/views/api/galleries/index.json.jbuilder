@galleries.each do |gallery|
    json.set! gallery.id do 
        json.id gallery.id
        json.title gallery.title
        json.state gallery.state
        json.imagesURL gallery.images.map {|file| url_for(file)}
   end
end