class Comment < ApplicationRecord
    validates :body, :user_id, :gallery_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :gallery,
    primary_key: :id,
    foreign_key: :gallery_id,
    class_name: :Gallery
end
