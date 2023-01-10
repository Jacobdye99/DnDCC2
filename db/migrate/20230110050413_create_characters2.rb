class CreateCharacters2 < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :race
      t.string :class
      t.string :alignment
      t.timestamps
    end
  end
end
