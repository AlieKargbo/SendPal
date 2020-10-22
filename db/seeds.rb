# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Payment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('payments')

me = User.create!(
  email: 'noblest_cheetah@noblecheetah.io',
  password: 'password'
)

demo = User.create!(
  email: "demo_user@aa.io",
  password: 'password' 
)

u1 = User.create!(
  email: 'jackpack@noblecheetah.io',
  password: 'password'
)

u2 = User.create!(
  email: 'jdeezy@noblecheetah.io',
  password: 'password'
)
u3 = User.create!(
  email: 'jonstummywummy@noblecheetah.io',
  password: 'password'
)

u4 = User.create!(
  email: 'chris2tall@noblecheetah.io',
  password: 'password'
)

u5 = User.create!(
  email: 'peteypal@noblecheetah.io',
  password: 'password'
)

u6 = User.create!(
  email: 'tay@noblecheetah.io',
  password: 'password'
)

u7 = User.create!(
  email: 'LisaREALG@noblecheetah.io',
  password: 'password'
)

payment1 = Payment.create!(
  amount: 50.00, 
  note: 'wingz & thingz 🍗', 
  payer_id: u1.id, 
  payee_id: u2.id
)

payment2 = Payment.create!(
  amount: 25.00, 
  note: 'claws 🍻', 
  payer_id: u3.id, 
  payee_id: u4.id
)

payment3 = Payment.create!(
  amount: 22.25, 
  note: 'Shochu 🍶', 
  payer_id: u5.id, 
  payee_id: u6.id
)

payment4 = Payment.create!(
  amount: 220, 
  note: 'best snowboarding trip ever ❄️ 🏂', 
  payer_id: u1.id, 
  payee_id: u2.id
)

payment5 = Payment.create!(
  amount: 30, 
  note: 'donuts!', 
  payer_id: u2.id, 
  payee_id: u7.id
)

