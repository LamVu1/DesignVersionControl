@admins.each do |admin|
    json.set! admin.id do 
       json.id admin.id
       json.name admin.user.name
    end
end
