class Api::AdminsController < ApplicationController

    def create 
        @admin = Admin.new(comment_params)
       
        if @admin.save
            render "api/admins/show"
        else
            render json: @admin.errors.full_messages, status: 422
        end
    end

    def index
        @admins = Admin.all
        render :index
    end

    def show
        @admin = Admin.find(params[:id])
        render "api/admins/show"
    end

    def destroy
        @admin = Admin.find(params[:id])
        if @admin.destroy
          render :show
        else
          render json: @admin.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:admin).permit(:user_id)
    end
end