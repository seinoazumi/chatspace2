class AddColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_reference :messages, :group, foreign_key: true
    add_reference :messages, :user, foreign_key: true
  end
end
