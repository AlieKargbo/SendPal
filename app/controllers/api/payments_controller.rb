class Api::PaymentsController < ApplicationController
    def index
        @payments = Payment.all
        render :index
    end
    
    def create
        # debugger
        @payment = Payment.new(payment_params)
        # debugger
        payer = User.find_by(id: params[:payment][:payer_id])
        # debugger
        payee = User.find_by(id: params[:payment][:payee_id])
        
        # debugger
        if @payment.save
            # current_user.balance = (@payer.balance - @payment.amount)
            # debugger
            # User.find_by(id: @payee.id).increase_payee_balance(@payment.amount)
            payee.update_attributes(balance: payee.balance + @payment.amount)
            payer.update_attributes(balance: payer.balance - @payment.amount)
            @payer = payer 
            @payee = payee
            # debugger

            render :show 
        else
            # render json: ['Invalid transaction details! All fields must be complete.'], status: 418
            render json: @payment.errors.full_messages, status: 400
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
