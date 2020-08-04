class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :state, default: "inprogress"
      t.timestamps
    end
    add_index :galleries, :title, unique:true  
    add_index :galleries, :user_id
  end
end
