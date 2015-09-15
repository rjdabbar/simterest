Rails.application.routes.draw do
  root "users#index"
  resources :users
  resource :session, only: [:new, :create, :destroy]
end
