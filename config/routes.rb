Rails.application.routes.draw do
  devise_for(:users, controllers: { registrations: "registrations" })

  resources :posts, only: [:index, :create, :destroy]

  root "posts#index"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
