class Api::ListsController < ApplicationController
    before_action :set_parent
    before_action :set_list, only: [:show, :update, :destroy]

    def index
        render json: @user.lists
    end

    def show
        render json: @list
    end

    def create
        @list = @user.lists.new(list_params)
        if @list.save
            render json: @list
        else
            render json: { errors: @list.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @list.update(list_params)
            render json: @list
        else
            render json: { errors: @list.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @list.destroy
        render json: { message: 'list deleted' }
    end

    private

        def set_parent
            @user = User.find(params[:user_id])
        end

        def set_list
            @list = @user.lists.find(params[:id])
        end

        def list_params
            params.require(:list).permit(:name, :desc)
        end

end
