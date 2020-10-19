# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

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
  email: 'jonjiggah@noblecheetah.io',
  password: 'password'
)

u4 = User.create!(
  email: 'chrischeetah@noblecheetah.io',
  password: 'password'
)

u5 = User.create!(
  email: 'peteypal@noblecheetah.io',
  password: 'password'
)