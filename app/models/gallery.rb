class Gallery < ApplicationRecord
    validates :title, :user_id,  presence: true

    has_many_attached :images

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    has_many :comments,
    primary_key: :id,
    foreign_key: :gallery_id,
    class_name: :Comment


end
