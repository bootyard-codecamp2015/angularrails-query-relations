Rails.application.routes.draw do
  resources :home, only: [:index]
  root 'home#index' 

    namespace :api, defaults: { format: :json } do
    namespace :public do
      resources :topics, only: [:index]
      resources :votes, only: [:create]

      end
    end
end
