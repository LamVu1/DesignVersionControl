class Gallery < ApplicationRecord
    validates :title, :user_id,  presence: true

    has_many_attached :images

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id


end
