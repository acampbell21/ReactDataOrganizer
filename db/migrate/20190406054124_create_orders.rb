class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :description
      t.string :appointment
      t.string :supplies

      t.timestamps
    end
  end
end
