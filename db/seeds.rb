require 'faker'
require 'colorize'

100.times do
  Order.create(
    name: Faker::Artist.name,
    description: Faker::Lorem.sentence,
    appointment_time: Faker::Time.between(2.days.ago, Time.now),
    supplies: Faker::Commerce.department,
  )
end

puts "You have seeded the database with #{Order.count} orders. Now bring the ring to Mordor."