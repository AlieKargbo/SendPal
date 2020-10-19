class Api::PaymentsController < ApplicationController
    def index
        @payments = Payment.all
        render :index
    end
    
    def create
        @payment = Payment.new(payment_params)
        @payer = User.find_by(id: params[:transaction][:payer_id])
        @payee = User.find_by(id: params[:transaction][:payee_id])
        
        if @payment.save
            payer.balance = (@payer.balance - @payment.amount)
            payee.balance = (@payee.balance + @payment.amount)
            # payment amount must be a number
            # payer balance must be > 0
            render json: show 
        else
            render json: ['Invalid transaction details! All fields must be complete.'], status: 418
        end
    end

    def show
        @payment = Payment.find(params[:id])
        render :show
    end

    private
    def payment_params
        params.require(:payment).permit(:amount, :note, :payer_id, :payee_id)
    end
end
