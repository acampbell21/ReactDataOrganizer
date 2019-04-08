class AddAppointmentTimeToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :appointment_time, :datetime
  end
end
