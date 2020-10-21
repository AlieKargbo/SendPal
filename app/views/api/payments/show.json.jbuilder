# debugger
json.partial! "api/payments/payment", payment: @payment
# debugger

json.payer do
    json.extract! @payer, :id, :balance
end
json.payee do
    json.extract! @payee, :id, :balance
end