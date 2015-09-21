Rails.application.routes.draw do
  root "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :destroy]
    resources :users
    resources :boards, except: [:edit]
    resources :pins
  end
end
