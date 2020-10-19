# == Schema Information
#
# Table name: payments
#
#  id       :bigint           not null, primary key
#  payer_id :integer          not null
#  payee_id :integer          not null
#  amount   :float            not null
#  body     :string           not null
#
class Payment < ApplicationRecord
end
