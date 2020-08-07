@comments.each do |comment|
    json.set! comment.id do 
       json.id comment.id
       json.body comment.body
       json.user_id comment.user_id
       json.author comment.user.username
       json.gallery_id comment.gallery_id
       json.create_at comment.created_at
       json.updated_at comment.updated_at
    end
end

