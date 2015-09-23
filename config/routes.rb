Rails.application.routes.draw do
  root "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
  
  namespace :api, defaults: { format: :json } do
    get "/search", to: "searches#search"
    resource :session, only: [:show, :destroy]
    resources :users
    resources :boards, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :pins, except: [:new, :edit]
  end
end
