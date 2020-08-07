Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    
    resource :user, only: [:create, :update, :show]
    
    resource :session, only: [:create, :destroy]

    resources :admins, only: [:create, :destroy, :index, :show]

    resources :galleries do

      resources :comments
      
    end
    
  end

  root "static_pages#root"

end
