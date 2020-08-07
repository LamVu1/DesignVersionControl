class Api::CommentsController < ApplicationController
   

    def create 
        @comment = Comment.new(comment_params)
        # @comment.gallery_id = params[:gallery_id]
        @comment.user_id = current_user.id
        
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.where(gallery_id: params[:gallery_id])
        render "api/comments/index"
    end

    def destroy
        @comment = Comment.find_by(gallery_id: params[:gallery_id], id: params[:id])        
        @comment.destroy
        render "api/comments/show"
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :gallery_id)
    end
end
