class Api::RequestsController < ApplicationController
    def index
        @requests = Request.all
        render :index
    end
    
    def create
        @request = Request.new(request_params)
        requestor = User.find_by(id: params[:request][:requestor_id])
        requestee = User.find_by(id: params[:request][:requestee_id])
        # debugger
        if @request.save
            requestor.update_attributes(balance: requestor.balance + @request.amount)
            # debugger
            requestee.update_attributes(balance: requestee.balance - @request.amount)
            @requestor = requestor 
            @requestee = requestee
            
            # debugger
            render :show 
        else
            render json: @request.errors.full_messages, status: 400
        end
    end

    # def show
    #     # debugger
    #     @request = request.find(params[:id])
    #     render :show
    # end

    private
    def request_params
        params.require(:request).permit(:amount, :note, :requestor_id, :requestee_id)
    end
end
