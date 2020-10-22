# debugger
json.partial! "api/requests/request", request: @request

json.requestor do
    json.extract! @requestor, :id, :balance
end
json.requestee do
    json.extract! @requestee, :id, :balance
end