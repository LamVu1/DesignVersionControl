json.set! @gallery.id do 
        json.id @gallery.id
        json.title @gallery.title
        json.state @gallery.state
        json.updated_at @gallery.updated_at
        json.imagesURL @gallery.images.map {|file| url_for(file)}
end