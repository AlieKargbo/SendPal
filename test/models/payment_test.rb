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
require 'test_helper'

class PaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
