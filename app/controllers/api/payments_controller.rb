class Api::PaymentsController < ApplicationController
    def index
        @payments = Payment.all
        render :index
    end
    
    def create
        # debugger
        @payment = Payment.new(payment_params)
        # debugger
        @payer = User.find_by(id: params[:payment][:payer_id])
        # debugger
        @payee = User.find_by(id: params[:payment][:payee_id])
        
        debugger
        if @payment.save
            # current_user.balance = (@payer.balance - @payment.amount)
            # debugger
            # User.find_by(id: @payee.id).increase_payee_balance(@payment.amount)
            @payee.update_attributes(balance: @payee.balance + @payment.amount)
            current_user.update_attributes(balance: current_user.balance - @payment.amount)
            # debugger
            # payment amount must be a number
            # payer balance must be > 0
            # debugger
            render :show 
        else
            # render json: ['Invalid transaction details! All fields must be complete.'], status: 418
            render json: @payment.errors.full_messages, status: 400
        end
    end

    def show
        # debugger
        @payment = Payment.find(params[:id])
        # extract user information and the payee
        render :show
    end

    private
    def payment_params
        params.require(:payment).permit(:amount, :note, :payer_id, :payee_id)
    end
end
