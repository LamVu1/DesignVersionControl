class Api::GalleriesController < ApplicationController
   

    def create
        
        @gallery = Gallery.new()
        @gallery.title = params[:gallery][:title]
        @gallery.user_id = current_user.id
        
        if @gallery.save
            images = params[:gallery][:images]
            
            images.each do |image|
                @gallery.images.attach(image)
            end
            render "api/galleries/show"
        else
            render json:
            @gallery.errors.full_messages, status: 422
        end
    end

    def index
        @galleries = Gallery.all
        render :index
    end

    def show    
        
        @gallery = Gallery.find(params[:id])
        
        if @gallery
            render "api/galleries/show"
        else
            render json: @gallery.errors.full_messages, status: 422
        end
    end


    def update
      
        @gallery = Gallery.find(params[:id])
    
        if @gallery.update(state: params[:state])
          render :show
        else
            render json: @cart_item.errors.full_messages, status: 422          
        end
      end


    def destroy
        @gallery = Gallery.find(params[:id])
        if @gallery.destroy
          render :show
        else
          render json: @gallery.errors.full_messages, status: 422
        end
      end

      private

    def gallery_params
        params.require(:gallery).permit(:state, :title, :images)
    end

end
